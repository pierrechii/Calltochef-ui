import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    // Vérifier que STRIPE_SECRET_KEY est défini
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("❌ STRIPE_SECRET_KEY non défini");
      return Response.json(
        { error: "Stripe configuration missing" },
        { status: 500 }
      );
    }

    // Vérifier que NEXT_PUBLIC_FRONTEND_URL est défini
    if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
      console.error("❌ NEXT_PUBLIC_FRONTEND_URL non défini");
      return Response.json(
        { error: "Frontend URL not configured" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20"
    });

    const body = await req.json();
    console.log("📦 BODY RECU:", JSON.stringify(body, null, 2));

    const offer = body.offer || body.priceId; // rétro-compatibilité minimale

    if (!offer) {
      console.error("❌ Aucune offre reçue");
      return Response.json({ error: "Missing offer" }, { status: 400 });
    }

    // Récupérer les priceIds depuis l'API prices ou les variables d'environnement
    const priceIds = {
      REZO: process.env.NEXT_PUBLIC_PRICE_REZO || process.env.PRICE_REZO,
      REZO_CHARLY: process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY || process.env.PRICE_REZO_CHARLY,
    };

    const validPriceIds = [
      priceIds.REZO,
      priceIds.REZO_CHARLY
    ].filter(Boolean); // Retire les valeurs undefined

    console.log("✅ Price IDs valides:", validPriceIds);
    console.log("📋 Offre reçue:", offer);

    if (!validPriceIds.includes(offer)) {
      console.error("❌ Offre invalide:", {
        offer,
        validPriceIds,
        priceIds
      });
      return Response.json(
        { 
          error: "Invalid offer",
          received: offer,
          valid: validPriceIds
        },
        { status: 400 }
      );
    }

    const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: [
        {
          price: offer,
          quantity: 1
        }
      ],
      success_url: `${frontendUrl}/success`,
      cancel_url: `${frontendUrl}/cancel`
    };

    // Email facultatif
    if (body.email && typeof body.email === "string") {
      sessionParams.customer_email = body.email;
    }

    console.log("🚀 Création de la session Stripe avec:", {
      mode: sessionParams.mode,
      price: offer,
      success_url: sessionParams.success_url,
      cancel_url: sessionParams.cancel_url,
      email: sessionParams.customer_email || "non fourni"
    });

    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log("✅ Session créée:", session.id);

    return Response.json({ url: session.url });

  } catch (error: any) {
    console.error("🔥 ERREUR API CHECKOUT:", {
      message: error.message,
      type: error.type,
      code: error.code,
      statusCode: error.statusCode,
      stack: error.stack
    });
    
    // Retourner un message d'erreur détaillé
    let errorMessage = "Internal server error";
    let errorDetails: any = {};

    if (error.message) {
      errorMessage = error.message;
    }

    // Messages d'erreur spécifiques Stripe
    if (error.type === "StripeInvalidRequestError") {
      if (error.message?.includes("Invalid API Key")) {
        errorMessage = "Clé API Stripe invalide. Vérifiez STRIPE_SECRET_KEY sur Vercel.";
      } else if (error.message?.includes("No such price")) {
        errorMessage = "Price ID introuvable dans Stripe. Vérifiez les Price IDs.";
      } else {
        errorMessage = `Erreur Stripe: ${error.message}`;
      }
    }

    // En production, on retourne un message générique mais on log les détails
    if (process.env.NODE_ENV === "production") {
      return Response.json(
        { 
          error: errorMessage,
          code: error.code || error.type
        },
        { status: 500 }
      );
    } else {
      // En développement, on retourne plus de détails
      return Response.json(
        { 
          error: errorMessage,
          code: error.code || error.type,
          details: {
            message: error.message,
            type: error.type,
            code: error.code
          }
        },
        { status: 500 }
      );
    }
  }
}
