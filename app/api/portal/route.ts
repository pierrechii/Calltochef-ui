import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { customerId } = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/compte`
    });

    return Response.json({ url: session.url });
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

