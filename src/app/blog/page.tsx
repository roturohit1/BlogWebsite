import { BlogCard } from "@/components/cards/BlogCard";
import { NewsletterCard } from "@/components/cards/NewsletterCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { articles, categories } from "@/lib/data";

export const metadata = {
  title: "All Articles — Lumina",
};

export default function BlogListingPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16 lg:px-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-tight">
            All Articles
          </h1>
          <p className="mt-3 text-lg text-text-secondary">
            Discover stories from our community of writers
          </p>
        </div>
        <SearchBar expanded />
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-10">
        <button
          type="button"
          className="rounded-full bg-brand-primary px-4 py-2 text-sm text-white"
        >
          All
        </button>
        {categories.slice(0, 4).map((cat) => (
          <button
            key={cat.slug}
            type="button"
            className="rounded-full bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            {cat.name}
          </button>
        ))}
        <select className="ml-auto h-10 rounded-lg border border-border-default bg-bg-primary px-3 text-sm text-text-secondary outline-none">
          <option>Latest</option>
          <option>Popular</option>
          <option>Oldest</option>
        </select>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>

          <nav
            className="mt-16 flex items-center justify-center gap-2"
            aria-label="Pagination"
          >
            <button
              type="button"
              className="h-10 px-4 rounded-lg text-sm text-text-tertiary hover:bg-bg-tertiary"
            >
              ← Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                className={`h-10 w-10 rounded-lg text-sm ${
                  page === 1
                    ? "bg-brand-primary text-white"
                    : "text-text-secondary hover:bg-bg-tertiary"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-text-tertiary">…</span>
            <button
              type="button"
              className="h-10 w-10 rounded-lg text-sm text-text-secondary hover:bg-bg-tertiary"
            >
              12
            </button>
            <button
              type="button"
              className="h-10 px-4 rounded-lg text-sm text-text-secondary hover:bg-bg-tertiary"
            >
              Next →
            </button>
          </nav>
        </div>

        <aside className="hidden lg:block space-y-8">
          <NewsletterCard variant="sidebar" />
          <div className="rounded-xl border border-border-subtle p-6">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Popular tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Design Systems", "React", "Typography", "Startups", "AI", "Writing"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-bg-tertiary px-3 py-1 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
