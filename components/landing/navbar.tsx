"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b border-white/5 bg-black/60 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <Logo size="md" />
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {["Dashboard", "Courses", "Compiler", "Pricing"].map((item) => (
              <Link
                key={item}
                href={item === "Dashboard" ? "/dashboard" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white" asChild>
              <Link href="/dashboard">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-primary text-black hover:bg-primary/90 rounded-full px-6 glow-cyan" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
