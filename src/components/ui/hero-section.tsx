"use client"

import Link from "next/link"
import { createCtcRipple } from "./ButtonLiquid"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Votre assistant <span className="text-emerald-500">IA</span> intégré à votre site, disponible 24h/24
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                CallToChef automatise les échanges sur votre site : réponses instantanées, prise de rendez-vous et synchronisation avec vos outils.
                Faites l'expérience du widget en bas à droite&nbsp;: c'est exactement ce que nous intégrons chez nos clients.
              </p>
            </div>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/formulaire?pack=Essentielle"
                className="ctc-btn ctc-btn--primary ctc-btn--lg ctc-btn--ripple text-center"
                onPointerDown={createCtcRipple}
              >
                Essayer CallToChef gratuitement
              </Link>
              <Link
                href="#processus"
                className="ctc-btn ctc-btn--ghost ctc-btn--lg text-center"
                onPointerDown={createCtcRipple}
              >
                Voir la démo
              </Link>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-md ring-1 ring-emerald-100">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-500/10 text-2xl">
                💬
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Démo en direct
                </p>
                <p className="text-sm text-gray-600">
                  Ouvrez le chatbot en bas à droite pour découvrir l'expérience CallToChef intégrée à votre site.
                </p>
              </div>
            </div>

            {/* Badges de confiance */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Disponible 24h/24</span>
              </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Installation rapide</span>
                  </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Synchronisation automatique</span>
              </div>
            </div>
          </div>

          {/* Visuel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Assistant IA CallToChef</h3>
                      <p className="text-sm text-gray-600">Disponible 24h/24 pour vos clients</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">"Bonjour ! Avez-vous de la place ce soir pour 4 personnes ?"</p>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">"Parfait ! Je vous réserve une table à 20h. Confirmation envoyée par SMS."</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">Réservation automatique</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
