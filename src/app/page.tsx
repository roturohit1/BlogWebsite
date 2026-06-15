import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeaturedCard } from "@/components/cards/FeaturedCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { AuthorCard } from "@/components/cards/AuthorCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { NewsletterCard } from "@/components/cards/NewsletterCard";
import { articles, authors, categories } from "@/lib/data";

export default function HomePage() {
  const featured = articles.find((a) => a.featured)!;
  const trending = articles.filter((a) => a.trending);
  const latest = articles.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-accent-subtle to-bg-primary">
        <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8 md:py-32 lg:px-20 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-text-accent mb-6">
            The modern publishing platform
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Stories worth reading.
            <br />
            Ideas worth sharing.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Discover thoughtful writing from creators who care about craft. Join a community
            of readers and writers building something better than the feed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/blog">
              Explore Articles
            </Button>
            <Button variant="secondary" size="lg" href="#">
              Start Writing
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {authors.map((author) => (
                <div
                  key={author.slug}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-bg-primary"
                >
                  <Image src={author.avatar} alt="" fill className="object-cover" sizes="40px" />
                </div>
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              Join <span className="font-medium text-text-primary">12,000+</span> writers and readers
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 lg:px-20">
        <FeaturedCard article={featured} />
      </section>

      {/* Trending */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary">Trending</h2>
            <Link href="/blog" className="text-sm text-text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trending.map((article, i) => (
              <div key={article.slug} className="relative">
                <span className="absolute -top-4 -left-2 font-display text-6xl text-border-default z-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <BlogCard article={article} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 md:py-24 md:px-8 lg:px-20">
        <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">
          Explore by topic
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary">Latest posts</h2>
            <div className="flex gap-2 overflow-x-auto">
              {["All", "Technology", "Design", "Culture"].map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                    i === 0
                      ? "bg-brand-primary text-white"
                      : "bg-bg-tertiary text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="ghost" href="/blog">
              Load more articles
            </Button>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 md:py-24 md:px-8 lg:px-20">
        <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">
          Writers to follow
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => (
            <AuthorCard key={author.slug} author={author} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 lg:px-20">
        <NewsletterCard />
      </section>
    </>
  );
}
