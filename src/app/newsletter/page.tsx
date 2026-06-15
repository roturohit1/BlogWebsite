import Image from "next/image";
import { NewsletterCard } from "@/components/cards/NewsletterCard";

export const metadata = {
  title: "Newsletter — Lumina",
};

const faqs = [
  {
    q: "How often will I receive emails?",
    a: "Once a week, every Tuesday morning. We respect your inbox.",
  },
  {
    q: "Can I unsubscribe anytime?",
    a: "Absolutely. One click at the bottom of every email. No questions asked.",
  },
  {
    q: "What kind of content is included?",
    a: "Curated long-form articles, author spotlights, and exclusive essays not published on the site.",
  },
  {
    q: "Is my email shared with third parties?",
    a: "Never. Your email stays with us, period.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-text-accent mb-4">
              Newsletter
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-text-primary leading-tight tracking-tight">
              The best ideas in your inbox
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Join 50,000+ readers who start their week with thoughtful writing,
              curated by our editors.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Weekly digest of top stories",
                "Curated picks from our editors",
                "No spam, ever — unsubscribe anytime",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bg-accent-subtle text-text-accent text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <NewsletterCard variant="sidebar" />
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-bg-tertiary">
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=750&fit=crop"
              alt="Newsletter preview on a phone"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 md:px-8 text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-text-primary italic leading-snug">
            &ldquo;The only newsletter I actually open every week. Consistently great writing.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-text-tertiary">— Maria Santos, Product Designer</p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-3xl text-text-primary text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border-subtle p-6"
            >
              <summary className="cursor-pointer text-sm font-medium text-text-primary list-none flex justify-between items-center">
                {faq.q}
                <span className="text-text-tertiary group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
