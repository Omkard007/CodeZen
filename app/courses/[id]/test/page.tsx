"use client";

import Link from "next/link";
import { useUser as useUserContext } from "@/context/user-context";
import { useRef, useState } from "react";
import { useCourses } from "@/hooks/use-courses";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  XCircle,
  ChevronRight,
  Home,
  Download,
  Share2,
  Code2,
} from "lucide-react";
import { CertificatePreview } from "@/components/certificate";
import { downloadPDF } from "@/lib/downloadPDF";
import { useAuth, useUser } from "@clerk/nextjs";

export default function CourseTestPage() {
  const { id } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { getCourseById } = useCourses();
  const course = getCourseById(id as string);
  const { user } = useUser();
  const { completeTest, issueCertificate } = useUserContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!course) return null;

  const currentQuestion = course.test[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === course.test.length - 1;

  const handleSelectAnswer = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    course.test.forEach((q) => {
      console.log(q.correctAnswer, selectedAnswers[q.id]);
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / course.test.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
    completeTest(course.id, finalScore);

    if (finalScore >= 70) {
      issueCertificate(course.id);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleSubmit();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handleDownload = () => {
    if (ref.current) {
      downloadPDF(ref.current);
    }
  };

  if (isSubmitted) {
    const passed = score >= 70;

    return (
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <Card className="text-center p-8 overflow-hidden relative">
          {passed && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400" />
          )}
          <CardHeader>
            <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {passed ? (
                <Award className="h-10 w-10 text-primary" />
              ) : (
                <XCircle className="h-10 w-10 text-destructive" />
              )}
            </div>
            <CardTitle className="text-3xl">
              {passed ? "Congratulations!" : "Test Not Passed"}
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              You scored {score}% on the {course.title} Final Assessment
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-6 border border-border max-w-md mx-auto">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Pass Requirement: 70%</span>
                <span
                  className={passed ? "text-green-500" : "text-destructive"}
                >
                  {score}%
                </span>
              </div>
              <Progress
                value={score}
                className={`h-3 ${
                  passed ? "bg-primary/20" : "bg-destructive/20"
                }`}
              />
            </div>

            {passed ? (
              <div className="space-y-4">
                <p className="text-sm max-w-md mx-auto">
                  You've successfully mastered the foundations of{" "}
                  {course.language}. Your official certificate of completion is
                  now ready for download.
                </p>
                {/* Certificate Preview Mockup */}
                <div className="relative aspect-video h-full w-full" ref={ref}>
                  <CertificatePreview
                    studentName={user?.fullName || "Student Name"}
                    courseName={course.title}
                    instructorName={course.instructor}
                    completionDate={new Date().toLocaleDateString()}
                    certificateId={Math.random().toString(36).substring(2)}
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="gap-2" onClick={handleDownload}>
                    <Download className="h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm max-w-md mx-auto">
                  Don't worry! Coding takes practice. We recommend reviewing the
                  lesson notes and trying the compiler exercises again before
                  retaking the test.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="bg-transparent"
                >
                  Try Again
                </Button>
              </div>
            )}
          </CardContent>

          <CardFooter className="justify-center border-t pt-6">
            <Button variant="ghost" className="gap-2" asChild>
              <Link href="/">
                <Home className="h-4 w-4" /> Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <Badge variant="secondary" className="mb-2">
            Assessment
          </Badge>
          <h1 className="text-3xl font-bold">{course.title}</h1>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {course.test.length}
          </div>
          <Progress
            value={((currentQuestionIndex + 1) / course.test.length) * 100}
            className="w-32 mt-2 h-1"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[currentQuestion.id]?.toString()}
            onValueChange={(val) => handleSelectAnswer(Number.parseInt(val))}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAnswers[currentQuestion.id] === index
                    ? "border-primary bg-primary/5"
                    : "border-transparent bg-muted/30 hover:bg-muted/50"
                }`}
              >
                <RadioGroupItem value={index.toString()} className="sr-only" />
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedAnswers[currentQuestion.id] === index
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  }`}
                >
                  {selectedAnswers[currentQuestion.id] === index && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>
                <span className="text-base">{option}</span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button
            variant="ghost"
            onClick={() =>
              setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))
            }
            disabled={currentQuestionIndex === 0}
            className="bg-transparent"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion.id] === undefined}
            className="gap-2 min-w-[120px]"
          >
            {isLastQuestion ? "Submit Test" : "Next Question"}{" "}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
