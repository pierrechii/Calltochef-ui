import Link from "next/link";
import Image from "next/image";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen">
      <WebGLShader />
      <div className="relative border border-[#27272a] p-2 w-full mx-auto max-w-3xl bg-transparent">
        <main className="relative border border-[#27272a] py-10 overflow-hidden">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="CallToChef Logo" 
              width={80} 
              height={80} 
              className="h-20 w-auto"
              priority
            />
          </div>

          <h1 className="mb-3 text-white text-center text-6xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
            Votre assistant IA 24/7
          </h1>

          <p className="text-white/60 px-6 text-center text-sm md:text-lg lg:text-xl">
            CallToChef répond aux questions de vos clients, gère les réservations et synchronise tout automatiquement.
          </p>

          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500">Disponible dès aujourd&apos;hui</p>
          </div>

          {/* Bouton qui redirige vers /presentation */}
          <div className="flex justify-center">
            <Link href="/presentation">
              <LiquidButton className="text-white border rounded-full" size={"xl"}>
                Essayer CallToChef
              </LiquidButton>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
