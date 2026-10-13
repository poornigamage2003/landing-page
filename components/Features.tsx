import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import {
  Users2,
  Kanban,
  Zap,
  Target,
  GitPullRequest,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <Card
      hover
      className="group relative flex flex-col justify-between h-full border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 hover:border-indigo-300 dark:hover:border-indigo-800"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
            {feature.icon}
          </div>
          {feature.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
              {feature.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {feature.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {feature.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
        <span>Explore capability</span>
        <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Card>
  );
};

const FEATURES: FeatureItem[] = [
  {
    id: "collaboration",
    icon: <Users2 className="w-6 h-6" />,
    title: "Real-Time Collaboration",
    description:
      "Work simultaneously without stepping on toes. Live multi-cursor boards, instant presence indicators, and inline threads keep discussions contextual.",
    badge: "Live Sync",
  },
  {
    id: "sprints",
    icon: <Kanban className="w-6 h-6" />,
    title: "Visual Sprint Management",
    description:
      "Drag-and-drop Kanban and timeline views. Estimate story points, manage backlog hygiene, and view automatic velocity burndown charts.",
  },
  {
    id: "automations",
    icon: <Zap className="w-6 h-6" />,
    title: "Zero-Code Automations",
    description:
      "Automate repetitive handoffs in seconds. Auto-assign PR reviews, update ticket states upon GitHub merge, and trigger Slack notifications on blockers.",
    badge: "Popular",
  },
  {
    id: "milestones",
    icon: <Target className="w-6 h-6" />,
    title: "Roadmaps & Milestones",
    description:
      "Connect daily engineering commits to quarterly business outcomes. Visual Gantt charts and dependency alerts keep stakeholders synchronized.",
  },
  {
    id: "integrations",
    icon: <GitPullRequest className="w-6 h-6" />,
    title: "Deep Ecosystem Sync",
    description:
      "Bi-directional integrations with GitHub, GitLab, Slack, Figma, and Google Workspace. Never copy-paste status updates between apps again.",
  },
  {
    id: "security",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description:
      "Built with SOC2 Type II compliance, TLS 1.3 encryption in transit, AES-256 at rest, SSO/SAML support, and granular role-based permissions.",
    badge: "SOC2",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Core Features"
          title={
            <>
              Engineered for speed,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                crafted for focus.
              </span>
            </>
          }
          description="Everything small teams need to ship high-quality products on schedule. Zero clutter, instant interactions, and effortless team alignment."
        />

        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
