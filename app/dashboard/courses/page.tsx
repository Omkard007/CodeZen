"use client"

import Link from "next/link"
import { useCourses } from "@/hooks/use-courses"
import { useUser } from "@/context/user-context"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, Award, CheckCircle2 } from "lucide-react"

export default function CoursesPage() {
  const { courses, loading } = useCourses()
  const { user, getCourseProgress } = useUser()

  if (loading) {
    return (
      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="h-[300px]">
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Explore All Courses</h1>
          <p className="text-muted-foreground">
            Start your journey with beginner-friendly courses in 10 programming languages.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const progress = getCourseProgress(course.id)
          const isCompleted = progress?.certificateIssued
          const progressPercent = progress
            ? Math.round((progress.completedLessons.length / course.totalLessons) * 100)
            : 0

          return (
            <Card key={course.id} className="flex flex-col h-full hover:border-primary transition-all group">
              <CardHeader className="relative pb-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{course.language}</Badge>
                  {isCompleted && (
                    <Badge
                      variant="default"
                      className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20"
                    >
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-4">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.totalLessons} Lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    Certificate
                  </div>
                </div>
                {progress && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-medium">
                      <span>Course Progress</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <Progress value={progressPercent} className="h-1" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full" asChild variant={isCompleted ? "outline" : "default"}>
                  <Link href={`/dashboard/courses/${course.id}`}>
                    {isCompleted ? "Review Course" : progress ? "Continue Learning" : "Start Course"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
