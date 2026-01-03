"use client"

import { useParams } from "next/navigation"
import { useCourses } from "@/hooks/use-courses"
import { CoursePlayer } from "@/components/course-player"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function CourseLearnPage() {
  const { id } = useParams()
  const { getCourseById, loading } = useCourses()
  const course = getCourseById(id as string)

  if (loading) {
    return (
      <div className="p-8 space-y-8">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid lg:grid-cols-[1fr_400px] gap-6">
          <Skeleton className="h-[500px] w-full" />
          <Skeleton className="h-[500px] w-full" />
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <h2 className="text-2xl font-bold">Course Not Found</h2>
        <Button asChild>
          <Link href="/dashboard/courses">Return to Courses</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="mb-6">
        <Button
          variant="ghost"
          asChild
          className="pl-0 hover:bg-transparent -ml-2 text-muted-foreground hover:text-foreground"
        >
          <Link href="/dashboard/courses" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
      </div>

      <CoursePlayer course={course} />
    </div>
  )
}
