import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { stripe } from "@/lib/stripe";
import { getSessionFromCookies } from "@/lib/auth";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRICE_ID) {
    return NextResponse.json({
      error: "Payments coming soon"
    }, { status: 503 });
  }

  const cookieStore = await cookies();
  const session = await getSessionFromCookies(cookieStore);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const origin = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin;
    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: session.email,
      metadata: {
        userId: session.id
      },
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      success_url: `${origin}/premium/success`,
      cancel_url: `${origin}/premium/cancel`
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Stripe session failed" }, { status: 500 });
  }
}
