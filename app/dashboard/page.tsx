"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Clock, TrendingUp, Play, Terminal } from "lucide-react"
import { useUser } from "@/context/user-context"
import { useCourses } from "@/hooks/use-courses"
import { motion } from "framer-motion"

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
      {/* Main Content */}
      <main className="flex-1 overflow-auto max-w-7xl mx-auto">
        <div className="p-8 space-y-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-2 tracking-tight">Welcome back, {user.name.split(" ")[0]}!</h1>
            <p className="text-muted-foreground text-lg">Your progress is looking great. Ready for the next lesson?</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Active Courses", val: user.progress.length, icon: BookOpen, desc: "In progress" },
              { label: "Certificates", val: user.totalCertificates, icon: Award, desc: "Earned so far" },
              { label: "Hours Coded", val: 142, icon: TrendingUp, desc: "+18 this week" },
              { label: "Streak", val: user.streak, icon: Clock, desc: "Days in a row" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 border-white/5 bg-card/40 backdrop-blur-sm group hover:border-primary/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <stat.icon className="h-5 w-5 text-primary group-hover:glow-cyan transition-all" />
                  </div>
                  <div className="text-4xl font-bold mb-1">{stat.val}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.desc}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Active Courses */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Continue Learning</h2>
              <Button variant="link" className="text-primary font-semibold" asChild>
                <Link href="/dashboard/courses">View All Courses</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayCourses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Card className="p-6 hover:border-primary/30 transition-all border-white/5 bg-card/40 group relative overflow-hidden">
                    <div className="flex items-start justify-between mb-6">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {course.language}
                      </Badge>
                      <span className="text-sm text-primary font-bold tracking-tighter">{course.progress}%</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <Progress value={course.progress} className="h-1.5 mb-6" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium truncate max-w-[140px]">
                        Next: {course.nextLesson}
                      </span>
                      <Button
                        size="sm"
                        className="rounded-full px-5 h-9 bg-primary text-black font-bold hover:bg-primary/90 glow-cyan"
                        asChild
                      >
                        <Link href={`/dashboard/courses/${course.id}`}>
                          <Play className="h-3.5 w-3.5 mr-1.5 fill-current" />
                          Resume
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

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

          {/* Recommended Courses */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedCourses.map((course) => (
                <Card
                  key={course.id}
                  className="p-6 hover:border-primary/30 transition-all border-white/5 bg-card/40 group relative overflow-hidden"
                >
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-3">
                    {course.language}
                  </Badge>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{course.name}</h3>
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
