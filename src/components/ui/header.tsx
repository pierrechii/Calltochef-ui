"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="CallToChef" 
              width={32} 
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">CallToChef</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#avantages" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Avantages
            </Link>
            <Link href="#processus" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Comment ça marche
            </Link>
            <Link href="#agents" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Agents IA
            </Link>
            <Link href="#tarifs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Tarifs
            </Link>
          </nav>

          {/* CTA Principal */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/formulaire?pack=Essentielle"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Essayer CallToChef
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="#avantages" className="text-gray-600 hover:text-gray-900 font-medium">
                Avantages
              </Link>
              <Link href="#processus" className="text-gray-600 hover:text-gray-900 font-medium">
                Comment ça marche
              </Link>
              <Link href="#agents" className="text-gray-600 hover:text-gray-900 font-medium">
                Agents IA
              </Link>
              <Link href="#tarifs" className="text-gray-600 hover:text-gray-900 font-medium">
                Tarifs
              </Link>
              <Link 
                href="/formulaire?pack=Essentielle"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold text-center transition-all duration-200"
              >
                Essayer CallToChef
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
