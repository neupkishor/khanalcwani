import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { mediaChannels } from "@/lib/site-data";

const videoIdeas = [
  "Why good-looking content is not always good marketing",
  "Three mistakes Nepali businesses make on social media",
  "What I learned this month",
  "The thinking behind a campaign idea",
];

export default function MediaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Media"
        title="Videos, podcast conversations, and newsletter notes."
        description="Media should feel connected to the same personal identity instead of looking like separate projects."
      />

      <Section
        eyebrow="Channels"
        title="One platform, multiple formats."
        description="Video, audio, and written publishing all support the same broader mission: sharing work, learning, and useful ideas."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {mediaChannels.map((channel) => (
            <article key={channel.title} className="card-surface p-8">
              <h3 className="font-display text-3xl">{channel.title}</h3>
              <p className="mt-4 copy-muted">{channel.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Video Directions"
        title="Thoughtful short videos first, polished documentaries later."
        description="The format can start simple while the ideas stay sharp."
        invert
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {videoIdeas.map((idea) => (
            <div key={idea} className="rounded-[2rem] border border-ink/10 bg-white/40 p-6">
              <p className="text-base text-ink">{idea}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
