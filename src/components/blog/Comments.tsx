import Image from "next/image";
import { Button } from "@/components/ui/Button";

const comments = [
  {
    id: 1,
    author: "Alex Kim",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop",
    date: "2 days ago",
    text: "This resonates deeply. We struggled with the same governance challenges until we adopted a similar council model.",
  },
  {
    id: 2,
    author: "Priya Sharma",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop",
    date: "1 day ago",
    text: "The token-first approach is underrated. We spent months on components before realizing our spacing was inconsistent everywhere.",
  },
  {
    id: 3,
    author: "David Park",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    date: "5 hours ago",
    text: "Would love a follow-up on how you handle dark mode tokens across platforms. Great read!",
  },
];

export function Comments() {
  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl text-text-primary mb-8">
        Comments ({comments.length})
      </h2>

      <div className="mb-8 rounded-xl border border-border-default p-4">
        <textarea
          placeholder="Join the conversation…"
          rows={3}
          className="w-full resize-none bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none"
        />
        <div className="mt-3 flex justify-end">
          <Button variant="primary" size="sm">
            Post comment
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image src={comment.avatar} alt="" fill className="object-cover" sizes="40px" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-text-primary">{comment.author}</span>
                <span className="text-xs text-text-tertiary">{comment.date}</span>
              </div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{comment.text}</p>
              <button
                type="button"
                className="mt-2 text-xs text-text-accent hover:underline"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
