"use client"

import Link from "next/link"

export function AdvantagesSection() {
  const advantages = [
    {
      icon: "🤖",
      title: "IA personnalisée",
      description: "Notre intelligence artificielle apprend vos goûts et préférences pour proposer des menus sur mesure à chaque réservation."
    },
    {
      icon: "👨‍🍳",
      title: "Chefs professionnels",
      description: "Tous nos chefs sont certifiés et expérimentés. Ils s'adaptent à vos envies et créent des expériences culinaires exceptionnelles."
    },
    {
      icon: "⚡",
      title: "Réservation instantanée",
      description: "Réservez votre chef en quelques clics. Disponible 24h/24, confirmation immédiate et gestion automatique de votre planning."
    },
    {
      icon: "🎯",
      title: "Expérience sur mesure",
      description: "Chaque repas est adapté à vos besoins : allergies, régimes spéciaux, occasions particulières. Une expérience unique à chaque fois."
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
            Une révolution dans l'art culinaire, alliant tradition et innovation technologique
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
            Commencer maintenant
          </Link>
        </div>
      </div>
    </section>
  )
}
