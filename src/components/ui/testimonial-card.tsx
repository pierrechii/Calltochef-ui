"use client"

interface TestimonialCardProps {
  name: string
  restaurant: string
  avatar: string
  testimonial: string
  rating: number
  className?: string
}

export function TestimonialCard({ name, restaurant, avatar, testimonial, rating, className = "" }: TestimonialCardProps) {
  return (
    <div className={`bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{avatar}</div>
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-amber-300 text-sm">{restaurant}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>⭐</span>
        ))}
      </div>
      
      <p className="text-gray-200 text-sm italic">"{testimonial}"</p>
    </div>
  )
}
