import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

const beliefs = [
  "Strong communication can turn an ordinary idea into a meaningful brand.",
  "Business clarity and creative quality should reinforce each other.",
  "Learning in public builds sharper thinking and better long-term work.",
];

export default function AboutPage() {
  return (
    <main>
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
        invert
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <div key={belief} className="rounded-[2rem] border border-soft/10 bg-soft/5 p-8">
              <p className="text-base leading-8 text-soft">{belief}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
