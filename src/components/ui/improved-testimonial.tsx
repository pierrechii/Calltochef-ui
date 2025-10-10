"use client"

interface ImprovedTestimonialProps {
  name: string
  restaurant: string
  role: string
  avatar: string
  testimonial: string
  highlight: string
  rating: number
  className?: string
}

export function ImprovedTestimonial({ name, restaurant, role, avatar, testimonial, highlight, rating, className = "" }: ImprovedTestimonialProps) {
  return (
    <div className={`bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
            {avatar}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
          <p className="text-amber-300 text-sm font-medium mb-1">{role}</p>
          <p className="text-gray-400 text-xs">{restaurant}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>⭐</span>
          ))}
        </div>
      </div>
      
      <blockquote className="relative">
        <div className="absolute -top-2 -left-2 text-4xl text-amber-400/30">"</div>
        <p className="text-gray-200 text-sm leading-relaxed pl-6">
          {testimonial.split(highlight)[0]}
          <strong className="text-amber-300 font-bold">{highlight}</strong>
          {testimonial.split(highlight)[1]}
        </p>
        <div className="absolute -bottom-2 -right-2 text-4xl text-amber-400/30">"</div>
      </blockquote>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-2">
          <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">+300% Instagram</span>
          <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">20h économisées</span>
        </div>
        <div className="text-xs text-gray-500">Depuis 3 mois</div>
      </div>
    </div>
  )
}

export function ImprovedTestimonialsSection() {
  const testimonials = [
    {
      name: "Marie Dubois",
      restaurant: "Le Bistrot du Coin",
      role: "Chef & Propriétaire",
      avatar: "👩‍🍳",
      testimonial: "CallToChef a révolutionné notre gestion des réservations. Plus besoin de passer du temps au téléphone, on se concentre sur la cuisine ! L'équipe est plus détendue et les clients adorent la rapidité du service.",
      highlight: "révolutionné notre gestion des réservations",
      rating: 5
    },
    {
      name: "Antoine Martin",
      restaurant: "Chez Antoine",
      role: "Directeur de salle",
      avatar: "👨‍🍳",
      testimonial: "L'agent social Luna a boosté notre présence Instagram de 300% ! Nos clients adorent les interactions personnalisées. On reçoit des messages de félicitations tous les jours.",
      highlight: "boosté notre présence Instagram de 300%",
      rating: 5
    },
    {
      name: "Sophie Chen",
      restaurant: "Noodle House",
      role: "Manager",
      avatar: "👩‍💼",
      testimonial: "En 2 mois, on a économisé 20h par semaine. L'équipe est plus détendue et les clients plus satisfaits. Le ROI est impressionnant, on a récupéré l'investissement en 3 semaines !",
      highlight: "économisé 20h par semaine",
      rating: 5
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <ImprovedTestimonial
          key={index}
          name={testimonial.name}
          restaurant={testimonial.restaurant}
          role={testimonial.role}
          avatar={testimonial.avatar}
          testimonial={testimonial.testimonial}
          highlight={testimonial.highlight}
          rating={testimonial.rating}
        />
      ))}
    </div>
  )
}
