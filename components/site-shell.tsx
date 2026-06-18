"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { navItems, socialLinks } from "@/lib/site-data";

function SocialIcon({ label }: { label: string }) {
  const commonProps = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (label) {
    case "LinkedIn":
      return (
        <svg {...commonProps}>
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.96c0 1.07.87 1.94 1.95 1.94 1.07 0 1.95-.87 1.95-1.94C7.2 3.88 6.32 3 5.25 3Zm6.87 5.5H8.88V20h3.24v-5.7c0-1.5.28-2.96 2.13-2.96 1.82 0 1.84 1.7 1.84 3.05V20h3.25v-6.26c0-3.08-.66-5.44-4.26-5.44-1.73 0-2.9.95-3.37 1.85h-.05V8.5Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...commonProps}>
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...commonProps}>
          <path d="M13.5 21v-7.2h2.43l.37-2.8H13.5V9.2c0-.81.23-1.35 1.39-1.35h1.49V5.34c-.26-.03-1.15-.11-2.18-.11-2.16 0-3.64 1.31-3.64 3.73v2.04H8.1v2.8h2.46V21h2.94Z" />
        </svg>
      );
    case "X":
      return (
        <svg {...commonProps}>
          <path d="M18.9 3H21l-4.6 5.26L21.8 21h-4.24l-3.32-4.35L10.42 21H8.31l4.92-5.63L2.8 3h4.35l3 3.98L18.9 3Zm-.74 16.74h1.17L7.52 4.2H6.27l11.9 15.54Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...commonProps}>
          <path d="M14.93 3c.2 1.68 1.14 3.04 2.58 3.88.9.52 1.92.8 2.99.8v2.91a8.05 8.05 0 0 1-2.9-.53v5.42A5.49 5.49 0 1 1 12.1 10.1v3.02a2.58 2.58 0 1 0 2.58 2.58V3h.25Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="sticky top-0 z-50 border-b border-stone/15 bg-[#f3ede4]/92 shadow-[0_18px_48px_rgba(17,24,39,0.12)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="font-display text-2xl font-bold text-ink">
            Bhawani Khanal
          </Link>
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/40 text-ink transition hover:border-bronze/40 hover:text-bronze lg:hidden"
          >
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <nav className="hidden items-center gap-6 text-sm text-stone lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden rounded-full border border-bronze/30 bg-bronze px-4 py-2 text-sm font-medium text-soft transition hover:bg-ink lg:inline-flex"
          >
            Let&apos;s connect
          </Link>
        </div>
      </header>
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink/35 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`mobile-menu-panel absolute inset-x-0 top-0 flex min-h-screen flex-col bg-[linear-gradient(180deg,#f1eadf_0%,#ece2d2_100%)] px-6 pb-10 pt-28 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-1 flex-col justify-between gap-10">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[1.5rem] border border-ink/10 bg-white/35 px-5 py-4 font-display text-3xl text-ink transition hover:border-bronze/40 hover:text-bronze"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-bronze/30 bg-bronze px-6 py-3 text-sm font-medium text-soft transition hover:bg-ink"
              >
                Let&apos;s connect
              </Link>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/30 text-ink/80 transition hover:border-bronze/50 hover:text-bronze"
                  >
                    <SocialIcon label={link.label} />
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {children}
      <footer className="bg-ink text-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:px-10">
          <div className="space-y-4">
            <p className="eyebrow">khanalcwani.com</p>
            <h2 className="font-display text-4xl">Kathmandu ambition, editorial clarity, long-term work.</h2>
            <p className="max-w-2xl text-sm leading-7 text-soft/70">
              A personal platform for business thinking, marketing projects, creative direction, learning in
              public, and the process of building meaningful brands in Nepal.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-soft/12 bg-soft/5 text-soft/75 transition hover:border-bronze/50 hover:text-bronze"
                >
                  <SocialIcon label={link.label} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-soft/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-soft">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
