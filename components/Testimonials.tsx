import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Star, Quote, CheckCircle } from "lucide-react";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
}

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card
      hover
      className="flex flex-col justify-between h-full bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 p-8 shadow-sm"
    >
      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-indigo-200 dark:text-indigo-900/60" />
        </div>

        {/* Quote text */}
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3.5">
        <div
          className={`w-11 h-11 rounded-full ${testimonial.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-sm">
            <span>{testimonial.author}</span>
            <CheckCircle className="w-3.5 h-3.5 text-indigo-500 fill-indigo-100 dark:fill-indigo-950" />
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role} • <span className="font-semibold text-slate-700 dark:text-slate-300">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sarah",
    quote:
      "FlowDesk replaced three separate tools we were struggling to sync. Our sprint delivery cycle dropped from 3 weeks to 9 days, and the engineers actually enjoy updating their tickets.",
    author: "Sarah Jenkins",
    role: "VP of Product",
    company: "NovaScale",
    avatarBg: "bg-gradient-to-tr from-indigo-500 to-indigo-700",
    initials: "SJ",
  },
  {
    id: "marcus",
    quote:
      "The GitHub integration and instant velocity calculations give our dev team unmatched visibility. No sluggish loading times, no bloated menus—just pure developer focus.",
    author: "Marcus Vance",
    role: "Head of Engineering",
    company: "StackPulse",
    avatarBg: "bg-gradient-to-tr from-violet-500 to-purple-700",
    initials: "MV",
  },
  {
    id: "chloe",
    quote:
      "As a remote design team across 5 time zones, FlowDesk is our single source of truth. The interface is clean, modern, and intuitive. It sets the gold standard for project management.",
    author: "Chloe Laurent",
    role: "Design Director",
    company: "StudioCraft",
    avatarBg: "bg-gradient-to-tr from-emerald-500 to-teal-700",
    initials: "CL",
  },
];

const METRICS = [
  { value: "40%", label: "Faster Sprint Delivery" },
  { value: "4,200+", label: "Teams Worldwide" },
  { value: "99.8%", label: "Customer Satisfaction" },
  { value: "15M+", label: "Tasks Shipped on Time" },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 lg:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <Container>
        <SectionHeading
          badge="Customer Stories"
          title={
            <>
              Loved by high-velocity{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                builders and teams
              </span>
            </>
          }
          description="Discover how modern product, design, and engineering teams build better software faster with FlowDesk."
        />

        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Metrics Proof Bar */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {METRICS.map((metric, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
