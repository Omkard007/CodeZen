# CodeZen

CodeZen is an all‑in‑one coding platform to learn, practice, compile, and certify skills across multiple programming languages. It combines interactive courses, an in‑browser compiler, AI mentoring, progress tracking, and certificate generation in a single Next.js application.

## Features
- Interactive courses with progress tracking and tests
- Integrated multi-language compiler with file tabs and boilerplates
- AI coding assistant for explanations, debugging, and code generation
- Certificates and profile dashboard
- Modern UI components (Radix UI, shadcn patterns) and Tailwind CSS
- Authentication and route protection with Clerk
- Analytics with Vercel Analytics

## Tech Stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Radix UI primitives
- Clerk for authentication
- React Markdown for course content rendering

## Getting Started

### Prerequisites
- Node.js 18.18+ (recommended Node 20+)
- npm (or pnpm/yarn)

### Installation

```bash
npm install
```

### Environment
Create a `.env` file in the project root and configure Clerk keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

You can obtain these from the Clerk dashboard.

### Development

```bash
npm run dev
```

Visit http://localhost:3000.

### Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure
- app/ — Next.js app router pages and layouts
  - dashboard/ — Main application surfaces (overview, courses, compiler, AI assistant, profile)
  - layout.tsx — Global layout, fonts, analytics, providers
- components/ — UI components, dashboard sidebar, course player, brand assets
- lib/ — Data and utilities (course content and language configs)
- context/ — React context providers (e.g., user context)
- hooks/ — Reusable hooks (e.g., course retrieval)
- public/ — Static assets
- proxy.ts — Clerk middleware and route protection

## Deployment
- Vercel recommended for Next.js applications
- Ensure environment variables are set in your deployment environment (Clerk keys)

