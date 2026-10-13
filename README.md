# FlowDesk — Modern Project Management for Fast Teams

> A clean, modern, fully responsive SaaS landing page built for **FlowDesk** — an agile project management and sprint orchestration workspace engineered for small, fast-moving teams.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

---

## 🔗 Live Demo

- **Production URL:** <PASTE_NEW_VERCEL_URL_HERE>
- **GitHub Repository:** [https://github.com/poornigamage2003/landing-page](https://github.com/poornigamage2003/landing-page)

---

## 📸 Screenshots

| Desktop View (1280px+) | Tablet View (768px) | Mobile View (375px) |
| :---: | :---: | :---: |
| <img src="/public/screenshots/desktop.png" width="400" alt="Desktop View"> | <img src="/public/screenshots/tablet.png" width="250" alt="Tablet View"> | <img src="/public/screenshots/mobile.png" width="180" alt="Mobile View"> |
| *Full 3-col Kanban mockup, metrics, 6-col logo cloud, expanded nav* | *Collapsed clean navigation, 2-col grids, responsive cards* | *Single-column stack, mobile hamburger drawer, touch-friendly CTAs* |

## 📱 Responsive Behavior

The landing page is engineered mobile-first using Tailwind CSS breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) to guarantee zero horizontal overflow and optimal ergonomic layout across all devices:

### 1. Mobile Viewport (375px)
- **Navigation:** Collapses full navigation into an accessible sticky header with an interactive hamburger toggle button and a quick "Try Free" CTA. Clicking the hamburger opens a full-screen blurred drawer with all navigation links and dual action buttons. Background scrolling is prevented while the drawer is open.
- **Hero & Mockup:** Typography scales to `text-4xl`, action buttons stack vertically full-width (`flex-col w-full`), and trust indicators align centrally. The Kanban board product mockup stacks columns vertically (`grid-cols-1`) so cards remain legible and easily scrollable. Floating metric pills are hidden to preserve screen real estate.
- **Grids:** All feature cards, how-it-works steps, pricing tiers, and testimonials render in single-column layouts (`grid-cols-1`).
- **Footer:** Links display in a 2-column mobile grid with centered copyright and social icons.

### 2. Tablet Viewport (768px)
- **Navigation:** Retains the compact header with the mobile drawer to avoid text crowding between logo, 5 navigation links, and 2 action buttons.
- **Hero:** Action buttons transition to horizontal inline placement (`sm:flex-row`). Product mockup displays the macOS header bar with active project breadcrumbs.
- **Grids:**
  - **Features:** Expands to a balanced 2-column grid (`md:grid-cols-2`).
  - **How It Works:** Connects steps in 3 responsive columns (`md:grid-cols-3`).
  - **Pricing:** Renders clean, full-width tiered cards with comfortable padding.
  - **Testimonials & Metrics:** Testimonials span responsive cards with a 2-column key metric counter bar (`grid-cols-2`).
- **Logo Cloud:** Expands to a 3-column logo grid (`sm:grid-cols-3`).

### 3. Desktop Viewport (1280px+)
- **Navigation:** Displays the full desktop navigation links with hover highlight states, plus both "Sign In" (ghost) and "Get Started Free" (primary) action buttons.
- **Hero:** Maximum display typography (`text-6xl font-extrabold`). The interactive Kanban board mockup expands to a 3-column board (To Do, In Progress, Done) with subtask counters, priority tags, assignee avatars, and 2 floating glassmorphic metric pills ("+38% Team Velocity" and "Live Sync Active").
- **Grids:**
  - **Features:** Expands to a 3-column grid (`lg:grid-cols-3`).
  - **Logo Cloud:** Full 6-brand inline vector logo cloud (`lg:grid-cols-6`).
  - **Pricing:** 3-column side-by-side comparison with the middle "Team Pro" card elevated (`-translate-y-2`) with an indigo border glow and "Most Popular" badge.
  - **Testimonials & Metrics:** 3-column cards and 4-column metric bar (`lg:grid-cols-4`).
- **Footer:** Expands to a 6-column layout with company mission, 4 category link columns, and system status indicator.

---

## ⚡ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components, Partial Prerendering)
- **Library:** [React 19](https://react.dev)
- **Language:** [TypeScript 5](https://www.typescriptlang.org) (Strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/turbopack`)
- **Typography:** [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist Sans & Geist Mono)
- **Icons:** [`lucide-react`](https://lucide.dev) & inline SVGs
- **Linting:** ESLint 9 (`eslint-config-next`)

---

## 📂 Project Structure

```text
my-landing-page/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Tailwind v4 import, theme tokens, root variables, animation keyframes
│   ├── layout.tsx               # Root layout, Geist font configuration, SEO & Open Graph metadata
│   └── page.tsx                 # Clean page composition importing section components
├── components/
│   ├── ui/                      # Reusable UI primitives
│   │   ├── Button.tsx           # Button primitive (primary, secondary, ghost variants; sm, md, lg)
│   │   ├── Card.tsx             # Standard rounded-2xl card with elevation and hover variants
│   │   ├── Container.tsx        # Standard max-width container with responsive horizontal padding
│   │   └── SectionHeading.tsx   # Reusable section heading with animated badge, h2, and description
│   ├── CTA.tsx                  # Final conversion banner with dual action buttons and guarantees
│   ├── FAQ.tsx                  # Interactive accordion component ("use client") with ARIA disclosure
│   ├── Features.tsx             # 6-card feature grid with FeatureCard subcomponents
│   ├── Footer.tsx               # Brand info, operational status pill, 4 link columns, social icons
│   ├── Hero.tsx                 # High-impact headline, CTAs, trust badges, and CSS/SVG Kanban mockup
│   ├── HowItWorks.tsx           # 3-step timeline process with milestone indicators
│   ├── LogoCloud.tsx            # Trusted-by social proof with 6 vector brand logos
│   ├── Navbar.tsx               # Sticky blurred navigation with desktop links & mobile drawer ("use client")
│   ├── Pricing.tsx              # 3-tier pricing table with highlighted "Team Pro" recommendation
│   └── Testimonials.tsx         # Verified customer quotes with 5-star ratings and metric proof bar
├── public/
│   ├── screenshots/
│   │   └── .gitkeep             # Screenshots directory placeholder
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Design Decisions

### 1. Color System
- **Brand Primary:** Indigo-600 (`#4f46e5`) & Violet-600 (`#7c3aed`), establishing an energetic, modern SaaS feel.
- **Brand Accent:** Violet (`#7c3aed`) for gradients and badge highlights.
- **Neutrals:** Slate-900 (`#0f172a`), Slate-700 (`#334155`), Slate-500 (`#64748b`), and Slate-50 (`#f8fafc`) for crisp readability and high contrast.
- **Feedback & Status:** Emerald-500 (`#10b981`) for uptime and positive metrics, Amber-400 (`#f59e0b`) for star ratings, Rose-500 (`#f43f5e`) for priority badges.
- **Design Tokens:** Declared in `globals.css` via `@theme inline` and custom properties (`--primary`, `--accent`, `--neutral-*`).

### 2. Typography & Hierarchy
- Powered by `Geist Sans` & `Geist Mono` (via `next/font/google` in `app/layout.tsx`) with clear visual hierarchy:
  - Hero Display: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight`
  - Section Headings: `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight`
  - Subheadings & Body: `text-base sm:text-lg text-slate-600 dark:text-slate-400`
  - Badges & Pills: `text-xs font-semibold uppercase tracking-wider`

### 3. Spacing System
- Section padding standardized to `py-16 sm:py-24 lg:py-28`.
- Consistent content constraints through `<Container />` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Generous card padding (`p-6 sm:p-8`) with `rounded-2xl` borders.

### 4. Component Approach & Server-First Architecture
- **Server Components by default:** All static marketing content (`Hero`, `LogoCloud`, `Features`, `HowItWorks`, `Pricing`, `Testimonials`, `CTA`, `Footer`) renders on the server for minimal client bundle size and instantaneous initial paint.
- **Client Boundaries (`"use client"`):** Restricted strictly to components with browser interaction:
  - `Navbar.tsx`: Mobile drawer toggle state, scroll detection, and keyboard navigation.
  - `FAQ.tsx`: Accordion open/collapse states with ARIA attributes.
- **Clean Composition in `page.tsx`:** `app/page.tsx` contains no inline layout clutter; it strictly composes the section components.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js `18.18+` or `20+`
- npm, pnpm, or yarn

### Installation & Development
```bash
# 1. Clone repository
git clone https://github.com/poornigamage2003/landing-page.git
cd landing-page

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Linting
```bash
# Run lint check
npm run lint

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🚢 Deployment Notes (Vercel)

This project is optimized for deployment on the **Vercel** platform:

1. Connect the repository to your Vercel account.
2. Framework preset: **Next.js**.
3. Build command: `npm run build` (Turbopack builds will compile automatically).
4. Output directory: `.next`.
5. Ensure domain <PASTE_NEW_VERCEL_URL_HERE> is assigned under Project Settings > Domains.

---

## 📄 License

Distributed under the MIT License. Built for the FlowDesk internship evaluation task.
