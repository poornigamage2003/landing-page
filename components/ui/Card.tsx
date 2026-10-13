import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "elevated" | "flat" | "bordered";
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const variantStyles: Record<string, string> = {
  default:
    "bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xs",
  elevated:
    "bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-md shadow-slate-900/5 dark:shadow-black/20",
  flat: "bg-slate-50 dark:bg-slate-900/50 border border-transparent",
  bordered:
    "bg-transparent border border-slate-200 dark:border-slate-800",
};

export const Card: React.FC<CardProps> = ({
  hover = false,
  variant = "default",
  children,
  className = "",
  as: Component = "div",
  ...props
}) => {
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 hover:border-indigo-300/80 dark:hover:border-indigo-700/80"
    : "";

  return (
    <Component
      className={`rounded-2xl p-6 sm:p-8 backdrop-blur-xs ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
