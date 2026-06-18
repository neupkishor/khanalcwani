import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, invert, children }: SectionProps) {
  return (
    <section className={invert ? "bg-charcoal text-soft" : ""}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-3xl space-y-5">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className={invert ? "font-display text-4xl sm:text-5xl" : "section-title"}>{title}</h2>
          {description ? (
            <p className={invert ? "max-w-2xl text-base leading-8 text-stone" : "copy-muted max-w-2xl"}>
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
