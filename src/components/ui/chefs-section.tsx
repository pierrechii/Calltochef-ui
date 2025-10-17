"use client"

import Link from "next/link"

export function ChefsSection() {
  const chefs = [
    {
      name: "Chef Antoine",
      specialty: "Cuisine française moderne",
      experience: "15 ans d'expérience",
      avatar: "👨‍🍳",
      description: "Spécialiste de la cuisine française réinventée, Antoine allie tradition et innovation pour créer des expériences gastronomiques uniques.",
      rating: 4.9,
      reviews: 127
    },
    {
      name: "Chef Marie",
      specialty: "Cuisine fusion internationale",
      experience: "12 ans d'expérience", 
      avatar: "👩‍🍳",
      description: "Marie excelle dans l'art de fusionner les saveurs du monde entier. Ses créations surprennent et enchantent à chaque bouchée.",
      rating: 4.8,
      reviews: 98
    },
    {
      name: "Chef Pierre",
      specialty: "Cuisine végétarienne créative",
      experience: "10 ans d'expérience",
      avatar: "👨‍🍳", 
      description: "Pierre révolutionne la cuisine végétarienne avec des techniques innovantes et des associations de saveurs exceptionnelles.",
      rating: 4.9,
      reviews: 156
    }
  ]

  return (
    <section id="chefs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos chefs d'exception
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels passionnés, sélectionnés pour leur expertise et leur créativité culinaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {chef.avatar}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{chef.name}</h3>
                <p className="text-emerald-600 font-medium mb-1">{chef.specialty}</p>
                <p className="text-gray-500 text-sm">{chef.experience}</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{chef.description}</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(chef.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>⭐</span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{chef.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{chef.reviews} avis</span>
              </div>

              <Link 
                href="/formulaire?pack=Essentielle"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 text-center block"
              >
                Réserver ce chef
              </Link>
            </div>
          ))}
        </div>

        {/* CTA après chefs */}
        <div className="text-center mt-16">
          <Link 
            href="/formulaire?pack=Essentielle"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-block"
          >
            Découvrir tous nos chefs
          </Link>
        </div>
      </div>
    </section>
  )
}
