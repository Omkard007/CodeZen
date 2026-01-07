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

### Core Application (`app/`)
- **`layout.tsx`** - Global layout wrapper with Clerk authentication, theme provider, and analytics
- **`page.tsx`** - Landing page with hero section and navigation
- **`globals.css`** - Global styles and Tailwind CSS configuration
- **`courses/`** - Course-related pages
  - **`page.tsx`** - Courses listing page with filtering and search
  - **`[id]/`** - Dynamic course detail pages
- **`compiler/`** - In-browser code compiler interface
- **`api/`** - API routes for backend functionality

### UI Components (`components/`)
- **`ui/`** - Reusable UI components (shadcn/ui components)
  - `button.tsx`, `card.tsx`, `input.tsx`, `tabs.tsx` - Basic UI primitives
  - `sidebar.tsx` - Main navigation sidebar component
  - `sheet.tsx`, `dialog.tsx` - Modal and overlay components
  - `select.tsx`, `radio-group.tsx` - Form controls
- **`landing/`** - Landing page specific components
  - `hero.tsx` - Main hero section with call-to-action
  - `features-grid.tsx` - Feature highlights grid
  - `navbar.tsx` - Navigation header
  - `pricing-section.tsx` - Pricing plans display
  - `footer.tsx` - Footer component
- **`course-player.tsx`** - Interactive course content viewer with video, notes, and progress tracking
- **`ai-assistant.tsx`** - AI coding assistant interface with Google Gemini integration
- **`certificate.tsx`** - Certificate generation and display component
- **`provider.tsx`** - React context provider wrapper
- **`theme-provider.tsx`** - Theme switching functionality
- **`brand/`** - Brand-specific components and assets

### Data & Configuration (`lib/`)
- **`data.ts`** - Course content database with 10 programming languages
  - Course metadata, lessons, test questions
  - MDX content for course notes
  - Interfaces for `Course`, `Lesson`, `TestQuestion`
- **`languages.ts`** - Multi-language compiler configuration
  - Support for 10+ languages (Python, JavaScript, C, C++, Java, C#, Go, Ruby, PHP, Rust)
  - Language icons, boilerplate code, and compiler settings
- **`utils.ts`** - Utility functions and helpers
- **`downloadPDF.ts`** - PDF generation functionality for certificates

### Custom Hooks (`hooks/`)
- **`use-courses.ts`** - Course data fetching and management
- **`use-store.ts`** - Global state management with Zustand
- **`use-mobile.ts`** - Mobile device detection and responsive utilities

### Configuration Files
- **`package.json`** - Dependencies and scripts (Next.js 16, React 19, TypeScript)
- **`tsconfig.json`** - TypeScript configuration
- **`next.config.mjs`** - Next.js build configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`components.json`** - shadcn/ui component configuration
- **`proxy.ts`** - Clerk authentication middleware and route protection
- **`.env`** - Environment variables (Clerk keys, API keys)

### Key Dependencies
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **UI Components**: Radix UI primitives, shadcn/ui, Lucide icons
- **Authentication**: Clerk for user management and route protection
- **AI Integration**: Google Gemini for AI coding assistant
- **Content Rendering**: React Markdown with syntax highlighting
- **State Management**: Zustand for global state
- **Analytics**: Vercel Analytics
- **PDF Generation**: jsPDF, html-to-image, html2canvas

### Static Assets (`public/`)
- Images, icons, and static files
- Course thumbnails and brand assets

## Deployment
- Vercel recommended for Next.js applications
- Ensure environment variables are set in your deployment environment (Clerk keys)

