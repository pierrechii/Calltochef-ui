"use client"

interface IntegrationBadgeProps {
  name: string
  icon: string
  description: string
  className?: string
}

export function IntegrationBadge({ name, icon, description, className = "" }: IntegrationBadgeProps) {
  return (
    <div className={`bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-4 hover:scale-105 transition-all duration-300 text-center ${className}`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-sm font-bold text-white mb-1">{name}</h3>
      <p className="text-gray-300 text-xs">{description}</p>
    </div>
  )
}
