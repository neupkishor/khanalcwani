import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { nowProjects, questions } from "@/lib/site-data";

export default function NowPage() {
  return (
    <main>
      <PageHero
        eyebrow="Now"
        title="What I am currently doing, building, and thinking about."
        description="A live snapshot of current work, open projects, and the ideas shaping my next decisions."
      />

      <Section
        eyebrow="Last Updated"
        title="June 18, 2026"
        description="Focused on digital marketing work, campaign development, content systems, personal publishing, and long-term business direction."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {nowProjects.map((project) => (
            <div key={project.name} className="card-surface p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl">{project.name}</h3>
                <span className="rounded-full border border-bronze/25 px-4 py-2 text-xs uppercase tracking-[0.25em] text-bronze">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Thinking About"
        title="Questions currently occupying my mind."
        description="The Now page is not only for updates. It should also reveal how I think."
        invert
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {questions.map((question) => (
            <div key={question} className="rounded-[2rem] border border-soft/10 bg-soft/5 p-8">
              <p className="text-lg leading-8 text-soft">{question}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
