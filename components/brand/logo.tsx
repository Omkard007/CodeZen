import { Code2 } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: "h-4 w-4", text: "text-base", padding: "p-1" },
    md: { icon: "h-5 w-5", text: "text-xl", padding: "p-1.5" },
    lg: { icon: "h-7 w-7", text: "text-3xl", padding: "p-2" },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`${currentSize.padding} rounded-lg bg-primary/20 border border-primary/30 group-hover:glow-cyan transition-all`}
      >
        <Code2 className={`${currentSize.icon} text-primary`} />
      </div>
      {showText && (
        <span
          className={`${currentSize.text} font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent`}
        >
          CodeZen
        </span>
      )}
    </div>
  )
}
