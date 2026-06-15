export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  followers: string;
  articles: number;
  reads: string;
  social: { twitter?: string; linkedin?: string; website?: string };
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
};

export const authors: Author[] = [
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "Design Lead at Linear",
    bio: "Sarah writes about design systems, product craft, and the intersection of aesthetics and engineering. Previously at Figma and Stripe.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    followers: "12.4K",
    articles: 24,
    reads: "890K",
    social: { twitter: "#", linkedin: "#", website: "#" },
  },
  {
    slug: "marcus-webb",
    name: "Marcus Webb",
    role: "Engineering Writer",
    bio: "Exploring distributed systems, developer experience, and the craft of building software that lasts.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    followers: "8.2K",
    articles: 18,
    reads: "520K",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    slug: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Culture & Ideas Editor",
    bio: "Long-form essays on technology, society, and what it means to create in the digital age.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    followers: "15.1K",
    articles: 31,
    reads: "1.2M",
    social: { twitter: "#", website: "#" },
  },
  {
    slug: "james-okonkwo",
    name: "James Okonkwo",
    role: "Startup & Business Writer",
    bio: "Former founder turned writer. Covering startups, fundraising, and the psychology of building.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    followers: "6.8K",
    articles: 14,
    reads: "340K",
    social: { linkedin: "#", website: "#" },
  },
];

export const categories = [
  { name: "Technology", slug: "technology", count: 142, icon: "cpu" },
  { name: "Design", slug: "design", count: 98, icon: "palette" },
  { name: "Culture", slug: "culture", count: 76, icon: "book" },
  { name: "Business", slug: "business", count: 64, icon: "chart" },
  { name: "Science", slug: "science", count: 52, icon: "atom" },
  { name: "Lifestyle", slug: "lifestyle", count: 41, icon: "leaf" },
];

export const articles: Article[] = [
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale: Lessons from Building at Linear",
    excerpt:
      "How we built a design system that serves 200+ engineers without slowing anyone down. The principles, pitfalls, and practices that actually work.",
    category: "Design",
    author: authors[0],
    date: "Jun 12, 2026",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    featured: true,
    trending: true,
  },
  {
    slug: "future-of-long-form",
    title: "The Future of Long-Form Writing on the Web",
    excerpt:
      "Why the best writing platforms are betting on simplicity, speed, and reader respect over engagement hacks.",
    category: "Culture",
    author: authors[2],
    date: "Jun 10, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1455390217233-bab2e90b37d2?w=800&h=500&fit=crop",
    trending: true,
  },
  {
    slug: "distributed-systems-primer",
    title: "A Gentle Introduction to Distributed Systems",
    excerpt:
      "Consensus, CAP theorem, and why your microservices are probably too micro. A practical guide for curious engineers.",
    category: "Technology",
    author: authors[1],
    date: "Jun 8, 2026",
    readTime: "15 min",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    trending: true,
  },
  {
    slug: "newsletter-growth-playbook",
    title: "The Newsletter Growth Playbook Nobody Talks About",
    excerpt:
      "Forget viral loops. The creators growing sustainably are doing something much simpler.",
    category: "Business",
    author: authors[3],
    date: "Jun 5, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
  },
  {
    slug: "typography-on-screen",
    title: "Typography on Screen: A Designer’s Complete Guide",
    excerpt:
      "From font pairing to line length, everything you need to know to make text beautiful and readable.",
    category: "Design",
    author: authors[0],
    date: "Jun 3, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
  },
  {
    slug: "ai-writing-tools",
    title: "AI Writing Tools: Threat or Superpower for Creators?",
    excerpt:
      "An honest look at how writers are using AI — and where the human element remains irreplaceable.",
    category: "Technology",
    author: authors[1],
    date: "May 30, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
  {
    slug: "minimalist-product-design",
    title: "The Case for Minimalist Product Design",
    excerpt:
      "In a world of feature bloat, restraint is the ultimate competitive advantage.",
    category: "Design",
    author: authors[0],
    date: "May 28, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
  },
  {
    slug: "remote-work-culture",
    title: "Building Culture in Remote-First Companies",
    excerpt:
      "Culture isn’t about ping pong tables. It’s about rituals, writing, and intentional connection.",
    category: "Business",
    author: authors[3],
    date: "May 25, 2026",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
  },
  {
    slug: "science-of-reading",
    title: "The Science of Reading: What Research Tells Us",
    excerpt:
      "Line length, font size, spacing — the data-backed principles behind great reading experiences.",
    category: "Science",
    author: authors[2],
    date: "May 22, 2026",
    readTime: "13 min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((a) => a.slug === slug);
}
