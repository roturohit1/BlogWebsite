import Image from "next/image";

export function ArticleBody() {
  return (
    <article className="prose-article">
      <p id="intro">
        Building a design system at scale is less about picking the right component library
        and more about creating the organizational infrastructure that lets design and
        engineering move together. At Linear, we learned this the hard way — and the easy way.
      </p>

      <h2 id="principles">Core principles</h2>
      <p>
        Every successful design system shares three traits: consistency without rigidity,
        documentation that developers actually read, and governance that empowers rather
        than bottlenecks. We codified these into our internal playbook.
      </p>

      <blockquote>
        &ldquo;A design system isn&apos;t a project. It&apos;s a product serving products.&rdquo;
      </blockquote>

      <div className="callout">
        <p className="text-base font-medium text-text-primary mb-0">
          Key insight: Start with tokens, not components. Colors, spacing, and typography
          are the foundation everything else builds on.
        </p>
      </div>

      <h2 id="tokens">Design tokens</h2>
      <p>
        We migrated from hardcoded values to a token-based architecture in Figma and code
        simultaneously. This single decision eliminated 80% of our visual inconsistencies.
      </p>

      <pre>
        <code>{`// tokens/spacing.ts
export const space = {
  1: '4px',
  2: '8px',
  4: '16px',
  6: '24px',
  8: '32px',
} as const;`}</code>
      </pre>

      <h2 id="components">Component architecture</h2>
      <p>
        Our component library follows atomic design principles but with a pragmatic twist:
        we ship primitives fast and refine based on real usage data, not theoretical completeness.
      </p>

      <figure>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=675&fit=crop"
            alt="Design system component library overview"
            fill
            className="object-cover"
            sizes="680px"
          />
        </div>
        <figcaption>Our component library organized by atomic design layers</figcaption>
      </figure>

      <h2 id="governance">Governance model</h2>
      <p>
        We established a rotating &ldquo;system council&rdquo; of designers and engineers who
        review proposals weekly. No single team owns the system — everyone contributes,
        and everyone benefits.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        The best design systems fade into the background. They make the right thing the
        easy thing, and they grow with the organization rather than constraining it.
        Start small, document everything, and let usage guide your roadmap.
      </p>
    </article>
  );
}
