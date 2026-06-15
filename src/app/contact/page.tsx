import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact — Lumina",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16 lg:px-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Have a question, partnership idea, or just want to say hello? We&apos;d love
            to hear from you.
          </p>

          <form className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full h-12 rounded-lg border border-border-default bg-bg-primary px-4 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full h-12 rounded-lg border border-border-default bg-bg-primary px-4 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full h-12 rounded-lg border border-border-default bg-bg-primary px-4 text-sm text-text-secondary outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <option>General inquiry</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Support</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                placeholder="How can we help?"
              />
            </div>
            <Button variant="primary" type="submit">
              Send message
            </Button>
          </form>
        </div>

        <div className="lg:pt-16">
          <div className="rounded-2xl bg-bg-tertiary p-8 md:p-12">
            <h2 className="text-lg font-semibold text-text-primary mb-6">Other ways to reach us</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary">Email</p>
                <p className="mt-1 text-sm text-text-accent">hello@lumina.pub</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary">Press</p>
                <p className="mt-1 text-sm text-text-accent">press@lumina.pub</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary">Office</p>
                <p className="mt-1 text-sm text-text-secondary">
                  San Francisco, CA
                  <br />
                  Remote-first team
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-text-tertiary">
            Looking for quick answers? Check our{" "}
            <a href="/newsletter" className="text-text-accent hover:underline">
              FAQ
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
