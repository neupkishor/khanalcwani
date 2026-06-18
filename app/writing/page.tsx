import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { libraryShelves, writingHighlights } from "@/lib/site-data";

export default function WritingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Writing"
        title="Articles, notes, reading, and recommendations."
        description="A space for longer essays, short observations, and curated material that shapes the work."
      />

      <Section
        eyebrow="Highlights"
        title="Writing that can grow into an archive."
        description="The goal is consistent publishing without forcing every thought into a formal article."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {writingHighlights.map((entry) => (
            <article key={entry.title} className="card-surface p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-bronze">{entry.type}</p>
              <h3 className="mt-4 font-display text-3xl">{entry.title}</h3>
              <p className="mt-4 copy-muted">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Reading"
        title="A library that shows current influences and future recommendations."
        description="Books are only one part of the input stream. Essays, newsletters, podcasts, reports, and videos belong here too."
        invert
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {libraryShelves.map((shelf) => (
            <article key={shelf.title} className="rounded-[2rem] border border-soft/10 bg-soft/5 p-8">
              <h3 className="font-display text-3xl">{shelf.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone">{shelf.description}</p>
              <div className="mt-6 space-y-3">
                {shelf.items.map((item) => (
                  <p key={item} className="text-sm text-soft">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
