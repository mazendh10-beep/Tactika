import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getSession } from "@/lib/auth";

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({
      error: "Payments coming soon"
    }, { status: 503 });
  }

  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: session.email,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium/cancel`
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Stripe session failed" }, { status: 500 });
  }
}
