"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, X, Sparkles } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Zen, your AI coding mentor. How can I help you with your coding journey today?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isTyping) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let aiResponse =
        "That's a great question! In programming, this concept is fundamental. Would you like me to show you a code example or explain the theory behind it?"

      // Simple mock keyword responses
      if (userMessage.toLowerCase().includes("python")) {
        aiResponse =
          "Python is known for its readability. For beginners, I recommend focusing on lists and dictionaries as they are the backbone of most Python applications. Do you have a specific Python error you're trying to solve?"
      } else if (userMessage.toLowerCase().includes("error") || userMessage.toLowerCase().includes("fix")) {
        aiResponse =
          "I can help you debug! Please paste your code snippet and the error message here. I'll analyze the logic and suggest a fix."
      } else if (userMessage.toLowerCase().includes("certificate")) {
        aiResponse =
          "To earn a certificate, you need to complete all lessons in a course and score at least 70% on the final assessment. You can download it directly from the test results page or your profile!"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-2xl hover:scale-105 transition-transform bg-primary text-primary-foreground group"
        >
          <div className="relative">
            <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-primary" />
          </div>
        </Button>
      ) : (
        <Card className="w-[380px] h-[520px] shadow-2xl flex flex-col border-primary/20 bg-card/95 backdrop-blur animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="bg-primary px-4 py-3 rounded-t-lg flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-primary-foreground flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4" />
              Zen Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 p-0 overflow-hidden">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted border border-border rounded-2xl px-4 py-2 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 border-t border-border bg-muted/30">
            <form onSubmit={handleSend} className="flex w-full items-center gap-2">
              <Input
                placeholder="Ask Zen a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-background border-border"
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
