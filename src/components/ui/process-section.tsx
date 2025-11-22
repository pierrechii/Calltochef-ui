"use client"

import Link from "next/link"
import { createCtcRipple } from "./ButtonLiquid"

export function ProcessSection() {
  const steps = [
        {
          step: "01",
          title: "Configuration rapide",
          description: "Connectez CallToChef à vos outils existants (Google Agenda, WhatsApp, système de réservation) en quelques clics. Configuration guidée et simple.",
          icon: "⚙️"
        },
    {
      step: "02", 
      title: "Personnalisation",
      description: "Adaptez les réponses de l'IA à votre restaurant : horaires, spécialités, politique d'annulation. L'assistant apprend votre identité.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Activation automatique",
      description: "Votre assistant IA est immédiatement opérationnel. Il répond aux clients, gère les réservations et synchronise tout automatiquement.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Suivi et optimisation",
      description: "Consultez votre tableau de bord pour suivre les performances et optimiser votre service client. Données en temps réel.",
      icon: "📊"
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
            Une mise en place simple et rapide pour une efficacité immédiate
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
            className="ctc-btn ctc-btn--primary ctc-btn--lg inline-flex"
            onPointerDown={createCtcRipple}
          >
            Commencer la configuration
          </Link>
        </div>
      </div>
    </section>
  )
}
