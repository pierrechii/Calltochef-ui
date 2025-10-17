import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { AdvantagesSection } from "@/components/ui/advantages-section";
import { ProcessSection } from "@/components/ui/process-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { AgentsSection } from "@/components/ui/chefs-section";
import { FAQSection } from "@/components/ui/faq-section";
import { TrustBadges } from "@/components/ui/trust-badges";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <AdvantagesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AgentsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
