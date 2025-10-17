"use client"

import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Comment fonctionne la réservation ?",
      answer: "C'est très simple ! Vous choisissez votre chef, votre date et heure, puis vous décrivez vos préférences alimentaires. Notre IA propose un menu personnalisé que votre chef adapte et valide. Vous recevez une confirmation avec tous les détails."
    },
    {
      question: "Les chefs sont-ils certifiés ?",
      answer: "Absolument ! Tous nos chefs sont des professionnels certifiés avec plusieurs années d'expérience. Ils sont sélectionnés pour leur expertise culinaire et leur capacité à s'adapter aux préférences de chaque client."
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: "Oui, vous pouvez annuler votre réservation jusqu'à 24h avant le service. Au-delà de ce délai, des frais d'annulation peuvent s'appliquer selon nos conditions générales."
    },
    {
      question: "Que se passe-t-il si je suis allergique ?",
      answer: "Notre IA prend en compte toutes vos allergies et restrictions alimentaires lors de la création du menu. Vos informations sont transmises au chef qui adapte ses recettes en conséquence. La sécurité alimentaire est notre priorité."
    },
    {
      question: "Les ingrédients sont-ils inclus ?",
      answer: "Oui, le prix inclut les ingrédients de qualité sélectionnés par votre chef. Vous n'avez rien à préparer, votre chef arrive avec tout le nécessaire pour créer votre repas."
    },
    {
      question: "Puis-je choisir un chef spécifique ?",
      answer: "Bien sûr ! Vous pouvez choisir votre chef préféré selon ses spécialités et disponibilités. Notre système vous propose les meilleures options selon vos critères."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur CallToChef
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <div className={`transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Micro-contenu de réassurance */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'aide ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe support est disponible 7j/7 pour vous accompagner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@calltochef.fr"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              >
                Contacter le support
              </a>
              <a 
                href="tel:+33123456789"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-200"
              >
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
