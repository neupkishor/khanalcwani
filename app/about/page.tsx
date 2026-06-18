import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SchemaScript } from "@/components/schema-script";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";

const beliefs = [
  "Strong communication can turn an ordinary idea into a meaningful brand.",
  "Business clarity and creative quality should reinforce each other.",
  "Learning in public builds sharper thinking and better long-term work.",
];

const pageTitle = "About";
const pageDescription =
  "Learn more about Bhawani Khanal, a business graduate, digital marketer, and creative professional based in Kathmandu, working across marketing, branding, communication, and entrepreneurship.";

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <SchemaScript
        schema={buildWebPageSchema({
          title: pageTitle,
          description: pageDescription,
          path: "/about",
        })}
      />
      <PageHero
        eyebrow="About"
        title="A business graduate, digital marketer, and creative professional based in Kathmandu."
        description="My interests sit at the intersection of business, marketing, branding, technology, communication, and entrepreneurship. I care about how businesses work, how people make decisions, and how better communication changes perception."
      />

      <Section
        eyebrow="Background"
        title="Professional experience shaped by communication, campaigns, and brand building."
        description="My work includes marketing strategy, social media communication, campaign planning, content direction, real estate marketing, brand development, business documentation, and creative advertising concepts."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h3 className="font-display text-3xl">Education</h3>
            <p className="mt-4 copy-muted">
              Bachelor of Business Administration under Tribhuvan University, with practical banking experience
              through an internship at Rastriya Banijya Bank, Thamel Branch.
            </p>
          </div>
          <div className="card-surface p-8">
            <h3 className="font-display text-3xl">Current Direction</h3>
            <p className="mt-4 copy-muted">
              Building toward becoming a stronger marketer, business thinker, communicator, and entrepreneur
              while documenting the process along the way.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Belief System"
        title="What I believe about business and creativity."
        description="The best brands do not only look better. They think more clearly, communicate more honestly, and create more trust."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <div key={belief} className="rounded-[2rem] border border-ink/10 bg-white/40 p-8">
              <p className="text-base leading-8 text-ink">{belief}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
