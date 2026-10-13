import React from "react";
import { Container } from "./ui/Container";

const LOGOS = [
  {
    name: "ApexFlow",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 28H10L12 21H18L20 28H26L18 4H12ZM13.5 15.5L15 9.5L16.5 15.5H13.5Z" />
        <text x="32" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.05em">
          APEXFLOW
        </text>
      </svg>
    ),
  },
  {
    name: "CloudScale",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 130 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 20C4 20 2 18 2 16C2 14 3.5 12.3 5.4 12.1C6.2 8.6 9.3 6 13 6C17.2 6 20.7 9.1 21.1 13.2C22.7 13.6 24 15.1 24 17C24 19.2 22.2 21 20 21H6V20Z" />
        <text x="32" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.02em">
          CloudScale
        </text>
      </svg>
    ),
  },
  {
    name: "Synthetix",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 125 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="16" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="12" cy="16" r="3" />
        <text x="28" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.04em">
          SYNTHETIX
        </text>
      </svg>
    ),
  },
  {
    name: "VoxelLabs",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="9" height="9" rx="2" />
        <rect x="15" y="6" width="9" height="9" rx="2" fillOpacity="0.6" />
        <rect x="4" y="17" width="9" height="9" rx="2" fillOpacity="0.6" />
        <rect x="15" y="17" width="9" height="9" rx="2" />
        <text x="30" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.02em">
          VoxelLabs
        </text>
      </svg>
    ),
  },
  {
    name: "HyperLoop",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 125 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22L15 6L21 16L17 22H5Z" />
        <text x="28" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.03em">
          HYPERLOOP
        </text>
      </svg>
    ),
  },
  {
    name: "Lumina",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 115 32" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,4 16,12 24,16 16,20 12,28 8,20 0,16 8,12" />
        <text x="30" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.05em">
          LUMINA
        </text>
      </svg>
    ),
  },
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-y border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <Container>
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Trusted by over 4,200+ engineering & product teams worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 transition-colors duration-200 flex items-center justify-center opacity-75 hover:opacity-100"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LogoCloud;
