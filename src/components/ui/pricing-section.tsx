"use client"

import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "Agent Rézo",
      subtitle: "Spécialiste Réservations",
      price: "29€",
      period: "/mois",
      trial: "Essai gratuit 7 jours — sans engagement",
      icon: "📅",
      color: "emerald",
      features: [
        "Gestion complète des réservations",
        "Synchronisation Google Calendar",
        "Confirmations automatiques par email",
        "Notifications SMS de rappel",
        "Export des données dans Google Sheets",
        "Gestion des annulations et reports",
        "Disponible 24h/24",
        "Support par email"
      ],
      cta: "Essayer Rézo gratuitement",
      ctaLink: "/formulaire?pack=Essentielle"
    },
    {
      name: "Rézo + Charly",
      subtitle: "Duo Réservations & Support",
      price: "69€",
      period: "/mois",
      trial: "Essai gratuit 7 jours — sans engagement",
      icon: "🤝",
      color: "blue",
      features: [
        "Tout l'Agent Rézo",
        "Support client intelligent 24h/24",
        "Réponses sur menu et allergènes",
        "Tableau de bord Notion intégré",
        "Personnalisation avancée du ton",
        "Support prioritaire WhatsApp",
        "Mises à jour mensuelles IA",
        "Analytics détaillées"
      ],
      cta: "Activer le duo IA",
      ctaLink: "/formulaire?pack=Confort"
    },
    {
      name: "Équipe complète",
      subtitle: "Rézo + Charly + Personnalisation",
      price: "129€",
      period: "/mois",
      trial: "Essai gratuit 7 jours — sans engagement",
      icon: "🚀",
      color: "purple",
      features: [
        "Toute l'équipe IA",
        "Personnalisation complète des agents",
        "Intégrations CRM sur mesure",
        "Formation complète (1h)",
        "Accompagnement dédié",
        "Support technique illimité",
        "Multilingue (FR/EN/ES)",
        "Analytics avancées"
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
          border: "border-emerald-200"
        }
      case "blue":
        return {
          gradient: "from-blue-500 to-cyan-500",
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200"
        }
      case "purple":
        return {
          gradient: "from-purple-500 to-indigo-500",
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200"
        }
      default:
        return {
          gradient: "from-gray-500 to-gray-600",
          bg: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-200"
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
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${colors.border} border-2`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className={`${colors.text} font-medium mb-4`}>{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-6">{plan.trial}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
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
                  className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 text-center block shadow-lg`}
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
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-block"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  )
}
