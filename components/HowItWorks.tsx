import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { FolderGit2, Sparkles, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: <FolderGit2 className="w-6 h-6" />,
    title: "Create spaces & import work",
    description:
      "Get up and running in under 2 minutes. Import existing boards from Jira, Trello, or Notion with 1 click, or pick from our curated agile sprint templates.",
    tag: "Instant Import",
  },
  {
    step: "02",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Collaborate with zero friction",
    description:
      "Assign responsibilities, set sprint milestones, and attach rich specs. Automated git triggers keep ticket statuses updated without manual logging.",
    tag: "Real-time Sync",
  },
  {
    step: "03",
    icon: <Rocket className="w-6 h-6" />,
    title: "Track velocity & ship on time",
    description:
      "Review automated sprint reports and velocity graphs. Spot blockers before they delay milestones and celebrate delivered features together.",
    tag: "Deliver Faster",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <Container>
        <SectionHeading
          badge="Simple Workflow"
          title={
            <>
              From idea to shipped product in{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                three easy steps
              </span>
            </>
          }
          description="We trimmed all the administrative overhead so your engineering and design teams can spend time building what matters."
        />

        <div className="relative mt-14 sm:mt-18">
          {/* Subtle connecting line across cards on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 -translate-y-8 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200 dark:from-indigo-900/40 dark:via-violet-900/40 dark:to-indigo-900/40 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((item, idx) => (
              <Card
                key={item.step}
                hover
                className="relative flex flex-col justify-between bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 shadow-xs">
                      {item.icon}
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-3">
                    {item.tag}
                  </span>

                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="mt-6 hidden lg:flex items-center text-xs font-medium text-slate-400">
                    <span>Next step</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 text-indigo-500" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
