import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { StatsSection } from "@/components/landing/stats-section"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <AIAssistant />
    </main>
  )
}
