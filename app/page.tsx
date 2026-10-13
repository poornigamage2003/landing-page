import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
