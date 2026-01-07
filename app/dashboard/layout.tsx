"use client"

import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { useUser } from "@/context/user-context"
import { BookOpen, Terminal, Award, Bot, User, Home, LogOut, Search, Bell } from "lucide-react"
import { AIAssistant } from "@/components/ai-assistant"
import { Input } from "@/components/ui/input"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user, logout } = useUser()


  if (!user) return null

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Persistent Sidebar */}
        <aside className="w-64 border-r border-border bg-sidebar flex-shrink-0 sticky top-0 h-screen hidden md:flex flex-col">
          <div className="p-6 border-b border-sidebar-border">
            <Link href="/dashboard" className="group inline-block">
              <Logo size="md" />
            </Link>
          </div>
          <AppSidebar />
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          {/* <header className="h-16 border-b border-border bg-card/50 backdrop-blur sticky top-0 z-40 flex items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden" />
              <div className="flex-1 max-w-md relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses, lessons, or notes..."
                  className="pl-10 h-9 bg-background/50 border-0"
                />
              </div>
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
                <Button variant="ghost" size="icon" onClick={logout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header> */}

          {/* Main Viewport */}
          <main className="flex-1 overflow-y-auto relative p-6 lg:p-8">
            <Suspense fallback={null}>
              {children}
              <AIAssistant />
            </Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
