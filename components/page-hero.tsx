import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="grain overflow-hidden bg-[linear-gradient(180deg,#e7dfd2_0%,#f1ebdf_55%,#f5f1e8_100%)] text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-32">
        <div className="space-y-8">
          <p className="eyebrow">{eyebrow}</p>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">{description}</p>
          </div>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-bronze px-6 py-3 text-sm font-medium text-soft transition hover:bg-soft hover:text-charcoal"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition hover:border-ink/30 hover:bg-ink/5"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
        <div className="card-surface border-white/50 bg-white/45 p-8 shadow-aura">
          <p className="text-sm uppercase tracking-[0.3em] text-bronze">Brand Feeling</p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-display text-3xl">Kathmandu business ambition</p>
              <p className="mt-2 text-sm leading-7 text-ink/65">
                Business thinking, grounded professionalism, and long-horizon career building.
              </p>
            </div>
            <div>
              <p className="font-display text-3xl">Modern editorial creativity</p>
              <p className="mt-2 text-sm leading-7 text-ink/65">
                Cinematic contrast, refined typography, and a platform that evolves with the work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
