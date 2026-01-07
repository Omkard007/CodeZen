"use client";

import Link from "next/link";
import { useCourses } from "@/hooks/use-courses";
import { useUser } from "@/context/user-context";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Award, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function CoursesPage() {
  const { courses, isLoading } = useCourses();
  const { user, getCourseProgress } = useUser();

  if (isLoading) {
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
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-8 space-y-8 max-w-6xl mx-auto py-15">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-2 text-center w-full">
              Explore All Courses
            </h1>
            <p className="text-muted-foreground text-center w-full">
              Start your journey with beginner-friendly courses in 10
              programming languages.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            return (
              <Card
                key={course.id}
                className="flex flex-col h-full hover:border-primary transition-all group"
              >
                <CardHeader className="relative pb-0">
                  {/* <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{course.language}</Badge>
                </div> */}
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-4">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {course.difficulty}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      Certificate
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full" asChild variant={"default"}>
                    <Link href={`/courses/${course.id}`}>
                      {"Start Learning"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
