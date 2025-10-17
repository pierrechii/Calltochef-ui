"use client"

import Link from "next/link"

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Réservez en ligne",
      description: "Choisissez votre chef, date et heure en quelques clics. Notre IA vous propose les meilleures options selon vos préférences.",
      icon: "📱"
    },
    {
      step: "02", 
      title: "Personnalisation",
      description: "Définissez vos goûts, allergies et envies. Notre IA crée un menu personnalisé que votre chef valide et adapte.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Confirmation",
      description: "Recevez la confirmation avec tous les détails : menu, ingrédients, timing. Votre chef vous contacte pour finaliser les détails.",
      icon: "✅"
    },
    {
      step: "04",
      title: "Expérience culinaire",
      description: "Votre chef arrive à l'heure convenue et vous offre une expérience gastronomique exceptionnelle, adaptée à vos goûts.",
      icon: "🍽️"
    }
  ]

  return (
    <section id="processus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et fluide pour une expérience culinaire exceptionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Ligne de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300 transform translate-x-4"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA après processus */}
        <div className="text-center mt-16">
          <Link 
            href="/formulaire?pack=Essentielle"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-block"
          >
            Réserver mon chef
          </Link>
        </div>
      </div>
    </section>
  )
}
