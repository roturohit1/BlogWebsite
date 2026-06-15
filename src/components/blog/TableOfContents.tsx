"use client";

import { useEffect, useState } from "react";

const headings = [
  { id: "intro", label: "Introduction" },
  { id: "principles", label: "Core principles" },
  { id: "tokens", label: "Design tokens" },
  { id: "components", label: "Component architecture" },
  { id: "governance", label: "Governance model" },
  { id: "conclusion", label: "Conclusion" },
];

export function TableOfContents() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-4">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border-default">
        {headings.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-1 pl-4 text-sm transition-colors border-l-2 -ml-px ${
                active === id
                  ? "border-brand-primary text-text-primary font-medium"
                  : "border-transparent text-text-tertiary hover:text-text-secondary"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-xl bg-bg-tertiary p-4">
        <p className="text-xs text-text-tertiary">Reading time</p>
        <p className="text-sm font-medium text-text-primary mt-1">12 min · 2,400 words</p>
      </div>
    </nav>
  );
}
