import Link from "next/link";
import { SearchBar } from "@/components/ui/SearchBar";
import { articles } from "@/lib/data";

export const metadata = {
  title: "Search — Lumina",
};

export default function SearchPage() {
  const query = "design systems";
  const results = articles.filter(
    (a) =>
      a.title.toLowerCase().includes("design") ||
      a.excerpt.toLowerCase().includes("design") ||
      a.category.toLowerCase().includes("design")
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-10">
        <SearchBar expanded placeholder="Search articles, authors, topics…" />
      </div>

      <p className="text-sm text-text-tertiary mb-6">
        {results.length} results for &ldquo;
        <span className="text-text-accent font-medium">{query}</span>&rdquo;
      </p>

      <div className="flex gap-2 mb-10">
        {["Articles", "Authors", "Categories"].map((filter, i) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-4 py-2 text-sm ${
              i === 0
                ? "bg-brand-primary text-white"
                : "bg-bg-tertiary text-text-secondary"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {results.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block group border-b border-border-subtle pb-8 last:border-0"
          >
            <p className="text-xs text-text-accent uppercase tracking-wider mb-2">
              {article.category}
            </p>
            <h2 className="text-xl font-semibold text-text-primary group-hover:text-text-accent transition-colors">
              {article.title.split("Design").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <mark className="bg-bg-accent-subtle text-text-accent rounded px-0.5">
                      Design
                    </mark>
                  </span>
                ) : (
                  part
                )
              )}
            </h2>
            <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
            <p className="mt-3 text-xs text-text-tertiary">
              {article.author.name} · {article.date} · {article.readTime}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
