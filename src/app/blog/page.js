import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dental Health Tips & News | Dental Avenue Faisalabad",
  description:
    "Practical dental health advice, treatment guides, and clinic news from the team at Dental Avenue Faisalabad.",
};

const posts = [
  {
    slug: "how-often-should-you-visit-the-dentist",
    title: "How Often Should You Really Visit the Dentist?",
    excerpt:
      "Most people assume once a year is fine. The honest answer depends on your risk level and skipping checkups costs more in the long run.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    imageAlt: "Dentist reviewing patient records during a checkup",
    date: "June 12, 2025",
    readTime: "5 min read",
  },
];

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="group flex flex-col gap-4 rounded-2xl border border-black/8 bg-primary hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="flex items-center gap-3 text-xs text-textDark/45">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="font-heading font-semibold text-base text-textDark leading-snug">
            {post.title}
          </h2>
          <p className="text-textDark/60 text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-200 w-fit mt-1">
            Read More
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs text-textDark/50 mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-textDark/80">Blog</span>
        </nav>

        {/* Hero copy */}
        <div className="flex flex-col gap-3 max-w-2xl mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Dental Health Tips & News
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight">
            Tips, Guides & Clinic News
          </h1>
          <p className="text-textDark/70 text-lg">
            Practical advice and honest answers from the Dental Avenue team,
            written for Faisalabad families.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
