import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, Award, BookOpen, Code2, Trophy, Star, Download, Share2, Calendar, Clock } from "lucide-react"

export default function ProfilePage() {
  const completedCourses = [
    {
      id: 1,
      name: "Python Basics",
      completedDate: "Dec 15, 2025",
      score: 95,
      certificate: true,
    },
    {
      id: 2,
      name: "JavaScript Fundamentals",
      completedDate: "Nov 28, 2025",
      score: 88,
      certificate: true,
    },
    {
      id: 3,
      name: "Web Development with HTML/CSS",
      completedDate: "Nov 10, 2025",
      score: 92,
      certificate: true,
    },
    {
      id: 4,
      name: "Git & Version Control",
      completedDate: "Oct 22, 2025",
      score: 90,
      certificate: true,
    },
  ]

  const certificates = [
    {
      id: 1,
      course: "Python Basics",
      issueDate: "Dec 15, 2025",
      credentialId: "CZ-PY-2025-8471",
    },
    {
      id: 2,
      course: "JavaScript Fundamentals",
      issueDate: "Nov 28, 2025",
      credentialId: "CZ-JS-2025-7392",
    },
    {
      id: 3,
      course: "Web Development with HTML/CSS",
      issueDate: "Nov 10, 2025",
      credentialId: "CZ-WD-2025-6284",
    },
  ]

  const skillBadges = [
    { name: "Python Expert", level: "Advanced", progress: 85 },
    { name: "JavaScript Master", level: "Intermediate", progress: 68 },
    { name: "Problem Solver", level: "Advanced", progress: 90 },
    { name: "Code Optimizer", level: "Intermediate", progress: 72 },
    { name: "Quick Learner", level: "Advanced", progress: 95 },
    { name: "Bug Hunter", level: "Intermediate", progress: 65 },
  ]

  const achievements = [
    { icon: Trophy, title: "First Certificate", description: "Earned your first certificate" },
    { icon: Star, title: "5 Course Streak", description: "Completed 5 courses in a row" },
    { icon: Code2, title: "100 Hours Coded", description: "Reached 100 hours of coding" },
    { icon: Award, title: "Top Performer", description: "Scored 90+ on 3 assessments" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground w-fit">
          <ChevronLeft className="h-4 w-4" />
          <span className="text-sm">Dashboard</span>
        </Link>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                JD
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-muted-foreground mb-4">john.doe@example.com</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Trophy className="h-3 w-3" />
                    Premium Member
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Joined Oct 2025
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    142 Hours Coded
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                Edit Profile
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Courses Completed</span>
            </div>
            <div className="text-3xl font-bold">4</div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Certificates Earned</span>
            </div>
            <div className="text-3xl font-bold">7</div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Achievements</span>
            </div>
            <div className="text-3xl font-bold">12</div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Average Score</span>
            </div>
            <div className="text-3xl font-bold">91%</div>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Completed Courses */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Completed Courses</h2>
              <div className="space-y-4">
                {completedCourses.map((course) => (
                  <div key={course.id} className="p-4 rounded-lg bg-muted/30 border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{course.name}</h3>
                        <p className="text-sm text-muted-foreground">{course.completedDate}</p>
                      </div>
                      <Badge variant="secondary" className="font-semibold">
                        {course.score}%
                      </Badge>
                    </div>
                    {course.certificate && (
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        <Award className="h-3 w-3 mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Skill Badges */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Skill Badges</h2>
              <div className="space-y-4">
                {skillBadges.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-sm">{skill.name}</h3>
                        <p className="text-xs text-muted-foreground">{skill.level}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Certificates */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Certificates</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{cert.course}</h3>
                        <p className="text-sm text-muted-foreground mb-1">Issued: {cert.issueDate}</p>
                        <p className="text-xs text-muted-foreground font-mono">ID: {cert.credentialId}</p>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Share2 className="h-3 w-3 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
