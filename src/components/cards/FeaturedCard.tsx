import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Article } from "@/lib/data";

export function FeaturedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-border-subtle bg-bg-primary md:grid-cols-[55%_45%] card-hover"
    >
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[420px]">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width:768px) 100vw, 55vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
        <Badge>Editor&apos;s Pick</Badge>
        <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-tight tracking-tight group-hover:text-text-accent transition-colors">
          {article.title}
        </h2>
        <p className="text-base text-text-secondary leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={article.author.avatar} alt="" fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">{article.author.name}</p>
            <p className="text-xs text-text-tertiary">
              {article.date} · {article.readTime} read
            </p>
          </div>
        </div>
        <Button variant="secondary" size="sm" className="w-fit">
          Read article
        </Button>
      </div>
    </Link>
  );
}
