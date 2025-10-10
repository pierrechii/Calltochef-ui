"use client"

interface OnboardingStepProps {
  step: number
  title: string
  description: string
  icon: string
  duration: string
  isCompleted?: boolean
  className?: string
}

export function OnboardingStep({ step, title, description, icon, duration, isCompleted = false, className = "" }: OnboardingStepProps) {
  return (
    <div className={`flex items-start space-x-4 p-6 rounded-2xl transition-all duration-300 ${
      isCompleted 
        ? 'bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30' 
        : 'bg-gradient-to-r from-gray-900/40 to-zinc-900/40 border border-gray-600/30'
    } ${className}`}>
      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
        isCompleted ? 'bg-green-500' : 'bg-purple-500'
      }`}>
        {isCompleted ? '✓' : step}
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

export function OnboardingSection() {
  const steps = [
    {
      step: 1,
      title: "Configuration initiale",
      description: "Nous configurons votre chat IA avec les informations de votre restaurant (menu, horaires, capacité, etc.)",
      icon: "⚙️",
      duration: "5 min",
      isCompleted: true
    },
    {
      step: 2,
      title: "Intégration des outils",
      description: "Connexion automatique avec Google Calendar, WhatsApp et vos outils existants",
      icon: "🔗",
      duration: "2 min",
      isCompleted: true
    },
    {
      step: 3,
      title: "Test et validation",
      description: "Test complet du système avec des scénarios réels et ajustements personnalisés",
      icon: "🧪",
      duration: "10 min",
      isCompleted: false
    },
    {
      step: 4,
      title: "Mise en ligne",
      description: "Activation du chat sur votre site web et formation de votre équipe",
      icon: "🚀",
      duration: "5 min",
      isCompleted: false
    }
  ]

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">🎯 Installation en 4 étapes</h2>
        <p className="text-gray-300">De la configuration à la mise en ligne en moins de 30 minutes</p>
      </div>
      
      {steps.map((step, index) => (
        <OnboardingStep
          key={index}
          step={step.step}
          title={step.title}
          description={step.description}
          icon={step.icon}
          duration={step.duration}
          isCompleted={step.isCompleted}
        />
      ))}
    </div>
  )
}
