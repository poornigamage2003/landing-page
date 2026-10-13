import React from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-16 sm:py-24 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 border border-indigo-700/40 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl shadow-indigo-950/40">
          {/* Ambient decorative glow circles */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              <span>Get Started in 2 Minutes</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to eliminate project chaos and ship 2x faster?
            </h2>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-indigo-100/80 leading-relaxed max-w-2xl">
              Join over 4,200 product teams, startup founders, and engineering leads who rely on FlowDesk
              every day to hit their roadmap goals without friction.
            </p>

            {/* Action Row */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#pricing"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-indigo-900 hover:text-indigo-950 font-bold shadow-lg shadow-black/20"
              >
                Start Your 14-Day Free Trial
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#faq"
                className="w-full sm:w-auto text-white hover:text-white hover:bg-white/10 border border-white/20"
              >
                Schedule Team Demo
              </Button>
            </div>

            {/* Guarantees */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-indigo-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant 1-click migration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
