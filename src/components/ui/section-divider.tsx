"use client"

interface SectionDividerProps {
  title: string
  subtitle?: string
  icon?: string
  className?: string
}

export function SectionDivider({ title, subtitle, icon, className = "" }: SectionDividerProps) {
  return (
    <div className={`text-center py-16 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-black px-8 py-4">
            {icon && <div className="text-4xl mb-3">{icon}</div>}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400 mt-2 text-sm">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
