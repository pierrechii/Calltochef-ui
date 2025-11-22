"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

function MerciContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")

  useEffect(() => {
    if (sessionId) {
      setStatus("success")
    }
  }, [sessionId])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Merci ! Votre demande a été enregistrée
          </h1>

          <div className="space-y-6 text-left mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-3">📋 Prochaines étapes</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Votre moyen de paiement a été enregistré en toute sécurité</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Notre équipe va installer votre assistant IA CallToChef (1 à 7 jours)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Vous recevrez un email dès que tout sera prêt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Votre période d'essai de 7 jours commencera à l'activation</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Important :</strong> Aucun paiement n'a été effectué pour le moment. 
                Vous ne serez débité qu'après la fin de votre période d'essai gratuite de 7 jours.
              </p>
            </div>

            {sessionId && (
              <div className="text-sm text-gray-500">
                <p>Session ID : {sessionId}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="ctc-btn ctc-btn--primary ctc-btn--md"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/admin-go-live"
              className="ctc-btn ctc-btn--ghost ctc-btn--md"
            >
              Espace Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Merci() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement...</p>
          </div>
        </div>
      }
    >
      <MerciContent />
    </Suspense>
  )
}


