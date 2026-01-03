import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[12px] font-medium text-primary animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Zen for Teams is here
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[0.9] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            AI for teams building the web
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Empower your entire organization to create at the speed of thought, while ensuring security remains at the
            forefront.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 rounded-full h-12 font-medium"
              asChild
            >
              <Link href="/dashboard">Start Coding Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-transparent hover:bg-white/5 px-8 rounded-full h-12 font-medium gap-2"
              asChild
            >
              <Link href="/demo">
                <Play className="h-4 w-4 fill-current" /> Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] -z-10 rounded-full opacity-30" />
    </section>
  )
}
