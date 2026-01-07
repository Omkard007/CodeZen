"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/context/user-context";
import { type Course, LANGUAGE_CONFIGS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Video,
  FileText,
  PlayCircle,
  Award,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface CoursePlayerProps {
  course: Course;
}

export function CoursePlayer({ course }: CoursePlayerProps) {
  const { user } = useUser();

  // Initialize to first uncompleted lesson or first lesson

  // Compiler state
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6 h-[calc(100vh-120px)]">
      {/* Main Content Area */}
      <div className="flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{course.title}</h2>
          </div>
          <div className="flex items-center gap-4"></div>
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
                  src={course.url}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardContent className="pt-6 prose prose-invert max-w-none">
                  <ReactMarkdown>{course.notes}</ReactMarkdown>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between py-4 border-t border-border">
            <div className="flex gap-2">
              <Button className="gap-2" asChild>
                <a href={`/dashboard/courses/${course.id}/test`}>
                  Take Final Test <Award className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Compiler Side Panel */}
      <div className="flex flex-col gap-4 overflow-hidden border-l border-border pl-6">
        <MiniCompiler language={course.language} />
      </div>
    </div>
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, RotateCcw, Code2 } from "lucide-react";
import { LANGUAGE_DATA } from "@/lib/languages";

interface MiniCompilerProps {
  language: string;
}

export function MiniCompiler({ language }: MiniCompilerProps) {
  console.log(language);
  const [code, setCode] = useState(
    LANGUAGE_DATA.find((l) => l.name === language.toLocaleLowerCase())
      ?.boilerplate
  );
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    language.toLocaleLowerCase()
  );
  useEffect(() => {
    const boilerplate =
      LANGUAGE_DATA.find((l) => l.name === selectedLanguage.toLocaleLowerCase())
        ?.boilerplate || "";
    setCode(boilerplate);
  }, [selectedLanguage]);

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C# / .NET" },
    { value: "go", label: "Go" },
    { value: "ruby", label: "Ruby" },
    { value: "php", label: "PHP" },
    { value: "rust", label: "Rust" },
  ];

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      const res = await fetch("https://ce.judge0.com/submissions?wait=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          language_id:
            LANGUAGE_DATA.find((l) => l.name === selectedLanguage)
              ?.languageId || 1,
          source_code: code,
        }),
      });
      const data = await res.json();
      setOutput(data.stderr ? data.stderr : data.stdout || "No output");
    } catch {
      setOutput("Error running code");
    }
    setIsRunning(false);
  };

  const handleReset = () => {
    setCode(
      LANGUAGE_DATA.find((l) => l.name === selectedLanguage.toLocaleLowerCase())
        ?.boilerplate || ""
    );
    setOutput("");
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-2">
        <Code2 className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold">Code Sandbox</span>
      </div>

      {/* Language Selector */}
      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
        <SelectTrigger className="h-8 text-xs w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-48 w-full">
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <div className="flex items-center gap-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      LANGUAGE_DATA.find((l) => l.name === lang.value)?.icon ||
                      "",
                  }}
                />
                <span>{lang.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Code Editor - Compact */}
      <div className="flex-1 rounded-lg border border-border bg-[#1e1e1e] flex flex-col overflow-hidden min-h-0">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 bg-transparent p-3 font-mono text-xs resize-none outline-none text-white/90 leading-relaxed min-h-0"
          spellCheck={false}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex gap-2">
        <Button
          size="sm"
          className="flex-1 h-8 text-xs gap-1"
          onClick={handleRunCode}
          disabled={isRunning}
        >
          <Play className="h-3 w-3" />
          {isRunning ? "Running..." : "Run"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-8 text-xs gap-1 bg-transparent"
          onClick={handleReset}
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </Button>
      </div>

      {/* Output - Compact */}
      <div className="h-[120px] rounded-lg border border-border bg-black/50 p-3 font-mono text-xs overflow-auto">
        <div className="text-primary text-xs mb-1 flex items-center gap-1">
          <Terminal className="h-3 w-3" /> Output:
        </div>
        <pre className="text-white/80 whitespace-pre-wrap text-xs">
          {output || "Run code to see results..."}
        </pre>
      </div>
    </div>
  );
}
