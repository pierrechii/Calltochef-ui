import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-06-20"
    });

    const body = await req.json();
    console.log("BODY RECU:", body);

    const offer = body.offer || body.priceId; // rétro-compatibilité minimale

    if (!offer) {
      console.error("❌ Aucune offre reçue");
      return Response.json({ error: "Missing offer" }, { status: 400 });
    }

    const validPriceIds = [
      process.env.NEXT_PUBLIC_PRICE_REZO,
      process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY,
      process.env.PRICE_REZO,
      process.env.PRICE_REZO_CHARLY
    ].filter(Boolean); // Retire les valeurs undefined

    if (!validPriceIds.includes(offer)) {
      console.error("❌ Offre invalide:", offer);
      return Response.json({ error: "Invalid offer" }, { status: 400 });
    }

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: [
        {
          price: offer,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/cancel`
    };

    // Email facultatif
    if (body.email && typeof body.email === "string") {
      sessionParams.customer_email = body.email;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return Response.json({ url: session.url });

  } catch (error: any) {
    console.error("🔥 ERREUR API CHECKOUT:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
