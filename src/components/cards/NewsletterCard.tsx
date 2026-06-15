import { Button } from "@/components/ui/Button";

export function NewsletterCard({
  variant = "default",
}: {
  variant?: "default" | "inline" | "sidebar";
}) {
  const isDark = variant !== "sidebar";

  return (
    <div
      className={`rounded-2xl p-8 md:p-12 ${
        isDark
          ? "bg-bg-inverse text-text-inverse"
          : "bg-bg-accent-subtle border border-border-subtle"
      }`}
    >
      <div className={`max-w-xl ${variant === "inline" ? "mx-auto text-center" : ""}`}>
        <p
          className={`text-xs font-medium uppercase tracking-widest mb-3 ${
            isDark ? "text-text-tertiary" : "text-text-accent"
          }`}
        >
          Newsletter
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl leading-tight ${
            isDark ? "text-text-inverse" : "text-text-primary"
          }`}
        >
          Stay in the loop
        </h2>
        <p
          className={`mt-4 text-base leading-relaxed ${
            isDark ? "text-text-tertiary" : "text-text-secondary"
          }`}
        >
          Get the best stories delivered to your inbox every week. Curated picks, no spam — ever.
        </p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@example.com"
            className={`h-11 flex-1 rounded-lg border px-4 text-sm outline-none focus:ring-2 focus:ring-brand-primary ${
              isDark
                ? "bg-white/10 border-white/20 text-text-inverse placeholder:text-text-tertiary"
                : "bg-bg-primary border-border-default text-text-primary placeholder:text-text-tertiary"
            }`}
          />
          <Button variant="primary" type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>
        <p className={`mt-3 text-xs ${isDark ? "text-text-tertiary" : "text-text-tertiary"}`}>
          Trusted by 50,000+ subscribers. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
