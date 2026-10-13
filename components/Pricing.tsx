import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Check, Sparkles, Shield, ArrowRight } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  period: string;
  highlighted?: boolean;
  ctaText: string;
  ctaVariant: "primary" | "secondary";
  features: string[];
}

export interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 ${
        plan.highlighted
          ? "bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-2xl shadow-indigo-600/15 lg:-translate-y-2 z-10"
          : "bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30">
            <Sparkles className="w-3.5 h-3.5" />
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {plan.name}
          </h3>
        </div>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 min-h-[40px]">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {plan.price}
          </span>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {plan.period}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-7">
          <Button
            variant={plan.ctaVariant}
            size="lg"
            href="#cta"
            icon={plan.highlighted ? <ArrowRight className="w-4 h-4" /> : undefined}
            className={`w-full justify-center ${
              plan.highlighted
                ? "shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/35"
                : ""
            }`}
          >
            {plan.ctaText}
          </Button>
        </div>

        {/* Features divider */}
        <div className="mt-8 pt-7 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            What is included:
          </p>
          <ul className="space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                    plan.highlighted
                      ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center">
        <span className="text-xs text-slate-400 flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" />
          {plan.highlighted ? "14-day free trial • Cancel anytime" : "Instant access"}
        </span>
      </div>
    </div>
  );
};

const PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Great for freelancers, solo founders, and tiny projects.",
    price: "$0",
    period: "forever free",
    ctaText: "Get Started Free",
    ctaVariant: "secondary",
    features: [
      "Up to 5 team members",
      "3 active sprint boards",
      "Basic Kanban & list views",
      "Standard GitHub integration",
      "1 GB file attachment storage",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Team Pro",
    badge: "Most Popular",
    description: "For fast-moving teams who want automated workflows and full visibility.",
    price: "$19",
    period: "per user / month",
    highlighted: true,
    ctaText: "Start 14-Day Free Trial",
    ctaVariant: "primary",
    features: [
      "Unlimited team members",
      "Unlimited sprint boards & backlogs",
      "Real-time live multi-user sync",
      "Advanced automations (10,000 runs/mo)",
      "Two-way GitHub, GitLab & Slack sync",
      "Sprint burndown & velocity analytics",
      "Priority 24/7 support response",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For scaling organizations requiring custom security and governance.",
    price: "$49",
    period: "per user / month",
    ctaText: "Contact Enterprise Sales",
    ctaVariant: "secondary",
    features: [
      "Everything in Team Pro",
      "Unlimited workflow automation runs",
      "SAML 2.0 / Okta / Azure SSO",
      "Granular role & guest permissions",
      "SOC2 compliance audit logs",
      "Dedicated Customer Success Manager",
      "99.99% guaranteed uptime SLA",
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-28 relative">
      <Container>
        <SectionHeading
          badge="Simple Pricing"
          title={
            <>
              Transparent plans that{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                scale with your team
              </span>
            </>
          }
          description="Start with our free 14-day trial. No credit card required. Upgrade, downgrade, or cancel anytime with one click."
        />

        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom Trust Guarantee */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <p>
            Need custom billing terms or non-profit discount?{" "}
            <a href="#cta" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Speak with our team →
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
