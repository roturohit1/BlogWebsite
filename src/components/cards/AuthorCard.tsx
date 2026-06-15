import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Author } from "@/lib/data";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border-subtle bg-bg-primary p-8 text-center card-hover">
      <Link href={`/author/${author.slug}`}>
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image src={author.avatar} alt="" fill className="object-cover" sizes="80px" />
        </div>
      </Link>
      <Link href={`/author/${author.slug}`}>
        <h3 className="mt-4 text-lg font-semibold text-text-primary hover:text-text-accent transition-colors">
          {author.name}
        </h3>
      </Link>
      <p className="mt-1 text-sm text-text-secondary">{author.role}</p>
      <p className="mt-3 text-sm text-text-tertiary line-clamp-2 leading-relaxed">
        {author.bio.slice(0, 80)}…
      </p>
      <p className="mt-4 text-xs text-text-tertiary">{author.followers} followers</p>
      <Button variant="secondary" size="sm" className="mt-4">
        Follow
      </Button>
    </div>
  );
}
