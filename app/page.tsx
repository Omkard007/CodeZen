import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code2, Award, BookOpen, Bot, Terminal, Zap, Shield } from "lucide-react"

export default function LandingPage() {
  const languages = [
    { name: "Python", color: "text-blue-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "Java", color: "text-orange-400" },
    { name: "C++", color: "text-cyan-400" },
    { name: "C#", color: "text-purple-400" },
    { name: "Ruby", color: "text-red-400" },
    { name: "Go", color: "text-cyan-300" },
    { name: "Rust", color: "text-orange-300" },
    { name: "PHP", color: "text-indigo-400" },
    { name: "Swift", color: "text-orange-500" },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-balance">CodeZen</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/courses"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/compiler"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Compiler
              </Link>
              <Link
                href="/certificates"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Certificates
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              Trusted by 50,000+ developers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Learn. Code. Compile. Certify.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Master programming with interactive courses, real-time code compilation, AI-powered assistance, and
              industry-recognized certifications — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg h-12 px-8" asChild>
                <Link href="/courses">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-12 px-8 bg-transparent" asChild>
                <Link href="/compiler">Try Online Compiler</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25K+</div>
                <div className="text-sm text-muted-foreground">Certificates Issued</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Languages Supported</div>
              </div>
            </div>
          </div>

          {/* Code Preview Visual */}
          <div className="relative">
            <Card className="p-6 bg-card border-border shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex items-center gap-2 ml-4">
                  <Terminal className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-mono">main.py</span>
                </div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div>
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-400">calculate_fibonacci</span>
                  <span className="text-foreground">(n):</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">if</span> <span className="text-foreground">n </span>
                  <span className="text-primary">{"<="}</span>
                  <span className="text-foreground"> 1:</span>
                </div>
                <div className="ml-8">
                  <span className="text-purple-400">return</span> <span className="text-foreground">n</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-blue-400">calculate_fibonacci</span>
                  <span className="text-foreground">(n-1) + </span>
                  <span className="text-blue-400">calculate_fibonacci</span>
                  <span className="text-foreground">(n-2)</span>
                </div>
                <div className="pt-4">
                  <span className="text-muted-foreground"># Test the function</span>
                </div>
                <div>
                  <span className="text-blue-400">print</span>
                  <span className="text-foreground">(</span>
                  <span className="text-blue-400">calculate_fibonacci</span>
                  <span className="text-foreground">(10))</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-green-500" />
                  <span>Run successfully • Output: 55</span>
                </div>
              </div>
            </Card>

            {/* Floating Language Tags */}
            <div className="absolute -right-4 -top-4 flex flex-wrap gap-2 max-w-[200px]">
              {languages.slice(0, 5).map((lang) => (
                <Badge key={lang.name} variant="secondary" className="shadow-lg">
                  {lang.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Supported Programming Languages
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
              >
                <Code2 className={`h-5 w-5 ${lang.color}`} />
                <span className="font-medium">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Everything you need to master coding</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            A comprehensive platform designed for learners at every level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:border-primary transition-colors">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
            <p className="text-muted-foreground leading-relaxed">
              Learn 10+ programming languages with structured courses, hands-on exercises, and real-world projects.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <Terminal className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Compiler</h3>
            <p className="text-muted-foreground leading-relaxed">
              Write, compile, and run code directly in your browser with our powerful IDE-like interface.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <Bot className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get instant help with debugging, code optimization, and learning concepts from our AI coding assistant.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Certificates</h3>
            <p className="text-muted-foreground leading-relaxed">
              Earn industry-recognized certificates upon course completion to showcase your skills professionally.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Execution</h3>
            <p className="text-muted-foreground leading-relaxed">
              See your code output instantly with our high-performance compilation and execution environment.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Assessments & Testing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Test your knowledge with comprehensive assessments, coding challenges, and timed evaluations.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-balance">Ready to start your coding journey?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Join thousands of developers who are mastering programming with CodeZen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg h-12 px-8" asChild>
                <Link href="/signup">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-12 px-8 bg-transparent" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">CodeZen</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Master programming with interactive courses and real-time compilation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/courses" className="hover:text-foreground transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/compiler" className="hover:text-foreground transition-colors">
                    Compiler
                  </Link>
                </li>
                <li>
                  <Link href="/certificates" className="hover:text-foreground transition-colors">
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2026 CodeZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
