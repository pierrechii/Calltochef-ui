"use client"

import Link from "next/link"
import { ShaderAnimation } from "@/components/ui/shader-animation"

export default function Presentation() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24">
        {/* Titre et sous-titre */}
        <div className="text-center mb-24 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Découvrez CallToChef
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            L’assistant vocal intelligent qui répond à vos appels clients, prend les réservations
            et booste vos ventes — 24h/24.
          </p>
        </div>

        {/* Présentation synthétique */}
        <div className="mb-24 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">
            Pourquoi choisir CallToChef ?
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li>🤖 IA automatique — répond aux appels 24h/24</li>
            <li>📞 Prise de commandes — réservations et commandes incluses</li>
            <li>⏰ Gain de temps — libère votre équipe en salle et en cuisine</li>
            <li>✨ Expérience moderne — service premium pour vos clients</li>
          </ul>
        </div>

        {/* Section Pricing */}
        <section className="w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">💰 Nos offres</h2>
          <p className="text-gray-300 mb-12">
            Choisissez le pack qui correspond à votre restaurant
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pack Essentiel */}
            <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">🥗 Pack Essentiel</h3>
              <p className="text-gray-400 mb-4">
                Entrée simple pour tester CallToChef sans risque.
              </p>
              <p className="text-4xl font-extrabold text-green-400 mb-2">
                €39<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Frais d’installation : 29 €
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>📞 Réception d’appels 24/7</li>
                <li>📩 Confirmation SMS</li>
                <li>📊 Suivi via Google Sheets</li>
                <li>📧 Support par email</li>
              </ul>
              <Link
                href="/formulaire?pack=Essentiel"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Choisir Essentiel
              </Link>
            </div>

            {/* Pack Confort */}
            <div className="bg-zinc-900/70 border-2 border-cyan-400 rounded-2xl p-8 shadow-2xl hover:scale-105 transition duration-300 relative">
              <span className="absolute -top-4 right-6 bg-cyan-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                Populaire
              </span>
              <h3 className="text-2xl font-bold mb-3">🍝 Pack Confort</h3>
              <p className="text-gray-400 mb-4">
                Le vrai standard pour un resto moderne.
              </p>
              <p className="text-4xl font-extrabold text-green-400 mb-2">
                €69<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Frais d’installation : 49 €
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>📞 Réservations + commandes</li>
                <li>📩 SMS & email</li>
                <li>📅 Google Calendar</li>
                <li>📊 Dashboard Notion/Sheets</li>
                <li>⚡ Support prioritaire</li>
              </ul>
              <Link
                href="/formulaire?pack=Confort"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Choisir Confort
              </Link>
            </div>

            {/* Pack Premium */}
            <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">🍷 Pack Premium</h3>
              <p className="text-gray-400 mb-4">
                Solution haut de gamme pour restaurants exigeants.
              </p>
              <p className="text-4xl font-extrabold text-green-400 mb-2">
                €119<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Frais d’installation : 79 €
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>📞 Réservations + commandes + FAQ</li>
                <li>🎤 Voix personnalisée</li>
                <li>📈 Suivi des performances</li>
                <li>⚡ Support prioritaire</li>
              </ul>
              <Link
                href="/formulaire?pack=Premium"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Choisir Premium
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
