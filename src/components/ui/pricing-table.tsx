"use client"

interface PricingPlanProps {
  name: string
  price: string
  period: string
  description: string
  icon: string
  color: string
  features: string[]
  buttonText: string
  buttonLink: string
  isPopular?: boolean
  className?: string
}

export function PricingPlan({ 
  name, price, period, description, icon, color, features, buttonText, buttonLink, isPopular = false, className = "" 
}: PricingPlanProps) {
  return (
    <div className={`relative bg-gradient-to-br from-${color}-900/40 to-${color}-800/40 border border-${color}-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-300 ${className}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-6 py-2 rounded-full text-sm font-bold">
            🔥 Populaire
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <div className={`w-20 h-20 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-5xl font-extrabold text-white">{price}</span>
          <span className="text-gray-400 text-lg ml-2">{period}</span>
        </div>
        
        <div className="text-xs text-gray-500 mb-6">
          {period === "/mois" ? "Essai gratuit 7 jours — sans engagement" : "À partir de ce montant"}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className={`w-5 h-5 bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href={buttonLink}
        className={`block w-full py-4 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-xl font-bold text-white text-center hover:scale-105 transition-all duration-300 shadow-lg`}
      >
        {buttonText}
      </a>
    </div>
  )
}

export function PricingTable() {
  const plans = [
    {
      name: "Agent Rézo",
      price: "€29",
      period: "/mois",
      description: "Spécialiste Réservations",
      icon: "📅",
      color: "green",
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
      buttonText: "🎯 Essayer Rézo gratuitement",
      buttonLink: "/formulaire?pack=Essentielle"
    },
    {
      name: "Rézo + Charly",
      price: "€69",
      period: "/mois",
      description: "Duo Réservations & Support",
      icon: "🤝",
      color: "cyan",
      features: [
        "✅ Tout l'Agent Rézo",
        "💬 Support client intelligent 24h/24",
        "🍽️ Réponses sur menu et allergènes",
        "📋 Tableau de bord Notion intégré",
        "🎨 Personnalisation avancée du ton",
        "⚡ Support prioritaire WhatsApp",
        "🔄 Mises à jour mensuelles IA",
        "📊 Analytics détaillées"
      ],
      buttonText: "💪 Activer le duo IA",
      buttonLink: "/formulaire?pack=Confort",
      isPopular: true
    },
    {
      name: "Équipe complète",
      price: "€129",
      period: "/mois",
      description: "Rézo + Charly + Luna",
      icon: "🚀",
      color: "purple",
      features: [
        "✅ Toute l'équipe IA",
        "📱 Animation réseaux sociaux automatique",
        "🎨 Personnalisation complète des agents",
        "🔗 Intégrations CRM sur mesure",
        "🎓 Formation complète (1h)",
        "🤝 Accompagnement dédié",
        "🆘 Support technique illimité",
        "🌍 Multilingue (FR/EN/ES)"
      ],
      buttonText: "⭐ Demander un devis",
      buttonLink: "/formulaire?pack=Sur-Mesure"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <PricingPlan
          key={index}
          name={plan.name}
          price={plan.price}
          period={plan.period}
          description={plan.description}
          icon={plan.icon}
          color={plan.color}
          features={plan.features}
          buttonText={plan.buttonText}
          buttonLink={plan.buttonLink}
          isPopular={plan.isPopular}
        />
      ))}
    </div>
  )
}
