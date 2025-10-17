"use client"

import Link from "next/link"
import { AgentAvatar } from "@/components/ui/agent-avatar"
import { FeatureStoriesSection } from "@/components/ui/feature-story"
import { ImprovedTestimonialsSection } from "@/components/ui/improved-testimonial"
import { IntegrationBadge } from "@/components/ui/integration-badge"
import { DashboardStats } from "@/components/ui/dashboard-stats"
import { SectionDivider } from "@/components/ui/section-divider"
import { PricingTable } from "@/components/ui/pricing-table"
import { HowItWorksSection } from "@/components/ui/how-it-works"

export default function Presentation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contenu */}
      <div className="flex flex-col items-center px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-5xl">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full px-8 py-3 mb-8">
            <span className="text-emerald-700 text-sm font-medium">🚀 Révolutionnez votre restaurant avec l'IA</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Votre équipe IA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Deux agents IA spécialisés qui travaillent 24h/24 pour automatiser vos réservations 
            et répondre à vos clients
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium">📅 Agent Rézo - Réservations</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">💬 Agent Charly - Support</span>
        </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formulaire?pack=Essentielle"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              🎯 Essayer gratuitement
            </Link>
            <Link
              href="#agents"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              💡 Voir la démo
            </Link>
          </div>
        </div>

        {/* Section Tarifs & Offres */}
        <SectionDivider title="💰 Tarifs & Offres" subtitle="Choisissez votre équipe IA selon vos besoins" />
        
        <section className="w-full max-w-6xl mb-24">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium">📅 Agent Rézo</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">💬 Agent Charly</span>
        </div>

          <PricingTable />
        </section>

        {/* Section Agents IA */}
        <SectionDivider title="👥 Vos agents IA spécialisés" subtitle="Chaque agent est expert dans son domaine pour un service optimal" />
        
        <section id="agents" className="w-full max-w-6xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AgentAvatar
              name="Rézo"
              role="Agent Réservations"
              emoji="📅"
              description="Gère toutes vos réservations, vérifie la disponibilité, confirme les créneaux et synchronise avec votre planning."
            />
            <AgentAvatar
              name="Charly"
              role="Agent Support"
              emoji="💬"
              description="Répond à toutes les questions clients sur le menu, les horaires, les allergènes et les recommandations."
            />
          </div>
        </section>

        {/* Section Récits concrets */}
        <SectionDivider title="🎬 Récits concrets" subtitle="Voyez comment vos agents IA gèrent les situations réelles en temps réel" />
        
        <section className="w-full max-w-6xl mb-24">
          <FeatureStoriesSection />
        </section>

        {/* Section Tableau de bord */}
        <SectionDivider title="📊 Votre tableau de bord" subtitle="Suivez vos performances en temps réel" />
        
        <section className="w-full max-w-6xl mb-24">
          <DashboardStats />
        </section>

        {/* Section Témoignages */}
        <SectionDivider title="💬 Ils nous font confiance" subtitle="Découvrez les retours de nos clients restaurateurs" />
        
        <section className="w-full max-w-6xl mb-24">
          <ImprovedTestimonialsSection />
        </section>

        {/* Section Comment ça marche */}
        <SectionDivider title="🔧 Comment ça marche ?" subtitle="Installation en 4 étapes simples" id="how-it-works" />
        
        <section className="w-full max-w-6xl mb-24">
          <HowItWorksSection />
        </section>

        {/* Section Intégrations */}
        <SectionDivider title="🔗 Intégrations natives" subtitle="Connectez vos outils existants en quelques clics" />
        
        <section className="w-full max-w-6xl mb-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
            <IntegrationBadge
              name="Google Calendar"
              icon="📅"
              description="Synchronisation automatique des réservations"
            />
            <IntegrationBadge
              name="WhatsApp"
              icon="📱"
              description="Messages et confirmations instantanées"
            />
            <IntegrationBadge
              name="Gmail"
              icon="📧"
              description="Notifications et rappels par email"
            />
            <IntegrationBadge
              name="Google Sheets"
              icon="📊"
              description="Export des données et statistiques"
            />
            <IntegrationBadge
              name="Notion"
              icon="📋"
              description="Tableau de bord personnalisé"
            />
          </div>
        </section>


        {/* Section Essai Gratuit */}
        <SectionDivider title="🎯 Essai Gratuit" subtitle="Commencez dès aujourd'hui sans engagement" />
        
        <section className="w-full max-w-5xl mb-24">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-3xl p-12 text-center">
            <div className="text-8xl mb-8 animate-bounce">🚀</div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Prêt à révolutionner votre restaurant ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Rejoignez plus de <strong className="text-emerald-600">500 restaurateurs</strong> qui font confiance à CallToChef 
              pour automatiser leur service client et <strong className="text-blue-600">économiser 20h par semaine</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Link
                href="/formulaire?pack=Essentielle"
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
              >
                🎯 Essayer gratuitement 7 jours
              </Link>
              <Link
                href="/formulaire?pack=Confort"
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
              >
                💪 Voir la démo en direct
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-emerald-500 text-xl">✓</span>
                <span className="text-gray-600"><strong>Installation en 24h</strong></span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-emerald-500 text-xl">✓</span>
                <span className="text-gray-600"><strong>Essai gratuit 7 jours</strong></span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-emerald-500 text-xl">✓</span>
                <span className="text-gray-600"><strong>Support inclus</strong></span>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}
