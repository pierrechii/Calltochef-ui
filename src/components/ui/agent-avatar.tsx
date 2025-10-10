"use client"

interface AgentAvatarProps {
  name: string
  role: string
  emoji: string
  description: string
  className?: string
}

export function AgentAvatar({ name, role, emoji, description, className = "" }: AgentAvatarProps) {
  return (
    <div className={`bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="text-center">
        <div className="text-6xl mb-4 animate-pulse">{emoji}</div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-purple-300 font-medium mb-3">{role}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}
