"use client"

import Link from "next/link"

export function AdvantagesSection() {
  const advantages = [
    {
      icon: "🤖",
      title: "Assistant IA 24h/24",
      description: "Votre assistant répond instantanément aux questions de vos clients, même en dehors des heures d'ouverture. Plus jamais de clients perdus !"
    },
    {
      icon: "📅",
      title: "Réservations automatiques",
      description: "Gestion complète des réservations avec synchronisation en temps réel sur votre système. Confirmation automatique par SMS et email."
    },
        {
          icon: "⚡",
          title: "Installation rapide",
          description: "Intégration simple avec vos outils existants (Google Agenda, WhatsApp, systèmes de réservation). Aucune formation nécessaire."
        },
    {
      icon: "📊",
      title: "Tableau de bord complet",
      description: "Suivez vos performances en temps réel : réservations, taux de conversion, satisfaction client. Données précieuses pour optimiser votre activité."
    }
  ]

  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir CallToChef ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La solution IA qui révolutionne la gestion client de votre restaurant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA après avantages */}
        <div className="text-center mt-16">
          <Link 
            href="/formulaire?pack=Essentielle"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-block"
          >
            Essayer gratuitement
          </Link>
        </div>
      </div>
    </section>
  )
}
