"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="pt-8 border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground flex flex-col justify-center items-center w-full">
            <Link href="/" className="inline-block mb-2 group">
              <Logo size="md" />
            </Link>
            © 2026 CodeZen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
