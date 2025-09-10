"use client";

import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

export default function Presentation() {
  // Plans CallToChef
  const callToChefPlans: PricingCardProps[] = [
    {
      planName: "🥗 Essentiel",
      description: "Entrée simple pour tester CallToChef",
      price: "39",
      features: [
        "📞 Réception d’appels 24/7 (réservations uniquement)",
        "📩 Confirmation automatique par SMS",
        "📊 Suivi basique via Google Sheets",
        "📧 Support par email",
      ],
      buttonText: "Choisir Essentiel",
      buttonVariant: "secondary",
    },
    {
      planName: "🍝 Confort",
      description: "Le vrai standard pour un resto",
      price: "69",
      features: [
        "📞 Réservations + commandes à emporter",
        "📩 Confirmations par SMS & email",
        "📅 Synchronisation Google Calendar",
        "📊 Dashboard Notion ou Sheets",
        "⚡ Support prioritaire",
      ],
      buttonText: "Choisir Confort",
      isPopular: true,
      buttonVariant: "primary",
    },
    {
      planName: "🍷 Premium",
      description: "Solution haut de gamme complète",
      price: "119",
      features: [
        "📞 Réservations + commandes + FAQ",
        "🎤 Voix personnalisée (via ElevenLabs)",
        "📈 Suivi mensuel des performances",
        "⚡ Support email prioritaire",
      ],
      buttonText: "Choisir Premium",
      buttonVariant: "primary",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔵 Shader animation en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <ShaderAnimation />
      </div>

      {/* 🔵 Contenu */}
      <div className="relative z-10 px-6 py-12">
        <main className="max-w-5xl mx-auto text-center text-white">
          {/* Titre */}
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tighter">
            Découvrez CallToChef
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-12">
            L’assistant vocal intelligent qui répond à vos appels clients, prend les réservations
            et booste vos ventes — 24h/24.
          </p>

          {/* Pricing modernisé */}
          <ModernPricingPage
            title={
              <>
                💰 Nos <span className="text-cyan-400">offres</span>
              </>
            }
            subtitle="Choisissez le pack qui correspond à votre restaurant"
            plans={callToChefPlans}
            showAnimatedBackground={false} // désactivé car on a déjà ShaderAnimation
          />

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition"
            >
              Retour à l’accueil
            </Link>
            <Link
              href="https://calendly.com/calltochefia/30min"
              target="_blank"
              className="px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition"
            >
              Réserver une démo gratuite
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
