import Link from "next/link";
import type { ReactNode } from "react";

import { navItems } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="sticky top-0 z-50 border-b border-stone/10 bg-ivory/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="font-display text-2xl text-ink">
            Bhawani Khanal
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-stone lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-bronze/30 bg-bronze px-4 py-2 text-sm font-medium text-soft transition hover:bg-ink"
          >
            Let&apos;s connect
          </Link>
        </div>
      </header>
      {children}
      <footer className="bg-charcoal text-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:px-10">
          <div className="space-y-4">
            <p className="eyebrow">khanalcwani.com</p>
            <h2 className="font-display text-4xl">Kathmandu ambition, editorial clarity, long-term work.</h2>
            <p className="max-w-2xl text-sm leading-7 text-stone">
              A personal platform for business thinking, marketing projects, creative direction, learning in
              public, and the process of building meaningful brands in Nepal.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-stone">
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
