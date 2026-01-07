import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Terminal, Award, Settings, User, Code2, Bot } from "lucide-react"
import Link from "next/link"

const items = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Courses", url: "/dashboard/courses", icon: BookOpen },
  { title: "Compiler", url: "/dashboard/compiler", icon: Terminal },
  // { title: "AI Mentor", url: "/dashboard/ai-assistant", icon: Bot },
  { title: "Certificates", url: "/dashboard/profile#certificates", icon: Award },
]

const accountItems = [
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-sidebar">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-3 px-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:glow-cyan transition-all">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">CodeZen</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Learning</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold">
            OD
          </div>
          <div className="flex flex-col flex-1 overflow-hidden">
            <span className="text-xs font-medium truncate">Omkar Dhumal</span>
            <span className="text-[10px] text-muted-foreground truncate">Free Plan</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
