"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            aria-label="FlowDesk Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6C4 4.89543 4.89543 4 6 4H10C11.1046 4 12 4.89543 12 6V10C12 11.1046 11.1046 12 10 12H6C4.89543 12 4 11.1046 4 10V6Z"
                  fill="white"
                />
                <path
                  d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H16C14.8954 10 14 9.10457 14 8V6Z"
                  fill="white"
                  fillOpacity="0.75"
                />
                <path
                  d="M4 16C4 14.8954 4.89543 14 6 14H8C9.10457 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V16Z"
                  fill="white"
                  fillOpacity="0.75"
                />
                <path
                  d="M12 16C12 14.8954 12.8954 14 14 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H14C12.8954 20 12 19.1046 12 18V16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Flow<span className="text-indigo-600 dark:text-indigo-400">Desk</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                v2.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="#pricing">
              Sign In
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#cta"
              icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              href="#cta"
              className="px-3 py-1.5 text-xs"
            >
              Try Free
            </Button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer/Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-18 bottom-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden overflow-y-auto border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Navigation Menu</span>
            <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Fast Setup
            </span>
          </div>

          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <Button
              variant="secondary"
              size="lg"
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="w-full justify-center"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              size="lg"
              href="#cta"
              onClick={() => setIsMenuOpen(false)}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full justify-center shadow-lg shadow-indigo-600/25"
            >
              Get Started Free
            </Button>
            <p className="text-center text-xs text-slate-500 mt-2">
              No credit card required • 14-day full-access trial
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
