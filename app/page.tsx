"use client"
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen">
      <WebGLShader/>
      <div className="relative border border-[#27272a] p-2 w-full mx-auto max-w-3xl bg-transparent">
        <main className="relative border border-[#27272a] py-10 overflow-hidden">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="CallToChef Logo" className="h-20 w-auto" />
          </div>

          <h1 className="mb-3 text-white text-center text-6xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
            Votre réceptionniste IA 24/7
          </h1>

          <p className="text-white/60 px-6 text-center text-sm md:text-lg lg:text-xl">
            CallToChef répond aux appels de vos clients, prend les réservations et enregistre les commandes automatiquement.
          </p>

          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500">Disponible dès aujourd'hui</p>
          </div>

          <div className="flex justify-center">
            <LiquidButton className="text-white border rounded-full" size={"xl"}>
              Essayer CallToChef
            </LiquidButton>
          </div>
        </main>
      </div>
    </div>
  )
}
