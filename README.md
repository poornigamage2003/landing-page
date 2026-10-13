# FlowDesk — Modern Project Management for Fast Teams

> A clean, responsive, and high-performance SaaS landing page built for **FlowDesk** — an agile project management and sprint orchestration platform engineered for small, fast-moving teams.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

---

## 🔗 Live Demo & Preview

- **Live Demo:** [https://flowdesk-landing-page.vercel.app](https://flowdesk-landing-page.vercel.app) *(Placeholder)*
- **Repository:** [https://github.com/your-username/my-landing-page](https://github.com/your-username/my-landing-page)

---

## 📸 Screenshots

| Desktop View (1280px+) | Mobile View (375px) |
| :---: | :---: |
| ![FlowDesk Desktop Preview](https://placehold.co/1280x720/090d16/6366f1?text=FlowDesk+Desktop+Mockup) | ![FlowDesk Mobile Preview](https://placehold.co/375x812/090d16/6366f1?text=FlowDesk+Mobile+View) |

---

## ⚡ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components, Partial Prerendering)
- **Library:** [React 19](https://react.dev)
- **Language:** [TypeScript 5](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/turbopack`
- **Typography:** [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist Sans & Geist Mono)
- **Icons:** [`lucide-react`](https://lucide.dev) & inline SVG vector graphics
- **Linting:** ESLint 9 (`eslint-config-next`)

---

## 📂 Project Structure

```text
my-landing-page/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Tailwind v4 import, theme tokens, typography, root variables
│   ├── layout.tsx               # Root layout, Geist font configuration, SEO & OpenGraph metadata
│   └── page.tsx                 # Clean page composition importing section components
├── components/
│   ├── ui/                      # Reusable, design-system UI primitives
│   │   ├── Button.tsx           # Primary, secondary, ghost variants with sizes and link support
│   │   ├── Card.tsx             # Rounded-2xl card primitive with elevation & hover presets
│   │   ├── Container.tsx        # Responsive max-width container (sm, md, lg, xl)
│   │   └── SectionHeading.tsx   # Standardized section badge, H2 heading, and description
│   ├── CTA.tsx                  # Final conversion banner with dual action buttons and guarantees
│   ├── FAQ.tsx                  # Interactive accordion component ("use client") with ARIA disclosure
│   ├── Features.tsx             # 6-card feature grid with FeatureCard subcomponents
│   ├── Footer.tsx               # Brand info, operational status pill, 4 link columns, social links
│   ├── Hero.tsx                 # High-impact headline, CTAs, trust badges, and CSS/SVG Kanban mockup
│   ├── HowItWorks.tsx           # 3-step timeline process with milestone indicators
│   ├── LogoCloud.tsx            # Trusted-by social proof with 6 vector brand logos
│   ├── Navbar.tsx               # Sticky blurred navigation with desktop links & mobile drawer ("use client")
│   ├── Pricing.tsx              # 3-tier pricing table with highlighted "Team Pro" recommendation
│   └── Testimonials.tsx         # Verified customer quotes with 5-star ratings and metric proof bar
├── public/                      # Static assets and icons
├── next.config.ts               # Next.js 16 configuration (Turbopack, cache components enabled)
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript path aliases (@/* -> ./*)
└── README.md                    # Project documentation
```

---

## 🎨 Design Decisions

### 1. Color Palette & Aesthetics
- **Primary:** `Indigo-600` (`#4f46e5`) & `Violet-600` (`#7c3aed`) providing a modern tech-forward appearance.
- **Neutrals:** `Slate-900` (`#0f172a`), `Slate-700` (`#334155`), `Slate-500` (`#64748b`), and crisp `Slate-50` (`#f8fafc`) for high contrast and readability.
- **Accents:** Emerald (`#10b981`) for success badges and operational status indicators, Amber (`#f59e0b`) for star ratings.
- **Glassmorphism & Gradients:** Subtle radial gradients and blurred headers (`backdrop-blur-md`) create depth without distracting from the content.

### 2. Typography & Hierarchy
- Built on `Geist Sans` with clear scale differentiation:
  - Hero Display: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight`
  - Section Headings: `text-3xl sm:text-4xl lg:text-5xl font-extrabold`
  - Subheadings & Body: `text-base sm:text-lg text-slate-600`
  - Metadata & Badges: `text-xs font-semibold uppercase tracking-wider`

### 3. Spacing System
- Standardized vertical rhythm across sections (`py-16 sm:py-24 lg:py-28`).
- Content is constrained via `<Container />` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) preventing wide-screen layout stretching.

### 4. Responsive Strategy (Mobile-First)
- **375px (Mobile):** Single column layouts, compact padding, navigation collapsed into an accessible mobile hamburger drawer, touch-friendly tap targets.
- **768px (Tablet):** 2-column feature grids, expanded card heights, adjusted font sizes.
- **1280px+ (Desktop):** Full 3-column grids, interactive Kanban board mockup preview with floating metric pills, expanded navigation links.
- **Zero Horizontal Overflow:** Verified across all screen sizes with `overflow-x: hidden` safeguards.

### 5. Component Approach & Server-First Architecture
- **Next.js 16 Server Components by default:** All static sections (`Hero`, `LogoCloud`, `Features`, `HowItWorks`, `Pricing`, `Testimonials`, `CTA`, `Footer`) are rendered on the server for minimal JavaScript bundle size and fast First Contentful Paint (FCP).
- **Client Boundaries (`"use client"`):** Strictly scoped to interactive elements requiring local browser state:
  - `Navbar.tsx`: Mobile menu drawer toggle and scroll detection.
  - `FAQ.tsx`: Accordion open/collapse states with keyboard and ARIA support.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `18.18+` or `20+`
- npm, pnpm, or yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/your-username/my-landing-page.git
cd my-landing-page

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Start production server
npm run start
```

### Linting
```bash
npm run lint
```

---

## 🚢 Deployment (Vercel)

This application is ready to deploy on **Vercel** with zero extra configuration:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository and select **Next.js** framework preset.
4. Deploy! Turbopack and Cache Components will compile automatically.

---

## 📄 License

Distributed under the MIT License. Built with ❤️ for the FlowDesk internship evaluation.
