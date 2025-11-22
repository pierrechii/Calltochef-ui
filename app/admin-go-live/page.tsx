"use client"

import { useState } from "react"
import { ButtonLiquid } from "@/components/ui/ButtonLiquid"

export default function AdminGoLive() {
  const [customerId, setCustomerId] = useState("")
  const [paymentMethodId, setPaymentMethodId] = useState("")
  const [offer, setOffer] = useState("REZO")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState("")

  const activate = async () => {
    if (!customerId || !customerId.startsWith("cus_")) {
      setError("Customer ID invalide (doit commencer par cus_)")
      return
    }

    if (!paymentMethodId || !paymentMethodId.startsWith("pm_")) {
      setError("Payment Method ID invalide (doit commencer par pm_)")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const r = await fetch("/api/subscriptions/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId, paymentMethodId, offer }),
      })

      const data = await r.json()

      if (!r.ok) {
        throw new Error(data.error || "Erreur lors de l'activation")
      }

      setResult(data)
      setCustomerId("")
      setPaymentMethodId("")
    } catch (e: any) {
      console.error(e)
      setError(e.message || "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Go-Live - Activer l'abonnement
          </h1>
          <p className="text-gray-600 mb-8">
            Entrez les IDs récupérés depuis le webhook Stripe pour activer l'abonnement avec 
            une période d'essai de 7 jours.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {result && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="font-semibold text-emerald-900 mb-2">✅ Abonnement activé !</p>
              <div className="text-sm text-emerald-700 space-y-1">
                <p>Subscription ID: {result.subscriptionId}</p>
                <p>Status: {result.status}</p>
                <p>
                  Fin de l'essai:{" "}
                  {result.trialEnd
                    ? new Date(result.trialEnd * 1000).toLocaleString("fr-FR")
                    : "N/A"}
                </p>
              </div>
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method ID (pm_xxx) *
              </label>
              <input
                type="text"
                placeholder="pm_..."
                value={paymentMethodId}
                onChange={(e) => setPaymentMethodId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Offre *
              </label>
              <select
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                <option value="REZO">REZO</option>
                <option value="REZO_CHARLY">REZO_CHARLY</option>
              </select>
            </div>

            <ButtonLiquid
              variant="primary"
              size="lg"
              onClick={activate}
              disabled={loading}
              className="w-full"
              ripple
            >
              {loading ? "Activation..." : "Activer essai 7 jours"}
            </ButtonLiquid>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              💡 Récupérez les IDs depuis les logs du serveur lors de la réception du webhook 
              Stripe (setup_intent.succeeded ou checkout.session.completed).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


