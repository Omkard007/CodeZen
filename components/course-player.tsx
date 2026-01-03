"use client"

import { useState, useEffect } from "react"
import { useUser } from "@/context/user-context"
import { type Course, LANGUAGE_CONFIGS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ChevronRight, ChevronLeft, Terminal, Video, FileText, PlayCircle, Award } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface CoursePlayerProps {
  course: Course
}

export function CoursePlayer({ course }: CoursePlayerProps) {
  const { user, updateProgress, getCourseProgress } = useUser()
  const progress = getCourseProgress(course.id)

  // Initialize to first uncompleted lesson or first lesson
  const initialLessonIndex = progress?.completedLessons.length
    ? Math.min(progress.completedLessons.length, course.lessons.length - 1)
    : 0

  const [currentLessonIndex, setCurrentLessonIndex] = useState(initialLessonIndex)
  const currentLesson = course.lessons[currentLessonIndex]
  const isLessonCompleted = progress?.completedLessons.includes(currentLesson.id)

  // Compiler state
  const [code, setCode] = useState(currentLesson.codeExample)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setCode(currentLesson.codeExample)
    setOutput("")
  }, [currentLesson])

  const handleRunCode = () => {
    setIsRunning(true)
    setOutput(`[CodeZen Compiler v1.0]\nRunning ${course.language} code...\n\n`)

    // Simulate compilation
    setTimeout(() => {
      // Very basic mock execution - in real app this would call an API
      let result = "Hello, World!\nExecution successful.\n"
      if (code.includes("print")) {
        const matches = code.match(/print$$(['"])(.*?)\1$$/)
        if (matches) result = `${matches[2]}\n`
      } else if (code.includes("console.log")) {
        const matches = code.match(/console\.log$$(['"])(.*?)\1$$/)
        if (matches) result = `${matches[2]}\n`
      }

      setOutput((prev) => prev + result + "\nProgram exited with code 0")
      setIsRunning(false)
    }, 1500)
  }

  const handleCompleteLesson = () => {
    updateProgress(course.id, currentLesson.id)
  }

  const nextLesson = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  const progressPercent = Math.round(((progress?.completedLessons.length || 0) / course.totalLessons) * 100)

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6 h-[calc(100vh-120px)]">
      {/* Main Content Area */}
      <div className="flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{course.title}</h2>
            <p className="text-muted-foreground">
              Lesson {currentLessonIndex + 1}: {currentLesson.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs font-medium mb-1">Course Progress: {progressPercent}%</div>
              <Progress value={progressPercent} className="w-32 h-2" />
            </div>
            {isLessonCompleted ? (
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
              </Badge>
            ) : (
              <Button onClick={handleCompleteLesson} size="sm">
                Mark as Completed
              </Button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto space-y-6 pr-2">
          {/* Tabs for Video/Notes */}
          <Tabs defaultValue="video" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="video" className="gap-2">
                <Video className="h-4 w-4" /> Video Lesson
              </TabsTrigger>
              <TabsTrigger value="notes" className="gap-2">
                <FileText className="h-4 w-4" /> Study Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="video" className="mt-4">
              <div className="aspect-video rounded-xl bg-black overflow-hidden border border-border relative group">
                <iframe
                  src={currentLesson.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardContent className="pt-6 prose prose-invert max-w-none">
                  <ReactMarkdown>{currentLesson.notes}</ReactMarkdown>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between py-4 border-t border-border">
            <Button
              variant="outline"
              onClick={prevLesson}
              disabled={currentLessonIndex === 0}
              className="gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" /> Previous Lesson
            </Button>

            <div className="flex gap-2">
              {currentLessonIndex === course.lessons.length - 1 ? (
                <Button className="gap-2" asChild>
                  <a href={`/dashboard/courses/${course.id}/test`}>
                    Take Final Test <Award className="h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button onClick={nextLesson} className="gap-2">
                  Next Lesson <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compiler Side Panel */}
      <div className="flex flex-col gap-4 overflow-hidden border-l border-border pl-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <h3 className="font-bold">Interactive Compiler</h3>
          </div>
          <Badge variant="outline">{course.language}</Badge>
        </div>

        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
          {/* Code Editor Area */}
          <div className="flex-1 rounded-lg border border-border bg-[#1e1e1e] flex flex-col overflow-hidden">
            <div className="bg-[#252526] px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-mono">
                main
                {LANGUAGE_CONFIGS[course.language.toLowerCase() as keyof typeof LANGUAGE_CONFIGS]?.extension || ".txt"}
              </span>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs hover:bg-white/5"
                onClick={() => setCode(currentLesson.codeExample)}
              >
                Reset
              </Button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-transparent p-4 font-mono text-sm resize-none outline-none text-white/90 leading-relaxed"
              spellCheck={false}
            />
          </div>

          {/* Run Control */}
          <Button className="w-full gap-2" onClick={handleRunCode} disabled={isRunning}>
            {isRunning ? "Running..." : "Run Code"} <PlayCircle className="h-4 w-4" />
          </Button>

          {/* Output Area */}
          <div className="h-[200px] rounded-lg border border-border bg-black/50 p-4 font-mono text-xs overflow-auto">
            <div className="text-primary mb-2">Output:</div>
            <pre className="text-white/80 whitespace-pre-wrap">{output || "Run your code to see results..."}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
