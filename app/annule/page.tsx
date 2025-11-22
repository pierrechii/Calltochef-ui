"use client"

import Link from "next/link"

export default function Annule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⚠️</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Paiement annulé
          </h1>

          <p className="text-gray-600 mb-8">
            La configuration de votre moyen de paiement a été annulée. Vous pouvez réessayer à tout moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/commencer"
              className="ctc-btn ctc-btn--primary ctc-btn--md"
            >
              Réessayer
            </Link>
            <Link
              href="/"
              className="ctc-btn ctc-btn--ghost ctc-btn--md"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


