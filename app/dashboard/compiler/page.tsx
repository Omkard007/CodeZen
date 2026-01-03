"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Play, RotateCcw, Save, Plus, X, Terminal, Settings, Download, Upload, Code2 } from "lucide-react"

export default function CompilerPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("python")
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState("main")

  const languages = [
    { value: "python", label: "Python", extension: "py" },
    { value: "javascript", label: "JavaScript", extension: "js" },
    { value: "java", label: "Java", extension: "java" },
    { value: "cpp", label: "C++", extension: "cpp" },
    { value: "csharp", label: "C#", extension: "cs" },
    { value: "ruby", label: "Ruby", extension: "rb" },
    { value: "go", label: "Go", extension: "go" },
    { value: "rust", label: "Rust", extension: "rs" },
    { value: "php", label: "PHP", extension: "php" },
    { value: "swift", label: "Swift", extension: "swift" },
  ]

  const [files, setFiles] = useState([
    {
      id: "main",
      name: "main.py",
      language: "python",
      code: `def fibonacci(n):
    """Calculate fibonacci number"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Calculate and print
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`,
    },
  ])

  const [output, setOutput] = useState("")
  const [executionTime, setExecutionTime] = useState("")

  const activeFile = files.find((f) => f.id === activeTab)

  const handleRunCode = () => {
    setIsRunning(true)
    const startTime = Date.now()

    setTimeout(() => {
      setOutput(`F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34

Program executed successfully.`)
      setExecutionTime(`${Date.now() - startTime}ms`)
      setIsRunning(false)
    }, 1200)
  }

  const handleReset = () => {
    setOutput("")
    setExecutionTime("")
    const updatedFiles = files.map((file) => {
      if (file.id === activeTab) {
        return { ...file, code: "" }
      }
      return file
    })
    setFiles(updatedFiles)
  }

  const handleCodeChange = (value: string) => {
    const updatedFiles = files.map((file) => {
      if (file.id === activeTab) {
        return { ...file, code: value }
      }
      return file
    })
    setFiles(updatedFiles)
  }

  const handleAddFile = () => {
    const langConfig = languages.find((l) => l.value === selectedLanguage)
    const newFileId = `file-${Date.now()}`
    const newFile = {
      id: newFileId,
      name: `untitled.${langConfig?.extension || "txt"}`,
      language: selectedLanguage,
      code: "",
    }
    setFiles([...files, newFile])
    setActiveTab(newFileId)
  }

  const handleCloseFile = (fileId: string) => {
    if (files.length === 1) return
    const filteredFiles = files.filter((f) => f.id !== fileId)
    setFiles(filteredFiles)
    if (activeTab === fileId) {
      setActiveTab(filteredFiles[0].id)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-semibold">Online Compiler</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button size="sm" variant="outline" className="bg-transparent">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button size="sm" variant="outline" className="bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" variant="outline" className="bg-transparent">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor */}
        <div className="flex-1 flex flex-col">
          {/* File Tabs */}
          <div className="border-b border-border bg-muted/30 flex items-center justify-between px-2">
            <div className="flex items-center overflow-x-auto">
              {files.map((file) => (
                <div
                  key={file.id}
                  className={`flex items-center gap-2 px-4 py-2 border-r border-border cursor-pointer transition-colors ${
                    activeTab === file.id ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab(file.id)}
                >
                  <Code2 className="h-4 w-4" />
                  <span className="text-sm font-mono">{file.name}</span>
                  {files.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCloseFile(file.id)
                      }}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <Button size="sm" variant="ghost" onClick={handleAddFile}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden p-4 bg-muted/10">
            <Textarea
              value={activeFile?.code || ""}
              onChange={(e) => handleCodeChange(e.target.value)}
              className="w-full h-full font-mono text-sm bg-card border-border resize-none focus-visible:ring-primary"
              placeholder={`Write your ${selectedLanguage} code here...`}
            />
          </div>

          {/* Action Bar */}
          <div className="border-t border-border bg-card px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button onClick={handleRunCode} disabled={isRunning} className="gap-2">
                <Play className="h-4 w-4" />
                {isRunning ? "Running..." : "Run Code"}
              </Button>
              <Button variant="outline" onClick={handleReset} className="gap-2 bg-transparent">
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Save className="h-4 w-4" />
                Save
              </Button>
            </div>

            {executionTime && <div className="text-sm text-muted-foreground">Execution time: {executionTime}</div>}
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-full lg:w-[35%] border-l border-border bg-card flex flex-col">
          <Tabs defaultValue="output" className="flex-1 flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b border-border bg-muted/30 p-0">
              <TabsTrigger value="output" className="rounded-none data-[state=active]:bg-card">
                Console Output
              </TabsTrigger>
              <TabsTrigger value="errors" className="rounded-none data-[state=active]:bg-card">
                Errors
              </TabsTrigger>
              <TabsTrigger value="info" className="rounded-none data-[state=active]:bg-card">
                Info
              </TabsTrigger>
            </TabsList>

            <TabsContent value="output" className="flex-1 overflow-auto p-4 m-0">
              {output ? (
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">Output</span>
                  </div>
                  <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{output}</pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <Terminal className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-sm text-muted-foreground">No output yet</p>
                  <p className="text-xs text-muted-foreground mt-1">Run your code to see the output here</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="errors" className="flex-1 overflow-auto p-4 m-0">
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <p className="text-sm text-muted-foreground">No errors</p>
                <p className="text-xs text-muted-foreground mt-1">Your code compiled successfully</p>
              </div>
            </TabsContent>

            <TabsContent value="info" className="flex-1 overflow-auto p-4 m-0">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Compiler Information</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Language:</span>
                      <span className="font-medium text-foreground">
                        {languages.find((l) => l.value === selectedLanguage)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Version:</span>
                      <span className="font-medium text-foreground">Latest</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory Limit:</span>
                      <span className="font-medium text-foreground">256 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Limit:</span>
                      <span className="font-medium text-foreground">5 seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
