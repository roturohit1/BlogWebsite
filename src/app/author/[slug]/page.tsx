import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { getAuthor, articles } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { authors } = await import("@/lib/data");
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return { title: "Not Found" };
  return { title: `${author.name} — Lumina` };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const authorArticles = articles.filter((a) => a.author.slug === slug);

  return (
    <>
      <div className="relative h-48 md:h-64 bg-bg-tertiary">
        <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1440&h=400&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-20">
        <div className="relative -mt-16 md:-mt-20">
          <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-bg-primary">
            <Image src={author.avatar} alt="" fill className="object-cover" sizes="128px" />
          </div>
        </div>

        <div className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-tight">
            {author.name}
          </h1>
          <p className="mt-2 text-lg text-text-secondary">{author.role}</p>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">{author.bio}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            {["X", "LinkedIn", "Website"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-text-accent hover:underline"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-semibold text-text-primary">{author.articles}</p>
              <p className="text-xs text-text-tertiary uppercase tracking-wider">Articles</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-text-primary">{author.followers}</p>
              <p className="text-xs text-text-tertiary uppercase tracking-wider">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-text-primary">{author.reads}</p>
              <p className="text-xs text-text-tertiary uppercase tracking-wider">Reads</p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Button variant="primary">Follow</Button>
            <Button variant="secondary">Share</Button>
          </div>
        </div>

        <div className="mt-16 border-b border-border-default">
          <div className="flex gap-8">
            {["Articles", "About", "Collections"].map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={`pb-4 text-sm font-medium border-b-2 -mb-px ${
                  i === 0
                    ? "border-brand-primary text-text-primary"
                    : "border-transparent text-text-tertiary hover:text-text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(authorArticles.length > 0 ? authorArticles : articles.slice(0, 3)).map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
