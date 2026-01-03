import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { UserProvider } from "@/context/user-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "CodeZen - Learn. Code. Compile. Certify.",
  description:
    "The all-in-one platform to master 10+ programming languages with interactive courses, integrated compilers, AI mentoring, and verified certificates.",
  generator: "v0.app",
  keywords: [
    "coding platform",
    "learn programming",
    "online compiler",
    "coding courses",
    "programming certificates",
    "AI coding mentor",
    "Python courses",
    "JavaScript courses",
    "coding tutorials",
  ],
  authors: [{ name: "CodeZen Team" }],
  creator: "CodeZen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codezen.com",
    title: "CodeZen - Learn. Code. Compile. Certify.",
    description: "Master programming with interactive courses, AI mentoring, and verified certificates.",
    siteName: "CodeZen",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeZen - Learn. Code. Compile. Certify.",
    description: "Master programming with interactive courses, AI mentoring, and verified certificates.",
    creator: "@codezen",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <UserProvider>{children}</UserProvider>
        <Analytics />
      </body>
    </html>
  )
}
