import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const { customerId, paymentMethodId, offer } = await req.json();

    const priceMap: Record<string, string | undefined> = {
      REZO: process.env.NEXT_PUBLIC_PRICE_REZO,
      REZO_CHARLY: process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY
    };

    if (!offer || !priceMap[offer]) {
      return Response.json({ error: "Invalid offer" }, { status: 400 });
    }

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceMap[offer]! }],
      trial_period_days: 7,
      default_payment_method: paymentMethodId
    });

    return Response.json({
      subscriptionId: subscription.id,
      status: subscription.status,
      trialEnd: subscription.trial_end
    });
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

