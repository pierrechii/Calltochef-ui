"use client"

interface FeatureStoryProps {
  title: string
  scenario: string
  result: string
  icon: string
  time: string
  className?: string
}

export function FeatureStory({ title, scenario, result, icon, time, className = "" }: FeatureStoryProps) {
  return (
    <div className={`bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
              {time}
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="bg-black/20 rounded-lg p-3">
              <p className="text-gray-300 text-sm italic">"{scenario}"</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-lg">✓</span>
              <p className="text-gray-200 text-sm font-medium">{result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureStoriesSection() {
  const stories = [
    {
      title: "Réservation nocturne",
      scenario: "Un client réserve à minuit pour le lendemain soir",
      result: "Le chat IA confirme instantanément, envoie un SMS et synchronise avec Google Calendar",
      icon: "🌙",
      time: "24h/24"
    },
    {
      title: "Question menu urgente",
      scenario: "Un client allergique aux fruits de mer appelle pendant le rush",
      result: "Charly consulte la base de données, propose 3 alternatives sécurisées en 30 secondes",
      icon: "🚨",
      time: "30 sec"
    },
    {
      title: "Gestion annulation",
      scenario: "Un client annule 30 minutes avant son repas",
      result: "Rézo libère la table, propose un report et envoie un email de suivi personnalisé",
      icon: "📞",
      time: "2 min"
    },
    {
      title: "Réservation pour événement spécial",
      scenario: "Un client appelle pour réserver une table pour son anniversaire de mariage",
      result: "Rézo identifie l'occasion spéciale, propose la meilleure table disponible et prépare une attention spéciale",
      icon: "💕",
      time: "3 min"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stories.map((story, index) => (
        <FeatureStory
          key={index}
          title={story.title}
          scenario={story.scenario}
          result={story.result}
          icon={story.icon}
          time={story.time}
        />
      ))}
    </div>
  )
}
