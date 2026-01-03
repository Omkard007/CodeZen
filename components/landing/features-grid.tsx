import { Card } from "@/components/ui/card"
import { Terminal, Award, BookOpen, Bot, Zap, Shield } from "lucide-react"

const features = [
  {
    title: "Interactive Courses",
    desc: "Learn 10+ languages with structured paths and real-time validation.",
    icon: BookOpen,
  },
  {
    title: "Online Compiler",
    desc: "Write, run and test code directly in your browser without any setup.",
    icon: Terminal,
  },
  {
    title: "Zen AI Mentor",
    desc: "Instant help with debugging and conceptual explanations 24/7.",
    icon: Bot,
  },
  {
    title: "Verified Certificates",
    desc: "Industry-recognized credentials upon passing final assessments.",
    icon: Award,
  },
  {
    title: "Real-time Execution",
    desc: "High-performance environment for instant code execution results.",
    icon: Zap,
  },
  {
    title: "Skill Assessments",
    desc: "Test your proficiency with timed challenges and expert reviews.",
    icon: Shield,
  },
]

export function FeaturesGrid() {
  return (
    <section className="container mx-auto px-4 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-4">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="group p-8 bg-transparent border border-white/10 hover:border-white/20 transition-all rounded-none first:rounded-tl-2xl last:rounded-br-2xl"
          >
            <feature.icon className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
