"use client"

import Image from "next/image"
import { useState } from "react"

interface AgentAvatarProps {
  name: string
  role: string
  emoji?: string
  logoImage?: string
  description: string
  className?: string
}

export function AgentAvatar({ name, role, emoji, logoImage, description, className = "" }: AgentAvatarProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          {logoImage && !imageError ? (
            <Image
              src={logoImage}
              alt={name}
              width={120}
              height={120}
              className="object-contain"
              priority
              unoptimized
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-6xl animate-pulse">{emoji || "🤖"}</div>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-purple-300 font-medium mb-3">{role}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}
