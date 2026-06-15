import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Article } from "@/lib/data";

export function BlogCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  if (compact) {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group flex gap-4 card-hover rounded-xl p-2"
      >
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
          <Image src={article.image} alt="" fill className="object-cover" sizes="112px" />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <Badge className="mb-2 w-fit">{article.category}</Badge>
          <h3 className="font-medium text-sm text-text-primary line-clamp-2 group-hover:text-text-accent transition-colors">
            {article.title}
          </h3>
          <p className="mt-1 text-xs text-text-tertiary">{article.readTime}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col card-hover rounded-xl overflow-hidden bg-bg-primary border border-border-subtle"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Badge>{article.category}</Badge>
        <h3 className="font-display text-xl text-text-primary line-clamp-2 group-hover:text-text-accent transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image src={article.author.avatar} alt="" fill className="object-cover" sizes="32px" />
          </div>
          <div className="text-xs text-text-tertiary">
            <span className="text-text-secondary font-medium">{article.author.name}</span>
            <span className="mx-1.5">·</span>
            {article.date}
            <span className="mx-1.5">·</span>
            {article.readTime}
          </div>
        </div>
      </div>
    </Link>
  );
}
