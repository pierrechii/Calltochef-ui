"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { createCtcRipple } from "./ButtonLiquid"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CallToChef"
              width={120}
              height={120}
              className="h-20 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#avantages"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Avantages
            </Link>
            <Link
              href="#processus"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Comment ça marche
            </Link>
            <Link
              href="#agents"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Agents IA
            </Link>
            <Link
              href="#tarifs"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Tarifs
            </Link>
          </nav>

          {/* CTA Principal */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/formulaire?pack=Essentielle"
              className="ctc-btn ctc-btn--primary ctc-btn--md ctc-btn--ripple"
              onPointerDown={createCtcRipple}
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
              <Link
                href="#avantages"
                className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                Avantages
              </Link>
              <Link
                href="#processus"
                className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                Comment ça marche
              </Link>
              <Link
                href="#agents"
                className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                Agents IA
              </Link>
              <Link
                href="#tarifs"
                className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                Tarifs
              </Link>
              <Link
                href="/formulaire?pack=Essentielle"
                className="ctc-btn ctc-btn--primary ctc-btn--md ctc-btn--ripple text-center"
                onPointerDown={createCtcRipple}
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
