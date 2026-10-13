"use client";

import React, { useState } from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "item-1",
    question: "How does FlowDesk compare to Jira, Asana, or Monday?",
    answer:
      "Legacy tools are often overloaded with complex enterprise configurations, slow loading times, and steep learning curves. FlowDesk is purpose-built for fast-moving small teams: it loads instantaneously, automates GitHub/Slack handoffs out of the box, and offers a distraction-free UI so your team spends time shipping instead of managing tickets.",
  },
  {
    id: "item-2",
    question: "Is there a free trial, and do I need a credit card to sign up?",
    answer:
      "Yes! You can explore all Team Pro features completely free for 14 days without entering any credit card information. In addition, our Starter plan is 100% free forever for teams up to 5 members.",
  },
  {
    id: "item-3",
    question: "Can we migrate data from our existing tools easily?",
    answer:
      "Yes. FlowDesk provides one-click migration importers for Trello, Jira, Asana, Linear, and standard CSV files. All your task titles, descriptions, assignees, labels, and file attachments migrate seamlessly in less than 3 minutes.",
  },
  {
    id: "item-4",
    question: "How does the GitHub and Slack integration work?",
    answer:
      "Our integrations are bi-directional and real-time. When a developer opens or merges a Pull Request with a ticket reference (e.g. FD-102), the ticket automatically transitions to In Review or Done. Slack alerts can be configured to alert team channels on blockers or milestone completions.",
  },
  {
    id: "item-5",
    question: "How secure is our company project data?",
    answer:
      "Security is top-priority. All communications are encrypted with TLS 1.3 in transit and AES-256 at rest. FlowDesk is SOC2 Type II certified, fully GDPR compliant, and runs on isolated AWS cloud infrastructure with automated hourly backups.",
  },
  {
    id: "item-6",
    question: "Can I invite external clients or freelance contractors?",
    answer:
      "Yes. You can invite external guests with role-restricted permissions to specific project boards without giving them access to your entire company workspace or billing details.",
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("item-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title={
            <>
              Got questions?{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                We have answers.
              </span>
            </>
          }
          description="Everything you need to know about FlowDesk, billing, migration, and team onboarding."
        />

        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-indigo-300 dark:border-indigo-800 bg-white dark:bg-slate-900 shadow-md shadow-indigo-500/5 ring-1 ring-indigo-500/10"
                    : "border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
                >
                  <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-6 pb-6 sm:px-7 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 mt-1"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support helper */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>Have a question not listed here?</span>
            <a
              href="#cta"
              className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Contact our product team
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
