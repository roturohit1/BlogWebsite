import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { articles } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 md:py-32 text-center">
      <p className="font-display text-8xl md:text-9xl text-border-default select-none">404</p>
      <h1 className="mt-4 font-display text-3xl md:text-4xl text-text-primary">
        This page has wandered off
      </h1>
      <p className="mt-4 text-lg text-text-secondary">
        The article or page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" href="/">
          Back to Home
        </Button>
        <a href="/search" className="text-sm text-text-accent hover:underline">
          Try searching →
        </a>
      </div>

      <div className="mt-16">
        <p className="text-sm text-text-tertiary mb-6">Popular articles</p>
        <div className="space-y-4 text-left">
          {articles.slice(0, 3).map((article) => (
            <BlogCard key={article.slug} article={article} compact />
          ))}
        </div>
      </div>
    </div>
  );
}
