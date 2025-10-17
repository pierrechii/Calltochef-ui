import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { AdvantagesSection } from "@/components/ui/advantages-section";
import { ProcessSection } from "@/components/ui/process-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { AgentsSection } from "@/components/ui/chefs-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AgentsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
