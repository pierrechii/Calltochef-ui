"use client"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: string
  className?: string
}

export function StatCard({ title, value, change, icon, className = "" }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-green-400 text-sm font-medium">{change}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{title}</p>
    </div>
  )
}

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Réservations traitées" 
        value="2,847" 
        change="+34%" 
        icon="📅"
      />
      <StatCard 
        title="Temps économisé" 
        value="156h" 
        change="+28%" 
        icon="⏰"
      />
      <StatCard 
        title="Taux de satisfaction" 
        value="98%" 
        change="+5%" 
        icon="⭐"
      />
      <StatCard 
        title="Clients autonomes" 
        value="89%" 
        change="+12%" 
        icon="🤖"
      />
    </div>
  )
}
