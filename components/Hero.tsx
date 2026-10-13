import React from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Layers,
  Clock,
  CheckSquare,
  Users,
  Search,
  Plus,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 h-[600px] w-full max-w-7xl opacity-50 sm:opacity-75 blur-3xl"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-gradient-to-b from-indigo-500/25 via-violet-500/15 to-transparent" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Announcement pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 shadow-xs mb-8 transition-transform hover:scale-[1.02] cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="font-semibold">FlowDesk 2.0</span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span className="flex items-center gap-1">
              Automated sprint management is here <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Where fast teams plan, build, and{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
              ship together.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            FlowDesk is the intuitive project management workspace engineered for small teams.
            Coordinate sprints, automate handoffs, and eliminate busywork without the enterprise bloat.
          </p>

          {/* 2 CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              href="#pricing"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/35"
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#how-it-works"
              icon={<Play className="w-4 h-4 fill-slate-700 dark:fill-slate-300 text-slate-700 dark:text-slate-300" />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Watch 2-Min Demo
            </Button>
          </div>

          {/* Social Proof / Guarantee snippet */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Free tier for up to 5 users</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Setup takes under 2 minutes</span>
            </div>
          </div>

          {/* Product Mockup / Illustration (Built with CSS/SVG) */}
          <div className="relative mt-14 sm:mt-18 w-full max-w-5xl">
            {/* Ambient behind-mockup backlight glow */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-indigo-500/10 blur-2xl -z-10"
              aria-hidden="true"
            />

            {/* App Window Frame */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-indigo-950/10 dark:shadow-black/50 text-left">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Acme Labs</span>
                    <span>/</span>
                    <span className="text-indigo-600 dark:text-indigo-400">Sprint 14 • Core Platform</span>
                  </div>
                </div>

                {/* Mock Search & Action */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="hidden md:flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 text-xs text-slate-400">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search tickets or PRs...</span>
                    <kbd className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-[10px] text-slate-500">⌘K</kbd>
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
                      SJ
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
                      MV
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
                      CL
                    </div>
                  </div>
                  <button className="flex items-center gap-1 rounded-lg bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 hover:bg-indigo-700 transition">
                    <Plus className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">New Task</span>
                  </button>
                </div>
              </div>

              {/* Mock View Switcher */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Kanban Board
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                    Timeline
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                    Burndown
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Sprint ends in 4 days</span>
                  </span>
                </div>
              </div>

              {/* Kanban Columns Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-950/60">
                {/* Column 1: Backlog / To Do */}
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-3 sm:p-3.5">
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      <span>To Do</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 font-medium">
                        3
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {/* Card 1 */}
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 p-3 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                          FD-204
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/50">
                          High
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                        Design checkout page with Stripe Elements
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <CheckSquare className="w-3 h-3" /> 2/5 subtasks
                        </span>
                        <div className="w-5 h-5 rounded-full bg-indigo-500 text-white text-[9px] font-bold flex items-center justify-center">
                          SJ
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 p-3 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                          FD-207
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          Medium
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                        Audit API latency and index queries
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">
                          Backend
                        </span>
                        <div className="w-5 h-5 rounded-full bg-violet-500 text-white text-[9px] font-bold flex items-center justify-center">
                          MV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: In Progress */}
                <div className="rounded-xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/30 dark:bg-indigo-950/20 p-3 sm:p-3.5">
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      <span>In Progress</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/80 text-[10px] text-indigo-600 dark:text-indigo-300 font-semibold">
                        2
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {/* Active In-Progress Card */}
                    <div className="rounded-lg border border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/90 p-3 shadow-xs ring-1 ring-indigo-500/20">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                          FD-199
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200/50">
                          Urgent
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                        Real-time WebSocket sync for team cursors
                      </p>
                      <div className="mt-2.5">
                        <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                          <span>Progress</span>
                          <span className="font-medium text-indigo-600 dark:text-indigo-400">80%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-full rounded-full w-4/5" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                          PR #418 Linked
                        </span>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">
                          CL
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 p-3 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                          FD-212
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                          Sprint Goal
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                        Integrate Slack blocker alerts webhook
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">
                          DevOps
                        </span>
                        <div className="w-5 h-5 rounded-full bg-indigo-500 text-white text-[9px] font-bold flex items-center justify-center">
                          SJ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Completed */}
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-3 sm:p-3.5">
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Done</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        8
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {/* Done Card 1 */}
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/60 p-3 opacity-90">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          FD-191
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          <CheckCircle2 className="w-3 h-3" /> Shipped
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 line-through decoration-slate-400">
                        Setup Tailwind tokens & dark theme
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-[10px] text-slate-400">Merged 3h ago</span>
                        <div className="w-5 h-5 rounded-full bg-slate-400 text-white text-[9px] font-bold flex items-center justify-center">
                          MV
                        </div>
                      </div>
                    </div>

                    {/* Done Card 2 */}
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/60 p-3 opacity-90">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          FD-187
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          <CheckCircle2 className="w-3 h-3" /> Shipped
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 line-through decoration-slate-400">
                        Migrate auth cookies to HttpOnly
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-[10px] text-slate-400">Merged yesterday</span>
                        <div className="w-5 h-5 rounded-full bg-slate-400 text-white text-[9px] font-bold flex items-center justify-center">
                          CL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Pill 1 (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 absolute -bottom-6 -left-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-md animate-bounce-subtle">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  +38% Team Velocity
                  <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-1 rounded">
                    ↑ 12 pts
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">Sprint finished 2 days early</div>
              </div>
            </div>

            {/* Floating Metric Pill 2 (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 absolute -top-6 -right-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Live Sync Active</div>
                <div className="text-[11px] text-slate-500">4 engineers online right now</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
