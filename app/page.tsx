import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { AIAssistant } from "@/components/ai-assistant"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <AIAssistant />

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">© 2026 CodeZen. Built for the modern developer.</div>
          <div className="flex gap-8 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
