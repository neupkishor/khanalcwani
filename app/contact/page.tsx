import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { socialLinks } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about brands, campaigns, ideas, and meaningful work."
        description="If you are building something that needs stronger communication, clearer positioning, or more thoughtful creative direction, this is the place to start."
      />

      <Section
        eyebrow="Connect"
        title="A direct and simple contact layer."
        description="Replace these placeholders with your preferred contact details and active profile URLs."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">Email</p>
            <p className="mt-4 font-display text-3xl">hello@khanalcwani.com</p>
            <p className="mt-4 copy-muted">
              Best for project enquiries, collaborations, podcast conversations, and professional introductions.
            </p>
          </div>
          <div className="grid gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center justify-between p-6 transition hover:border-bronze/40"
              >
                <div>
                  <p className="font-display text-2xl">{link.label}</p>
                  <p className="mt-2 text-sm leading-7 text-stone">{link.note}</p>
                </div>
                <span className="text-bronze">Visit</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
