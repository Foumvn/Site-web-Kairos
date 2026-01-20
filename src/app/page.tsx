import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { AIKnowledgeSection } from "@/components/home/ai-knowledge-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { StatsSection } from "@/components/home/stats-section";
import { Testimonial } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 overflow-x-hidden">
      <SiteHeader variant="dark" />
      <main className="relative pt-20">
        <HeroSection />

        {/* AI Knowledge Section - White background */}
        <AIKnowledgeSection />

        {/* How it works */}
        <HowItWorksSection />

        {/* Features Section */}
        <FeaturesSection />
      </main>

      <StatsSection />
      <Testimonial />
      <CTASection />

      <SiteFooter variant="dark" />
    </div>
  );
}
