import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I started my Cookie Jar.",
  description:
    "A personal reflection on growth, consistency, building from scratch, and using this website as a living record of the journey.",
};

const articleParagraphs = [
  "I started my Cookie Jar.",
  "I am now thinking that every person should have a cookie jar. A collection of experiences, lessons, achievements, failures, and moments that has shaped who we have become.",
  "This website is one of my personal cookie jars.",
  "Every project I build, every skill I learn, every challenge I overcome, and every idea I explore becomes part of this journey.",
  "I do not believe growth happens overnight. Quite a lot of times, I think about this and get frustrated, but it still does not happen overnight, and we have to accept that. It is built through small, consistent actions repeated over time.",
  "I am someone who enjoys building things from scratch. Maybe that is when I am happiest. Sometimes I even get angry thinking about how much work it takes, but I still return to building. I also love solving problems, learning continuously, and documenting the process along the way, and now I am doing the same here.",
  "I may not know everything today, but I believe in becoming a little better every single day.",
  "I want my cookie jar to never be full. It should grow with every experience, every lesson, every success, and every mistake.",
  "This website exists to capture that journey. If you are interested in following along, stay connected with me through my social media or through this website.",
];

export default function CookieJarArticlePage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="grain overflow-hidden bg-[linear-gradient(180deg,#e7dfd2_0%,#f1ebdf_55%,#f5f1e8_100%)]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="eyebrow">Article</p>
            <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              I started my Cookie Jar.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              A personal note on growth, frustration, building from scratch, and why this website exists as
              a living record of the journey.
            </p>
            <Link
              href="/writing"
              className="inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition hover:border-ink/30 hover:bg-ink/5"
            >
              Back to Writing
            </Link>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-stone/20 bg-soft/70">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/assets/uploads/starting-my-cookies-jar-aigenerate-animestyle.png"
                alt="Illustration for the article I started my Cookie Jar."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <article className="mx-auto mt-12 max-w-3xl space-y-7 text-base leading-8 text-ink/85 sm:text-lg">
            {articleParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
