"use client";

import { useState } from "react";
import Link from "next/link";

export function SearchBar({
  expanded = false,
  placeholder = "Search articles, authors, topics…",
}: {
  expanded?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border bg-bg-primary px-4 transition-all ${
        focused
          ? "border-brand-primary shadow-[var(--shadow-md)]"
          : "border-border-default"
      } ${expanded ? "w-full max-w-xl" : "w-12 h-11 justify-center md:w-80 md:justify-start"}`}
    >
      <svg
        className="h-5 w-5 shrink-0 text-text-tertiary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        className={`flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none ${
          expanded ? "block" : "hidden md:block"
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {!expanded && (
        <kbd className="hidden md:inline-flex items-center rounded border border-border-default bg-bg-tertiary px-1.5 py-0.5 text-[10px] text-text-tertiary">
          ⌘K
        </kbd>
      )}
    </div>
  );
}

export function SearchBarLink() {
  return (
    <Link
      href="/search"
      className="flex h-11 w-11 items-center justify-center rounded-lg text-text-secondary hover:bg-bg-tertiary transition-colors"
      aria-label="Search"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </Link>
  );
}
