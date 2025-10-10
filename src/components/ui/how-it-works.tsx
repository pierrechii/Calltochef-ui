"use client"

interface HowItWorksStepProps {
  step: number
  title: string
  description: string
  icon: string
  time: string
  className?: string
}

export function HowItWorksStep({ step, title, description, icon, time, className = "" }: HowItWorksStepProps) {
  return (
    <div className={`flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-900/40 to-zinc-900/40 border border-gray-600/30 rounded-2xl hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {step}
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <div className="text-4xl">{icon}</div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
            {time}
          </span>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      
      {step < 4 && (
        <div className="hidden md:block">
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
        </div>
      )}
    </div>
  )
}

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Configuration en 5 minutes",
      description: "Nous configurons vos agents IA avec les informations de votre restaurant (menu, horaires, capacité, etc.)",
      icon: "⚙️",
      time: "5 min"
    },
    {
      step: 2,
      title: "Intégration automatique",
      description: "Connexion instantanée avec Google Calendar, WhatsApp et vos outils existants",
      icon: "🔗",
      time: "2 min"
    },
    {
      step: 3,
      title: "Test et validation",
      description: "Test complet du système avec des scénarios réels et ajustements personnalisés",
      icon: "🧪",
      time: "10 min"
    },
    {
      step: 4,
      title: "Mise en ligne",
      description: "Activation du chat sur votre site web et formation de votre équipe",
      icon: "🚀",
      time: "5 min"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          🔧 Comment ça marche ?
        </h2>
        <p className="text-gray-300">De la configuration à la mise en ligne en moins de 30 minutes</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <HowItWorksStep
            key={index}
            step={step.step}
            title={step.title}
            description={step.description}
            icon={step.icon}
            time={step.time}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3">
          <span className="text-green-300 text-sm font-medium">⚡ Installation totale : 22 minutes en moyenne</span>
        </div>
      </div>
    </div>
  )
}
