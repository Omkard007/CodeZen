import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { Footer } from "@/components/landing/footer"
import { AIAssistant } from "@/components/ai-assistant"
import CoursesPage from "./courses/page"
import TestimonialPage from "@/components/testimonials"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <CoursesPage/>
      {/*<StatsSection />*/}  
      {/* <FeaturesGrid /> */}
      {/*<TestimonialsSection />*/}
      {/*<CTASection />*/}
      <TestimonialPage/>
      <Footer />
      <AIAssistant />
    </main>
  )
}
