"use client"

export function TrustBadges() {
  const badges = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Les Échos", logo: "LE" },
    { name: "Forbes", logo: "F" },
    { name: "Startup.fr", logo: "S" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm font-medium">Ils parlent de nous</p>
        </div>
        
        <div className="flex justify-center items-center space-x-12 opacity-60">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">{badge.logo}</span>
              </div>
              <span className="text-lg font-semibold text-gray-400">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
