import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export const config = {
  api: {
    bodyParser: false
  }
};

export async function POST(request: Request) {
  const rawBody = await request.text();
  const sig = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;
      const email = session.customer_details?.email as string | undefined;
      const stripeCustomerId = session.customer as string;
      if (email) {
        await db`INSERT INTO subscriptions (id, user_id, stripe_customer_id, status)
          SELECT uuid_generate_v4(), u.id, ${stripeCustomerId}, 'active'
          FROM users u WHERE u.email = ${email}
          ON CONFLICT (stripe_customer_id) DO UPDATE SET status = EXCLUDED.status`;

        await db`UPDATE users SET ispremium = true WHERE email = ${email}`;
      }
    }

    if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as any;
      const status = subscription.status as string;
      const customerId = subscription.customer as string;
      await db`UPDATE subscriptions SET status = ${status} WHERE stripe_customer_id = ${customerId}`;
      if (status !== "active") {
        await db`UPDATE users SET ispremium = false WHERE id IN (SELECT user_id FROM subscriptions WHERE stripe_customer_id = ${customerId})`;
      }
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Webhook handling failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
