import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { Comments } from "@/components/blog/Comments";
import { BlogCard } from "@/components/cards/BlogCard";
import { NewsletterCard } from "@/components/cards/NewsletterCard";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { getArticle, articles } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };
  return { title: `${article.title} — Lumina` };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />

      <article className="mx-auto max-w-[1280px] px-4 py-8 md:px-8 md:py-12 lg:px-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: article.category, href: "/blog" },
            { label: article.title },
          ]}
        />

        <header className="max-w-3xl mt-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary leading-tight tracking-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-xl text-text-secondary leading-relaxed">
            {article.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={`/author/${article.author.slug}`} className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={article.author.avatar}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{article.author.name}</p>
                <p className="text-xs text-text-tertiary">
                  {article.date} · {article.readTime} read
                </p>
              </div>
            </Link>
            <Button variant="secondary" size="sm" className="ml-auto">
              Follow
            </Button>
          </div>
        </header>

        <div className="relative mt-10 aspect-[12/5] overflow-hidden rounded-2xl">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover"
            sizes="1200px"
            priority
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <ArticleBody />

            <div className="mt-12 flex flex-wrap gap-2">
              {["Design Systems", "Product", "Engineering"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-tertiary px-3 py-1 text-xs text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 flex gap-6 rounded-2xl border border-border-subtle p-6">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={article.author.avatar}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{article.author.name}</p>
                <p className="text-xs text-text-tertiary mb-2">{article.author.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{article.author.bio}</p>
                <Link
                  href={`/author/${article.author.slug}`}
                  className="mt-3 inline-block text-sm text-text-accent hover:underline"
                >
                  More from {article.author.name.split(" ")[0]} →
                </Link>
              </div>
            </div>

            <div className="mt-10">
              <ShareButtons />
            </div>

            <Comments />

            <section className="mt-16">
              <h2 className="font-display text-2xl text-text-primary mb-8">Related posts</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((a) => (
                  <BlogCard key={a.slug} article={a} />
                ))}
              </div>
            </section>

            <div className="mt-16">
              <NewsletterCard variant="inline" />
            </div>
          </div>

          <aside className="hidden lg:block">
            <TableOfContents />
          </aside>
        </div>
      </article>
    </>
  );
}
