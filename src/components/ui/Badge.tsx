import { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-text-accent bg-bg-accent-subtle ${className}`}
    >
      {children}
    </span>
  );
}
