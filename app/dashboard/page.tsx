"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code2, BookOpen, Terminal, Award, Bot, User, Home, Clock, TrendingUp, Play } from "lucide-react"
import { useUser } from "@/context/user-context"
import { useCourses } from "@/hooks/use-courses"

export default function DashboardPage() {
  const { user } = useUser()
  const { courses } = useCourses()

  if (!user) return null

  const activeCourseProgress = user.progress.filter((p) => p.courseId)
  const activeCoursesData = activeCourseProgress.map((p) => {
    const course = courses.find((c) => c.id === p.courseId)
    const progressPercent = Math.round((p.completedLessons.length / (course?.totalLessons || 1)) * 100)
    return {
      ...course,
      progress: progressPercent,
      completedCount: p.completedLessons.length,
      nextLesson: course?.lessons[p.completedLessons.length]?.title || "Final Test",
    }
  })

  // Fallback for demo if no courses are started
  const displayCourses =
    activeCoursesData.length > 0
      ? activeCoursesData
      : courses.slice(0, 3).map((c) => ({ ...c, progress: 0, nextLesson: c.lessons[0].title }))

  const recentCompilers = [
    { id: 1, language: "Python", fileName: "fibonacci.py", lastUsed: "2 hours ago" },
    { id: 2, language: "JavaScript", fileName: "app.js", lastUsed: "5 hours ago" },
    { id: 3, language: "C++", fileName: "sorting.cpp", lastUsed: "1 day ago" },
  ]

  const upcomingTests = [
    { id: 1, course: "Python for Beginners", date: "Jan 15, 2026", type: "Final Assessment" },
    { id: 2, course: "JavaScript Fundamentals", date: "Jan 20, 2026", type: "Mid-term Quiz" },
  ]

  const recommendedCourses = [
    {
      id: 1,
      name: "Advanced Python",
      level: "Intermediate",
      duration: "8 weeks",
      language: "Python",
      students: "12.5K",
    },
    {
      id: 2,
      name: "React Development",
      level: "Intermediate",
      duration: "6 weeks",
      language: "JavaScript",
      students: "18.2K",
    },
    {
      id: 3,
      name: "C++ Data Structures",
      level: "Advanced",
      duration: "10 weeks",
      language: "C++",
      students: "8.3K",
    },
    { id: 4, name: "Go Programming", level: "Beginner", duration: "5 weeks", language: "Go", students: "6.1K" },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-sidebar flex-shrink-0 sticky top-0 h-screen">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-sidebar-primary" />
            <span className="text-xl font-bold">CodeZen</span>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/dashboard/courses"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span>Courses</span>
          </Link>
          <Link
            href="/dashboard/compiler"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
          >
            <Terminal className="h-5 w-5" />
            <span>Compilers</span>
          </Link>
          <Link
            href="/dashboard/certificates"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
          >
            <Award className="h-5 w-5" />
            <span>Certificates</span>
          </Link>
          <Link
            href="/dashboard/ai-assistant"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
          >
            <Bot className="h-5 w-5" />
            <span>AI Assistant</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-semibold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{user.name}</div>
              <div className="text-xs text-sidebar-foreground/60">Premium Member</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name.split(" ")[0]}!</h1>
            <p className="text-muted-foreground">Continue your learning journey and track your progress</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">Active Courses</div>
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold">{user.progress.length}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {user.progress.filter((p) => !p.certificateIssued).length} to complete
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">Certificates Earned</div>
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold">{user.totalCertificates}</div>
              <div className="text-xs text-muted-foreground mt-1">View in profile</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">Hours Coded</div>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold">142</div>
              <div className="text-xs text-muted-foreground mt-1">+18 this week</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-muted-foreground">Current Streak</div>
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold">{user.streak}</div>
              <div className="text-xs text-muted-foreground mt-1">days in a row</div>
            </Card>
          </div>

          {/* Active Courses */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Continue Learning</h2>
              <Button variant="ghost" asChild>
                <Link href="/dashboard/courses">View All</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayCourses.map((course) => (
                <Card key={course.id} className="p-6 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{course.language}</Badge>
                    <span className="text-sm text-primary font-semibold">{course.progress}%</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <Progress value={course.progress} className="mb-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground truncate max-w-[150px]">
                      Next: {course.nextLesson}
                    </span>
                    <Button size="sm" asChild>
                      <Link href={`/dashboard/courses/${course.id}`}>
                        <Play className="h-4 w-4 mr-1" />
                        Continue
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recently Used Compilers */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recently Used Compilers</h3>
              <div className="space-y-4">
                {recentCompilers.map((compiler) => (
                  <div
                    key={compiler.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{compiler.fileName}</div>
                        <div className="text-sm text-muted-foreground">{compiler.language}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{compiler.lastUsed}</div>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/dashboard/compiler?lang=${compiler.language}`}>Open</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
                <Link href="/dashboard/compiler">Open New Compiler</Link>
              </Button>
            </Card>

            {/* Upcoming Tests */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Tests</h3>
              <div className="space-y-4">
                {upcomingTests.map((test) => (
                  <div key={test.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{test.course}</div>
                        <div className="text-sm text-muted-foreground">{test.type}</div>
                      </div>
                      <Badge variant="outline">{test.date}</Badge>
                    </div>
                    <Button size="sm" className="mt-2" asChild>
                      <Link href={`/dashboard/tests/${test.id}`}>Prepare Now</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recommended Courses */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedCourses.map((course) => (
                <Card key={course.id} className="p-6 hover:border-primary transition-colors">
                  <Badge variant="secondary" className="mb-3">
                    {course.language}
                  </Badge>
                  <h3 className="font-semibold mb-2">{course.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center justify-between">
                      <span>Level:</span>
                      <span className="font-medium text-foreground">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <span className="font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Students:</span>
                      <span className="font-medium text-foreground">{course.students}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
                    <Link href={`/dashboard/courses/${course.id}`}>Learn More</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
