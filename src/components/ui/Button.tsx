import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "text";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hover border-transparent",
  secondary:
    "bg-transparent text-text-primary border border-border-default hover:bg-bg-tertiary",
  ghost:
    "bg-transparent text-text-secondary border-transparent hover:bg-bg-tertiary hover:text-text-primary",
  text: "bg-transparent text-text-accent border-transparent hover:underline px-2",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm font-medium",
  lg: "h-[52px] px-8 text-base font-medium",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
