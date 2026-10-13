import React from "react";

export interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
  titleAs: TitleTag = "h2",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-4 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          {badge}
        </div>
      )}
      <TitleTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
