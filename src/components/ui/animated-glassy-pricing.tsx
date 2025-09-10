"use client"

import React, { useRef, useEffect, useState } from "react";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

// ✅ Icône de validation
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// ✅ Interface de props
export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: "primary" | "secondary";
}

// ✅ Carte individuelle
export const PricingCard = ({
  planName, description, price, features, buttonText, isPopular = false, buttonVariant = "primary"
}: PricingCardProps) => {
  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${isPopular ? "scale-105 relative ring-2 ring-cyan-400/20 shadow-2xl" : ""}
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    ${buttonVariant === "primary" 
      ? "bg-cyan-400 hover:bg-cyan-300 text-foreground" 
      : "bg-black/10 hover:bg-black/20 text-foreground border border-black/20 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20"
    }
  `;

  return (
    <div className={cardClasses.trim()}>
      {isPopular && (
        <div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-cyan-400 text-black">
          Populaire
        </div>
      )}
      <div className="mb-3">
        <h2 className="text-[36px] font-extralight tracking-[-0.03em] text-foreground">{planName}</h2>
        <p className="text-[16px] text-foreground/70 mt-1">{description}</p>
      </div>
      <div className="my-6 flex items-baseline gap-2">
        <span className="text-[36px] font-extralight text-foreground">€{price}</span>
        <span className="text-[14px] text-foreground/70">/mois</span>
      </div>
      <div className="w-full mb-5 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <ul className="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="text-cyan-400 w-4 h-4" /> {feature}
          </li>
        ))}
      </ul>
      <RippleButton className={buttonClasses.trim()}>{buttonText}</RippleButton>
    </div>
  );
};

// ✅ Page complète avec plusieurs plans
interface ModernPricingPageProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  plans: PricingCardProps[];
}

export const ModernPricingPage = ({
  title, subtitle, plans
}: ModernPricingPageProps) => {
  return (
    <div className="bg-background text-foreground min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-[42px] md:text-[56px] font-extralight leading-tight tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-600 dark:from-white dark:via-cyan-300 dark:to-blue-400">
          {title}
        </h1>
        <p className="mt-3 text-[16px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl">
        {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
      </div>
    </div>
  );
};
