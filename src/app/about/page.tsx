import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { authors } from "@/lib/data";

export const metadata = {
  title: "About — Lumina",
};

const values = [
  {
    title: "Craft over clicks",
    desc: "We optimize for depth, not engagement metrics. Great writing deserves great reading experiences.",
  },
  {
    title: "Writers first",
    desc: "Creators own their audience. Fair revenue share, full export rights, and tools that respect their work.",
  },
  {
    title: "Reader respect",
    desc: "No autoplay, no infinite scroll traps, no dark patterns. Just beautiful content, beautifully presented.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-32 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-text-accent mb-6">
          Our mission
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-text-primary leading-tight tracking-tight">
          Building the future of thoughtful publishing
        </h1>
        <p className="mt-8 text-xl text-text-secondary leading-relaxed">
          Lumina was founded on a simple belief: the web deserves better than the
          attention economy. We&apos;re creating a home for writers who care about craft
          and readers who crave depth.
        </p>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-20">
          <h2 className="font-display text-3xl text-text-primary text-center mb-12">
            What we believe
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border-subtle bg-bg-primary p-8"
              >
                <h3 className="text-lg font-semibold text-text-primary">{value.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 md:py-24 md:px-8 lg:px-20">
        <h2 className="font-display text-3xl text-text-primary text-center mb-12">
          Meet the team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((member) => (
            <div key={member.slug} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl">
                <Image src={member.avatar} alt="" fill className="object-cover" sizes="128px" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">{member.name}</h3>
              <p className="text-sm text-text-tertiary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-inverse py-16 md:py-24 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-display text-3xl text-text-inverse">
            Join our community
          </h2>
          <p className="mt-4 text-text-tertiary">
            Whether you write, read, or both — there&apos;s a place for you here.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/newsletter">
              Subscribe
            </Button>
            <Button variant="secondary" href="#">
              Start Writing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
