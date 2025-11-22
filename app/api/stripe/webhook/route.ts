import Stripe from "stripe";

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      console.log("Checkout completed:", event.data.object.id);
    }

    return new Response("ok", { status: 200 });
  } catch (err: any) {
    return new Response("Invalid signature", { status: 400 });
  }
}

