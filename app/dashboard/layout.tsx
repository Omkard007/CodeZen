"use client"

import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useUser } from "@/context/user-context"
import { Code2, BookOpen, Terminal, Award, Bot, User, Home, LogOut, Search, Bell } from "lucide-react"
import { AIAssistant } from "@/components/ai-assistant"
import { Input } from "@/components/ui/input"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user, logout } = useUser()
  const searchParams = useSearchParams()

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Compilers", href: "/dashboard/compiler", icon: Terminal },
    { name: "Certificates", href: "/dashboard/profile", icon: Award }, // Linked to profile's cert section
    { name: "AI Assistant", href: "/dashboard/ai-assistant", icon: Bot },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ]

  if (!user) return null

  return (
    <div className="min-h-screen flex bg-background">
      {/* Persistent Sidebar */}
      <aside className="w-64 border-r border-border bg-sidebar flex-shrink-0 sticky top-0 h-screen hidden md:flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-sidebar-primary" />
            <span className="text-xl font-bold">CodeZen</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "text-sidebar-primary" : ""}`} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-4 py-3 h-auto text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10"
            onClick={logout}
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </Button>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-semibold shadow-sm">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{user.name}</div>
              <div className="text-xs text-sidebar-foreground/60">{user.email}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="flex-1 max-w-md relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses, lessons, or notes..." className="pl-10 h-9 bg-background/50 border-0" />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
            </Button>
            <div className="h-6 w-px bg-border mx-2" />
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-primary">LVL 12</div>
                <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden mt-0.5">
                  <div className="bg-primary h-full w-[65%]" />
                </div>
              </div>
              <Link
                href="/dashboard/profile"
                className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-primary/20 transition-all"
              >
                <span className="text-[10px] font-bold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Viewport */}
        <main className="flex-1 overflow-y-auto relative p-6 lg:p-8">
          <Suspense fallback={null}>
            {children}
            <AIAssistant />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
