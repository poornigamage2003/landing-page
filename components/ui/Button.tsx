import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 shadow-sm shadow-indigo-600/25 hover:shadow-md hover:shadow-indigo-600/35 border border-transparent focus-visible:ring-indigo-500",
  secondary:
    "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs focus-visible:ring-indigo-500",
  ghost:
    "bg-transparent text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 border border-transparent focus-visible:ring-indigo-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs font-medium px-3.5 py-1.5 rounded-lg gap-1.5",
  md: "text-sm font-semibold px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base font-semibold px-6 py-3.5 rounded-xl gap-2.5",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
