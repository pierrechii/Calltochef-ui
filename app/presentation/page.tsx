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
            Le chat IA intelligent qui répond à vos clients, gère vos réservations
            et synchronise tout automatiquement — 24h/24.
          </p>
        </div>

        {/* Présentation synthétique */}
        <div className="mb-24 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">
            Pourquoi choisir CallToChef ?
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li>🤖 Chat IA automatique — répond aux questions 24h/24</li>
            <li>📅 Gestion des réservations — prise et confirmation instantanées</li>
            <li>⏰ Gain de temps — libère votre équipe en salle et en cuisine</li>
            <li>✨ Expérience moderne — service premium pour vos clients</li>
          </ul>
        </div>

        {/* Section Pricing */}
        <section className="w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">💰 Nos offres</h2>
          <p className="text-gray-300 mb-12">
            Choisissez l'offre adaptée à votre restaurant
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offre Essentielle */}
            <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">🥈 Offre Essentielle</h3>
              <p className="text-gray-400 mb-4">
                Démarrez sans effort
              </p>
              <p className="text-4xl font-extrabold text-green-400 mb-2">
                €29<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Essai gratuit 7 jours — sans engagement
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>💬 Chat IA intégré sur le site web</li>
                <li>🤖 Réponses automatiques aux questions fréquentes</li>
                <li>📅 Prise de réservation instantanée</li>
                <li>📧 Confirmation automatique par e-mail</li>
                <li>📆 Intégration Google Calendar</li>
                <li>📊 Enregistrement automatique dans Google Sheets</li>
                <li>✨ Personnalisation basique du message d'accueil</li>
                <li>📧 Support par e-mail</li>
              </ul>
              <Link
                href="/formulaire?pack=Essentielle"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Essayer CallToChef gratuitement
              </Link>
            </div>

            {/* Offre Confort */}
            <div className="bg-zinc-900/70 border-2 border-cyan-400 rounded-2xl p-8 shadow-2xl hover:scale-105 transition duration-300 relative">
              <span className="absolute -top-4 right-6 bg-cyan-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                Populaire
              </span>
              <h3 className="text-2xl font-bold mb-3">🥇 Offre Confort</h3>
              <p className="text-gray-400 mb-4">
                L'assistant IA complet pour votre restaurant
              </p>
              <p className="text-4xl font-extrabold text-green-400 mb-2">
                €69<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Sans frais d'installation — résiliable à tout moment
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>✅ Tout le pack Essentiel</li>
                <li>📱 Messages automatiques de rappel (e-mail ou SMS)</li>
                <li>📋 Tableau de bord Notion ou Google Sheets</li>
                <li>🎨 Personnalisation avancée du ton et des scénarios</li>
                <li>⚡ Support prioritaire (WhatsApp / chat direct)</li>
                <li>🔄 Mise à jour mensuelle gratuite du chat IA</li>
              </ul>
              <Link
                href="/formulaire?pack=Confort"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Passer à l'offre Confort
              </Link>
            </div>

            {/* Offre Sur-Mesure */}
            <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">💼 Offre Sur-Mesure</h3>
              <p className="text-gray-400 mb-4">
                L'IA à votre image
              </p>
              <p className="text-4xl font-extrabold text-green-400 mb-2">
                Sur devis
              </p>
              <p className="text-sm text-gray-400 mb-6">
                À partir de 129 € / mois
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>✅ Tout le pack Confort</li>
                <li>🎨 Personnalisation complète du chat IA</li>
                <li>🔗 Intégration sur mesure avec vos outils (CRM, site web)</li>
                <li>🎓 Formation express (30 min) au tableau de bord</li>
                <li>🤝 Accompagnement individuel jusqu'à la mise en ligne</li>
                <li>🆘 Assistance technique illimitée</li>
                <li>🌍 Option multilingue (français, anglais, espagnol)</li>
              </ul>
              <Link
                href="/formulaire?pack=Sur-Mesure"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Demander un devis personnalisé
              </Link>
            </div>
          </div>

          {/* Texte de conclusion */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-200 mb-4">
              CallToChef automatise vos réservations et vos échanges clients pour que vous puissiez vous concentrer sur votre cuisine.
            </p>
            <p className="text-base text-gray-300 mb-4">
              Aucun logiciel complexe, aucune configuration technique : tout est prêt en moins de 24 heures.
            </p>
            <p className="text-xl font-semibold text-cyan-400">
              Essayez gratuitement dès aujourd'hui.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
