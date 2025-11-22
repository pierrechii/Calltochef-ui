"use client"

import { useState } from "react"
import { ButtonLiquid } from "@/components/ui/ButtonLiquid"

export default function Commencer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const start = async () => {
    if (!email || !email.includes("@")) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setLoading(true)
    setError("")

    try {
      const r = await fetch("/api/checkout/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await r.json()

      if (!r.ok) {
        throw new Error(data.error || "Erreur lors de la création de la session")
      }

      // Redirection vers Stripe Checkout
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
            Commencer avec CallToChef
          </h1>
          <p className="text-gray-600 mb-8">
            Entrez votre email pour démarrer. Vous pourrez configurer votre moyen de paiement sans engagement. 
            L'installation de votre assistant IA prendra 1 à 7 jours. Votre période d'essai de 7 jours commencera 
            uniquement lors de l'activation de votre abonnement.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && start()}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                disabled={loading}
              />
            </div>

            <ButtonLiquid
              variant="primary"
              size="lg"
              onClick={start}
              disabled={loading}
              className="w-full"
              ripple
            >
              {loading ? "Redirection..." : "Continuer vers le paiement"}
            </ButtonLiquid>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              🔒 Vos informations sont sécurisées. Aucun paiement ne sera effectué maintenant.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


