"use client"

import Link from "next/link"
import Image from "next/image"
import { createCtcRipple } from "./ButtonLiquid"

export function PricingSection() {
  const plans = [
    {
      name: "Rézo",
      subtitle: "Spécialiste Réservations",
      price: "29",
      period: "/mois",
      trial: "Essai gratuit 7 jours — sans engagement",
      icon: "R",
      iconImage: "/logo-rezo.png",
      color: "emerald",
      features: [
        "Prise de réservations via chat IA intégré au site",
        "Vérification automatique des disponibilités (Google Calendar)",
        "Création et mise à jour des réservations dans Google Calendar",
        "Envoi d'emails de confirmation automatiques",
        "Sauvegarde des réservations dans Google Sheets",
        "Gestion des annulations et reports par chat",
        "Disponible 24h/24",
        "Support par email"
      ],
      cta: "Essayer Rézo gratuitement",
      ctaLink: "/formulaire?pack=Essentielle"
    },
    {
      name: "Rézo + Charly",
      subtitle: "Duo Réservations & Intelligence",
      price: "59",
      period: "/mois",
      trial: "Essai gratuit 7 jours — sans engagement",
      icon: "RC",
      iconImage: "/logo-rezo-charly.png",
      color: "blue",
      features: [
        "Tout l'agent Rézo",
        "Chat IA multilingue (FR / EN / ES)",
        "Réponses automatiques aux questions clients (horaires, menu, allergènes…)",
        "Personnalisation du ton et du style de réponse",
        "Mises à jour IA mensuelles",
        "Tableau de bord Notion / Google Sheets intégré",
        "Analytics simplifiés (volume de réservations, heures de pointe, confirmations)"
      ],
      cta: "Activer le duo IA",
      ctaLink: "/formulaire?pack=Confort"
    },
    {
      name: "Équipe complète",
      subtitle: "Rézo + Charly + Personnalisation",
      price: "99",
      period: "/mois",
      trial: "Essai gratuit 7 jours — sans engagement",
      icon: "EC",
      iconImage: "/logo-personnalisation.png",
      color: "purple",
      features: [
        "Toute l'équipe IA",
        "Personnalisation complète de l'agent IA (nom, messages, ton, visuel)",
        "Adaptation à l'organisation interne du restaurant",
        "Formation à la prise en main (1h incluse)",
        "Accompagnement dédié à l'installation",
        "Support technique illimité",
        "Rapports mensuels détaillés (Google Sheets / PDF)"
      ],
      cta: "Demander un devis",
      ctaLink: "/formulaire?pack=Premium"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          gradient: "from-emerald-500 to-green-500",
          bg: "bg-emerald-50",
          text: "text-emerald-600",
          border: "border-emerald-200",
          button: {
            background: "linear-gradient(120deg, rgba(16, 185, 129, 0.35), rgba(110, 231, 183, 0.25))",
            text: "rgba(4, 47, 46, 0.85)"
          }
        }
      case "blue":
        return {
          gradient: "from-blue-500 to-cyan-500",
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200",
          button: {
            background: "linear-gradient(120deg, rgba(59, 130, 246, 0.32), rgba(14, 165, 233, 0.22))",
            text: "rgba(15, 23, 42, 0.88)"
          }
        }
      case "purple":
        return {
          gradient: "from-purple-500 to-indigo-500",
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200",
          button: {
            background: "linear-gradient(120deg, rgba(168, 85, 247, 0.32), rgba(59, 130, 246, 0.22))",
            text: "rgba(24, 24, 38, 0.88)"
          }
        }
      default:
        return {
          gradient: "from-gray-500 to-gray-600",
          bg: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-200",
          button: {
            background: "linear-gradient(120deg, rgba(156, 163, 175, 0.3), rgba(209, 213, 219, 0.2))",
            text: "rgba(17, 24, 39, 0.85)"
          }
        }
    }
  }

  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tarifs & Offres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez votre équipe IA selon vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color)
            return (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${colors.border} border-2 flex flex-col`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`flex items-center justify-center mx-auto mb-4 ${plan.iconImage ? 'w-28 h-28' : `w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-full`}`}>
                    {plan.iconImage ? (
                      <Image
                        src={plan.iconImage}
                        alt={plan.name}
                        width={112}
                        height={112}
                        className="object-contain"
                        priority
                        unoptimized
                      />
                    ) : (
                      <span className="text-xl font-bold text-white">{plan.icon}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className={`${colors.text} font-medium mb-4`}>{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-6">{plan.trial}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaLink}
                  className={`ctc-btn ctc-btn--md w-full justify-center mt-auto`}
                  style={{
                    backgroundImage: colors.button.background,
                    color: colors.button.text
                  }}
                  onPointerDown={createCtcRipple}
                >
                  {plan.cta}
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA après tarifs */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Besoin d'une solution personnalisée ? Contactez-nous pour un devis sur mesure.
          </p>
          <Link
            href="mailto:calltochefia@gmail.com"
            className="ctc-btn ctc-btn--primary ctc-btn--lg inline-flex"
            onPointerDown={createCtcRipple}
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  )
}
