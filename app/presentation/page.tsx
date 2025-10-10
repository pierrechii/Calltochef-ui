"use client"

import Link from "next/link"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { AgentAvatar } from "@/components/ui/agent-avatar"
import { ScenarioCard } from "@/components/ui/scenario-card"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { IntegrationBadge } from "@/components/ui/integration-badge"
import { DashboardStats } from "@/components/ui/dashboard-stats"
import { OnboardingSection } from "@/components/ui/onboarding-step"

export default function Presentation() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">🤖 IA de nouvelle génération</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Votre équipe IA
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Trois agents IA spécialisés qui travaillent 24h/24 pour votre restaurant
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">📅 Gestion réservations</span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">💬 Support client</span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">📱 Animation sociale</span>
          </div>
        </div>

        {/* Section Agents IA */}
        <section className="w-full max-w-6xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">👥 Vos agents IA spécialisés</h2>
            <p className="text-gray-300">Chaque agent est expert dans son domaine pour un service optimal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <AgentAvatar
              name="Luna"
              role="Agent Social"
              emoji="📱"
              description="Anime vos réseaux sociaux, gère les avis, propose des promotions et fidélise vos clients."
            />
          </div>
        </section>

        {/* Section Scénarios concrets */}
        <section className="w-full max-w-6xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-emerald-400">🎬 Scénarios concrets</h2>
            <p className="text-gray-300">Voyez comment vos agents IA gèrent les situations réelles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScenarioCard
              title="Réservation urgente"
              scenario="Bonjour, j'aimerais réserver une table pour 4 personnes ce soir à 20h, c'est possible ?"
              result="Rézo vérifie la disponibilité en temps réel, propose des créneaux alternatifs si nécessaire, confirme la réservation et envoie un SMS de confirmation automatique."
              icon="📞"
            />
            <ScenarioCard
              title="Question sur le menu"
              scenario="Avez-vous des plats végétariens ? Mon mari est allergique aux noix, qu'est-ce que vous recommandez ?"
              result="Charly consulte la base de données du menu, filtre par allergènes et préférences, propose 3 options personnalisées avec descriptions détaillées."
              icon="🍽️"
            />
            <ScenarioCard
              title="Gestion d'un avis négatif"
              scenario="Client mécontent qui laisse un avis Google : 'Service lent, j'attendais depuis 30 minutes'"
              result="Luna détecte l'avis négatif, répond immédiatement avec des excuses personnalisées et propose une compensation (dessert offert) pour reconquérir le client."
              icon="⭐"
            />
            <ScenarioCard
              title="Annulation de dernière minute"
              scenario="Je dois annuler ma réservation de ce soir, c'est pour 6 personnes à 19h30"
              result="Rézo traite l'annulation, libère immédiatement la table, propose de reporter à une autre date et envoie un email de suivi pour maintenir la relation."
              icon="❌"
            />
            <ScenarioCard
              title="Promotion sur réseaux sociaux"
              scenario="Un client partage une photo de son plat sur Instagram avec le hashtag #CallToChef"
              result="Luna détecte la publication, like automatiquement, commente avec un message personnalisé et propose une réduction de 10% pour la prochaine visite."
              icon="📸"
            />
            <ScenarioCard
              title="Réservation pour événement spécial"
              scenario="Nous fêtons nos 10 ans de mariage, auriez-vous une table romantique avec vue ?"
              result="Rézo identifie l'occasion spéciale, propose la meilleure table disponible, suggère des options de menu pour couples et prépare une attention spéciale (pétales de roses, champagne)."
              icon="💕"
            />
          </div>
        </section>

        {/* Section Tableau de bord */}
        <section className="w-full max-w-6xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">📊 Votre tableau de bord</h2>
            <p className="text-gray-300">Suivez vos performances en temps réel</p>
          </div>
          <DashboardStats />
        </section>

        {/* Section Témoignages */}
        <section className="w-full max-w-6xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-400">💬 Ils nous font confiance</h2>
            <p className="text-gray-300">Découvrez les retours de nos clients restaurateurs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Marie Dubois"
              restaurant="Le Bistrot du Coin"
              avatar="👩‍🍳"
              testimonial="CallToChef a révolutionné notre gestion des réservations. Plus besoin de passer du temps au téléphone, on se concentre sur la cuisine !"
              rating={5}
            />
            <TestimonialCard
              name="Antoine Martin"
              restaurant="Chez Antoine"
              avatar="👨‍🍳"
              testimonial="L'agent social Luna a boosté notre présence Instagram de 300% ! Nos clients adorent les interactions personnalisées."
              rating={5}
            />
            <TestimonialCard
              name="Sophie Chen"
              restaurant="Noodle House"
              avatar="👩‍💼"
              testimonial="En 2 mois, on a économisé 20h par semaine. L'équipe est plus détendue et les clients plus satisfaits."
              rating={5}
            />
          </div>
        </section>

        {/* Section Intégrations */}
        <section className="w-full max-w-6xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-indigo-400">🔗 Intégrations natives</h2>
            <p className="text-gray-300">Connectez vos outils existants en quelques clics</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
              name="Instagram"
              icon="📸"
              description="Gestion automatique des commentaires"
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

        {/* Section Onboarding */}
        <section className="w-full max-w-4xl mb-24">
          <OnboardingSection />
        </section>

        {/* Section Pricing avec Agents */}
        <section className="w-full max-w-6xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">💰 Nos offres</h2>
            <p className="text-gray-300 mb-6">
              Choisissez votre équipe IA selon vos besoins
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">📅 Agent Rézo</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">💬 Agent Charly</span>
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">📱 Agent Luna</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offre Essentielle - Agent Rézo */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">📅</div>
                <h3 className="text-2xl font-bold mb-2 text-green-400">Agent Rézo</h3>
                <p className="text-gray-400 text-sm">Spécialiste Réservations</p>
              </div>
              
              <p className="text-4xl font-extrabold text-green-400 mb-2 text-center">
                €29<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6 text-center">
                Essai gratuit 7 jours — sans engagement
              </p>
              
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>📅 Gestion complète des réservations</li>
                <li>🔄 Synchronisation Google Calendar</li>
                <li>📧 Confirmations automatiques par email</li>
                <li>📱 Notifications SMS de rappel</li>
                <li>📊 Export des données dans Google Sheets</li>
                <li>🎯 Gestion des annulations et reports</li>
                <li>⚡ Disponible 24h/24</li>
                <li>📧 Support par email</li>
              </ul>
              
              <Link
                href="/formulaire?pack=Essentielle"
                className="block w-full py-3 bg-green-500 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Essayer Rézo gratuitement
              </Link>
            </div>

            {/* Offre Confort - Rézo + Charly */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-400 rounded-2xl p-8 shadow-2xl hover:scale-105 transition duration-300 relative">
              <span className="absolute -top-4 right-6 bg-cyan-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                Populaire
              </span>
              
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="text-4xl animate-pulse">📅</div>
                  <div className="text-4xl animate-pulse delay-100">💬</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Rézo + Charly</h3>
                <p className="text-gray-400 text-sm">Duo Réservations & Support</p>
              </div>
              
              <p className="text-4xl font-extrabold text-green-400 mb-2 text-center">
                €69<span className="text-base font-normal">/mois</span>
              </p>
              <p className="text-sm text-gray-400 mb-6 text-center">
                Sans frais d'installation — résiliable à tout moment
              </p>
              
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>✅ Tout l'Agent Rézo</li>
                <li>💬 Support client intelligent 24h/24</li>
                <li>🍽️ Réponses sur menu et allergènes</li>
                <li>📋 Tableau de bord Notion intégré</li>
                <li>🎨 Personnalisation avancée du ton</li>
                <li>⚡ Support prioritaire WhatsApp</li>
                <li>🔄 Mises à jour mensuelles IA</li>
                <li>📊 Analytics détaillées</li>
              </ul>
              
              <Link
                href="/formulaire?pack=Confort"
                className="block w-full py-3 bg-cyan-500 rounded-lg font-bold hover:bg-cyan-600 transition"
              >
                Activer le duo IA
              </Link>
            </div>

            {/* Offre Sur-Mesure - Équipe complète */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  <div className="text-3xl animate-bounce">📅</div>
                  <div className="text-3xl animate-bounce delay-100">💬</div>
                  <div className="text-3xl animate-bounce delay-200">📱</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-purple-400">Équipe complète</h3>
                <p className="text-gray-400 text-sm">Rézo + Charly + Luna</p>
              </div>
              
              <p className="text-4xl font-extrabold text-green-400 mb-2 text-center">
                Sur devis
              </p>
              <p className="text-sm text-gray-400 mb-6 text-center">
                À partir de 129 € / mois
              </p>
              
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                <li>✅ Toute l'équipe IA</li>
                <li>📱 Animation réseaux sociaux automatique</li>
                <li>🎨 Personnalisation complète des agents</li>
                <li>🔗 Intégrations CRM sur mesure</li>
                <li>🎓 Formation complète (1h)</li>
                <li>🤝 Accompagnement dédié</li>
                <li>🆘 Support technique illimité</li>
                <li>🌍 Multilingue (FR/EN/ES)</li>
              </ul>
              
              <Link
                href="/formulaire?pack=Sur-Mesure"
                className="block w-full py-3 bg-purple-500 rounded-lg font-bold hover:bg-purple-600 transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/30 rounded-3xl p-12">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Prêt à révolutionner votre restaurant ?
              </h3>
              <p className="text-lg text-gray-200 mb-8">
                Rejoignez plus de 500 restaurateurs qui font confiance à CallToChef pour automatiser leur service client.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/formulaire?pack=Essentielle"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  🎯 Essayer gratuitement
                </Link>
                <Link
                  href="/formulaire?pack=Confort"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  💪 Voir la démo
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Installation en 24h
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Essai gratuit 7 jours
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Support inclus
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
