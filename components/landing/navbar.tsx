import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-white" />
            <span className="text-lg font-bold tracking-tight">CodeZen</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/compiler"
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Compiler
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
