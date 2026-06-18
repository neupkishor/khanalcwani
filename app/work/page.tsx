import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { featuredProjects } from "@/lib/site-data";

const caseStudySteps = [
  "Project overview",
  "Business problem",
  "Responsibility",
  "Approach",
  "Creative direction",
  "Final outcome",
  "Results or lessons",
];

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Work"
        title="Marketing strategy, creative campaigns, and business communication."
        description="This section works as a professional portfolio: strategy, content systems, and case-study driven thinking for brands that want stronger positioning and clearer communication."
      />

      <Section
        eyebrow="Selected Areas"
        title="Three ways the work shows up."
        description="The categories are broad enough to grow over time but specific enough to show real value."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="card-surface p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-bronze">{project.category}</p>
              <h3 className="mt-4 font-display text-3xl">{project.title}</h3>
              <p className="mt-4 copy-muted">{project.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Case Study Structure"
        title="A repeatable format for showing thoughtful work."
        description="Every future case study can follow the same structure so the portfolio remains coherent as it grows."
        invert
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudySteps.map((step, index) => (
            <div key={step} className="rounded-[2rem] border border-soft/10 bg-soft/5 p-6">
              <p className="text-sm text-bronze">0{index + 1}</p>
              <p className="mt-3 text-base text-soft">{step}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
