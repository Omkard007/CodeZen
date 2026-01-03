import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { Footer } from "@/components/landing/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      {/*<StatsSection />*/}  
      <FeaturesGrid />
      {/*<TestimonialsSection />*/}
      {/*<CTASection />*/}
      <Footer />
      <AIAssistant />
    </main>
  )
}
