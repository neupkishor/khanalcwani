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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-4xl space-y-8">
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
      </div>
    </section>
  );
}
