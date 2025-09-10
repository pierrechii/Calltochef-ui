"use client"
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen px-6 py-12">
      <div className="relative border border-[#27272a] p-6 w-full mx-auto max-w-4xl bg-transparent rounded-lg shadow-lg">
        <main className="relative">

          {/* Titre principal */}
          <h1 className="mb-6 text-white text-center text-4xl md:text-6xl font-extrabold tracking-tighter">
            Découvrez CallToChef
          </h1>

          {/* Introduction */}
          <p className="text-white/70 text-center mb-8 text-lg">
            L’assistant vocal intelligent qui répond à vos appels clients, prend les réservations et booste vos ventes — 24h/24.
          </p>

          {/* Section Problèmes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">🎯 Le problème</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Appels clients en heure de rush</li>
              <li>Commandes mal notées</li>
              <li>Personnel débordé</li>
              <li>Clients frustrés ou perdus</li>
            </ul>
          </section>

          {/* Section Solution */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">✅ La solution</h2>
            <p className="text-white/70">
              Un agent vocal IA qui répond automatiquement aux appels, lit le menu à vos clients,
              prend les commandes et les envoie directement à la cuisine.
            </p>
          </section>

          {/* Section Bénéfices */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">💡 Les bénéfices pour vous</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Zéro appel manqué</li>
              <li>Moins d’erreurs de commande</li>
              <li>Gain de temps pour votre équipe</li>
              <li>Image moderne et professionnelle</li>
              <li>Disponible 24h/24</li>
            </ul>
          </section>

          {/* Tarifs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">💰 Nos offres</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Essentiel */}
              <div className="border border-[#27272a] rounded-lg p-6 bg-black/40">
                <h3 className="text-xl font-bold text-white mb-2">🥗 Pack Essentiel</h3>
                <p className="text-green-400 font-semibold mb-2">39 €/mois</p>
                <p className="text-sm text-white/70 mb-4">Frais d’installation : 29 €</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>📞 Réception d’appels 24/7</li>
                  <li>📩 Confirmation SMS</li>
                  <li>📊 Suivi via Google Sheets</li>
                  <li>📧 Support par email</li>
                </ul>
              </div>

              {/* Confort */}
              <div className="border border-[#27272a] rounded-lg p-6 bg-black/40">
                <h3 className="text-xl font-bold text-white mb-2">🍝 Pack Confort</h3>
                <p className="text-green-400 font-semibold mb-2">69 €/mois</p>
                <p className="text-sm text-white/70 mb-4">Frais d’installation : 49 €</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>📞 Réservations + commandes</li>
                  <li>📩 SMS & email</li>
                  <li>📅 Google Calendar</li>
                  <li>📊 Dashboard Notion/Sheets</li>
                  <li>⚡ Support prioritaire</li>
                </ul>
              </div>

              {/* Premium */}
              <div className="border border-[#27272a] rounded-lg p-6 bg-black/40">
                <h3 className="text-xl font-bold text-white mb-2">🍷 Pack Premium</h3>
                <p className="text-green-400 font-semibold mb-2">119 €/mois</p>
                <p className="text-sm text-white/70 mb-4">Frais d’installation : 79 €</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>📞 Réservations + commandes + FAQ</li>
                  <li>🎤 Voix personnalisée</li>
                  <li>📈 Suivi des performances</li>
                  <li>⚡ Support prioritaire</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">
              Retour à l’accueil
            </Link>
            <Link href="https://calendly.com/calltochefia/30min" target="_blank" className="px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition">
              Réserver une démo gratuite
            </Link>
          </div>

        </main>
      </div>
    </div>
  )
}
