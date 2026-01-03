"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Bot, Send, Code2, Sparkles, Lightbulb, Bug, Zap, Copy, Check } from "lucide-react"

export default function AIAssistantPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your AI coding assistant. I can help you with:\n\n• Explaining code concepts\n• Debugging errors\n• Optimizing your code\n• Generating code examples\n\nHow can I assist you today?",
      timestamp: "10:30 AM",
    },
  ])
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const quickActions = [
    { icon: Lightbulb, label: "Explain code", prompt: "Can you explain how this code works?" },
    { icon: Bug, label: "Fix error", prompt: "Help me debug this error:" },
    { icon: Zap, label: "Optimize", prompt: "How can I optimize this code?" },
    { icon: Code2, label: "Generate example", prompt: "Generate an example of" },
  ]

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      role: "user" as const,
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setInput("")

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: "assistant" as const,
        content: `I understand you're asking about: "${input}"\n\nLet me help you with that. Here's a detailed explanation:\n\n\`\`\`python\n# Example code\ndef example_function(param):\n    result = param * 2\n    return result\n\`\`\`\n\nThis code demonstrates the concept you're asking about. Would you like me to explain any specific part in more detail?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const handleCopy = (content: string, id: number) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleQuickAction = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="font-semibold">AI Coding Assistant</h1>
                <p className="text-xs text-muted-foreground">Powered by advanced AI</p>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="gap-1">
            <Sparkles className="h-3 w-3" />
            Context-Aware
          </Badge>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full">
          {/* Messages Area */}
          <div className="flex-1 overflow-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "assistant" ? "bg-primary/10" : "bg-muted"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="h-4 w-4 text-primary" />
                  ) : (
                    <span className="text-sm font-semibold">JD</span>
                  )}
                </div>

                <div className={`flex-1 max-w-[80%] ${message.role === "user" ? "items-end" : "items-start"}`}>
                  <Card
                    className={`p-4 ${
                      message.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-card border-border"
                    }`}
                  >
                    <div className="prose prose-invert max-w-none">
                      {message.content.includes("```") ? (
                        <div className="space-y-2">
                          {message.content.split("```").map((part, idx) => {
                            if (idx % 2 === 1) {
                              const [lang, ...codeLines] = part.split("\n")
                              const code = codeLines.join("\n")
                              return (
                                <div key={idx} className="relative">
                                  <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                                    <span>{lang || "code"}</span>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="h-6 px-2"
                                      onClick={() => handleCopy(code, message.id)}
                                    >
                                      {copiedId === message.id ? (
                                        <Check className="h-3 w-3" />
                                      ) : (
                                        <Copy className="h-3 w-3" />
                                      )}
                                    </Button>
                                  </div>
                                  <pre className="bg-muted/50 p-3 rounded text-sm overflow-x-auto">
                                    <code>{code}</code>
                                  </pre>
                                </div>
                              )
                            }
                            return (
                              <p key={idx} className="text-sm leading-relaxed whitespace-pre-wrap">
                                {part}
                              </p>
                            )
                          })}
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      )}
                    </div>
                  </Card>
                  <div
                    className={`text-xs text-muted-foreground mt-1 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="border-t border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground mr-2">Quick actions:</span>
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  size="sm"
                  variant="outline"
                  className="gap-2 bg-card"
                  onClick={() => handleQuickAction(action.prompt)}
                >
                  <action.icon className="h-3 w-3" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border bg-card px-6 py-4">
            <div className="flex gap-3">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Ask me anything about coding... (Shift + Enter for new line)"
                className="min-h-[60px] max-h-[200px] resize-none"
              />
              <Button onClick={handleSend} disabled={!input.trim()} className="self-end">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
