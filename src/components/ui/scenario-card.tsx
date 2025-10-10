"use client"

interface ScenarioCardProps {
  title: string
  scenario: string
  result: string
  icon: string
  className?: string
}

export function ScenarioCard({ title, scenario, result, icon, className = "" }: ScenarioCardProps) {
  return (
    <div className={`bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-emerald-300 font-semibold mb-2">📞 Scénario :</h4>
          <p className="text-gray-300 text-sm italic">"{scenario}"</p>
        </div>
        
        <div>
          <h4 className="text-emerald-300 font-semibold mb-2">✅ Résultat :</h4>
          <p className="text-gray-200 text-sm">{result}</p>
        </div>
      </div>
    </div>
  )
}
