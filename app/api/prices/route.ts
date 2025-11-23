import { NextResponse } from "next/server"

export async function GET() {
  try {
    const prices = {
      REZO: process.env.NEXT_PUBLIC_PRICE_REZO || process.env.PRICE_REZO,
      REZO_CHARLY: process.env.NEXT_PUBLIC_PRICE_REZO_CHARLY || process.env.PRICE_REZO_CHARLY,
    }

    // Vérifier que les prices sont définis
    if (!prices.REZO || !prices.REZO_CHARLY) {
      console.error("❌ Price IDs manquants:", {
        REZO: !!prices.REZO,
        REZO_CHARLY: !!prices.REZO_CHARLY,
      })
      return NextResponse.json(
        { error: "Price IDs not configured" },
        { status: 500 }
      )
    }

    return NextResponse.json(prices)
  } catch (error) {
    console.error("Erreur API prices:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

