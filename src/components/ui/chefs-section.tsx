"use client"

import Link from "next/link"

export function AgentsSection() {
  const agents = [
    {
      name: "Rézo",
      specialty: "Gestion des réservations",
      experience: "Agent IA spécialisé",
      avatar: "🤖",
      description: "Rézo gère automatiquement toutes vos réservations. Il vérifie la disponibilité, confirme les créneaux et synchronise avec votre système.",
      rating: 4.9,
      reviews: 127
    },
    {
      name: "Charly",
      specialty: "Support client intelligent",
      experience: "Agent IA conversationnel", 
      avatar: "💬",
      description: "Charly répond instantanément aux questions de vos clients 24h/24. Il connaît votre menu, vos horaires et votre politique.",
      rating: 4.8,
      reviews: 98
    },
    {
      name: "Analytics Pro",
      specialty: "Analyse des performances",
      experience: "Agent IA de données",
      avatar: "📊", 
      description: "Analytics Pro analyse vos données en temps réel et vous fournit des insights précieux pour optimiser votre activité.",
      rating: 4.9,
      reviews: 156
    }
  ]

  return (
    <section id="agents" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos agents IA spécialisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe d'intelligences artificielles dédiées à optimiser votre restaurant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {agent.avatar}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-emerald-600 font-medium mb-1">{agent.specialty}</p>
                <p className="text-gray-500 text-sm">{agent.experience}</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{agent.description}</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(agent.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>⭐</span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{agent.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{agent.reviews} restaurants</span>
              </div>

              <Link 
                href="/formulaire?pack=Essentielle"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 text-center block"
              >
                Activer cet agent
              </Link>
            </div>
          ))}
        </div>

        {/* CTA après agents */}
        <div className="text-center mt-16">
          <Link 
            href="/formulaire?pack=Essentielle"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-block"
          >
            Découvrir tous nos agents IA
          </Link>
        </div>
      </div>
    </section>
  )
}
