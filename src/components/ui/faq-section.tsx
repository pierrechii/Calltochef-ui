"use client"

import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Comment fonctionne l'assistant IA ?",
      answer: "Notre assistant IA répond automatiquement aux questions de vos clients via WhatsApp, SMS ou chat web. Il connaît votre menu, vos horaires et peut gérer les réservations en temps réel."
    },
    {
      question: "L'installation est-elle compliquée ?",
      answer: "Pas du tout ! L'installation se fait en 5 minutes. Vous connectez simplement CallToChef à vos outils existants (Google Agenda, WhatsApp, système de réservation) et l'IA est immédiatement opérationnelle."
    },
    {
      question: "Puis-je personnaliser les réponses ?",
      answer: "Absolument ! Vous pouvez adapter toutes les réponses de l'IA à votre restaurant : ton de communication, informations sur votre établissement, politique d'annulation, etc."
    },
    {
      question: "Que se passe-t-il si l'IA ne sait pas répondre ?",
      answer: "Dans ce cas, l'IA transfère automatiquement la conversation à votre équipe ou propose au client de vous rappeler. Vous ne perdez jamais un client."
    },
    {
      question: "Les réservations sont-elles synchronisées ?",
      answer: "Oui, toutes les réservations sont automatiquement synchronisées avec votre système existant (Google Agenda, système de réservation, etc.) en temps réel."
    },
    {
      question: "Puis-je suivre les performances ?",
      answer: "Oui, votre tableau de bord vous donne accès à toutes les métriques : nombre de conversations, réservations générées, taux de satisfaction, etc."
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
                href="mailto:calltochefia@gmail.com"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              >
                Contacter le support
              </a>
              <a 
                href="tel:+33769479176"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-200"
              >
                07 69 47 91 76
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
