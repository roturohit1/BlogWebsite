"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { SearchBarLink } from "@/components/ui/SearchBar";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/blog?category=design", label: "Categories" },
  { href: "/author/sarah-chen", label: "Authors" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 navbar-glass border-b transition-all ${
          scrolled ? "border-border-default shadow-[var(--shadow-sm)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 md:px-8 lg:px-20">
          <Link
            href="/"
            className="font-display text-2xl text-text-primary tracking-tight"
          >
            Lumina
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <SearchBarLink />
            <Button variant="ghost" size="sm" href="/newsletter">
              Subscribe
            </Button>
            <Button variant="primary" size="sm" href="#">
              Start Writing
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <SearchBarLink />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-bg-tertiary"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-primary md:hidden">
          <div className="flex h-[72px] items-center justify-between px-4">
            <Link href="/" className="font-display text-2xl" onClick={() => setMobileOpen(false)}>
              Lumina
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-bg-tertiary"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-8 px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Button variant="primary" href="/newsletter">
                Subscribe
              </Button>
              <Button variant="secondary" href="#">
                Start Writing
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
