"use client"

import { useState } from "react"
import { ButtonLiquid } from "@/components/ui/ButtonLiquid"

export default function Compte() {
  const [customerId, setCustomerId] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const openPortal = async () => {
    if (!customerId || !customerId.startsWith("cus_")) {
      setError("Customer ID invalide (doit commencer par cus_)")
      return
    }

    setLoading(true)
    setError("")

    try {
      const r = await fetch("/api/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId }),
      })

      const data = await r.json()

      if (!r.ok) {
        throw new Error(data.error || "Erreur lors de l'ouverture du portail")
      }

      // Redirection vers le Customer Portal Stripe
      window.location.href = data.url
    } catch (e: any) {
      console.error(e)
      setError(e.message || "Une erreur est survenue")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Mon compte
          </h1>
          <p className="text-gray-600 mb-8">
            Gérez votre abonnement, modifiez votre moyen de paiement ou annulez votre abonnement 
            depuis le portail client Stripe.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer ID (cus_xxx) *
              </label>
              <input
                type="text"
                placeholder="cus_..."
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && openPortal()}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors font-mono text-sm"
                disabled={loading}
              />
            </div>

            <ButtonLiquid
              variant="primary"
              size="lg"
              onClick={openPortal}
              disabled={loading}
              className="w-full"
              ripple
            >
              {loading ? "Ouverture..." : "Accéder au portail client"}
            </ButtonLiquid>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              💡 Dans le portail, vous pourrez changer votre carte bancaire, consulter vos factures 
              et annuler votre abonnement à tout moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


