"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { motion } from "framer-motion"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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
            {["Dashboard", "Courses", "Compiler"].map((item) => (
              <Link
                key={item}
                href={item === "Dashboard" ? "/dashboard" : item === "Courses" ? "/dashboard/courses" : item === "Compiler" ? "/dashboard/compiler" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav><ClerkProvider>

            <div className="flex items-center gap-4">
              <SignedOut> <SignInButton><Button className="bg-primary text-black hover:bg-primary/90 rounded-full cursor-pointer px-6">Login</Button></SignInButton>

              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div></ClerkProvider>
        </div>
      </div>
    </motion.header>
  )
}
