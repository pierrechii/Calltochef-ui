"use client"

import { useState } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Gérante",
      company: "Le Bistrot Parisien",
      avatar: "👩‍💼",
      content: "CallToChef a révolutionné notre gestion client ! L'IA répond instantanément aux questions, gère les réservations automatiquement. Nos clients sont ravis et notre équipe peut se concentrer sur le service.",
      rating: 5,
      image: "/testimonial-1.jpg"
    },
    {
      name: "Antoine Martin",
      role: "Propriétaire",
      company: "Restaurant La Terrasse",
      avatar: "👨‍💼",
      content: "Service impeccable ! L'installation s'est faite en 5 minutes, l'IA connaît parfaitement notre menu et nos horaires. Plus jamais de clients perdus à cause d'un téléphone occupé.",
      rating: 5,
      image: "/testimonial-2.jpg"
    },
    {
      name: "Sophie Chen",
      role: "Directrice",
      company: "Café Moderne",
      avatar: "👩‍🔬",
      content: "L'assistant IA gère nos réservations même quand nous sommes fermés. Les clients peuvent réserver 24h/24 et reçoivent une confirmation immédiate. Un gain de temps énorme !",
      rating: 5,
      image: "/testimonial-3.jpg"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des milliers de clients nous font confiance pour leurs expériences culinaires exceptionnelles
          </p>
        </div>

        <div className="relative">
          {/* Témoignage principal */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Contenu */}
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">{testimonials[currentIndex].avatar}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Ils nous font confiance</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechStart</div>
            <div className="text-2xl font-bold text-gray-400">InnovateLab</div>
            <div className="text-2xl font-bold text-gray-400">GreenTech</div>
            <div className="text-2xl font-bold text-gray-400">StartupX</div>
          </div>
        </div>
      </div>
    </section>
  )
}
