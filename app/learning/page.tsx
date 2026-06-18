import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { learningTracks } from "@/lib/site-data";

export default function LearningPage() {
  return (
    <main>
      <PageHero
        eyebrow="Learning"
        title="What I am learning and why it matters."
        description="This page is organized by disciplines instead of random resources, so the learning process feels intentional and usable."
      />

      <Section
        eyebrow="Learning Tracks"
        title="Business, marketing, communication, and creative direction."
        description="Each track can later expand with resources, notes, takeaways, and examples of how the ideas are applied in work."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {learningTracks.map((track) => (
            <article key={track.title} className="card-surface p-8">
              <h3 className="font-display text-3xl">{track.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {track.topics.map((topic) => (
                  <span key={topic} className="rounded-full border border-stone/20 px-4 py-2 text-sm text-ink">
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
