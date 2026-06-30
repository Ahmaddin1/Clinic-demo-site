import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dental Health Tips & News | Dental Avenue Faisalabad",
  description:
    "Practical dental health advice, treatment guides, and clinic news from the team at Dental Avenue Faisalabad.",
};

// The one real post
const realPost = {
  slug: "how-often-should-you-visit-the-dentist",
  title: "How Often Should You Really Visit the Dentist?",
  excerpt:
    "Most people assume once a year is fine. The honest answer depends on your risk level -- and skipping checkups costs more in the long run.",
  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  imageAlt: "Dentist reviewing patient records during a checkup",
  date: "June 12, 2025",
  readTime: "5 min read",
  real: true,
};

// LAYOUT PLACEHOLDERS — replace with real posts before client handoff.
// These cards are non-functional and exist only to populate the grid visually.
const placeholderPosts = [
  {
    slug: null,
    title: "What to Do When You Have a Toothache at Night",
    excerpt:
      "Pain that spikes after hours is usually a sign of pulp inflammation. Here is how to manage it until you can see us.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    imageAlt: "Patient discussing dental pain with dentist",
    date: "May 28, 2025",
    readTime: "4 min read",
    real: false,
  },
  {
    slug: null,
    title: "Are Braces Still Worth It as an Adult?",
    excerpt:
      "Orthodontic treatment is not just for teenagers. We break down the options, timelines, and real costs for adult patients in Faisalabad.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    imageAlt: "Close-up of orthodontic braces on teeth",
    date: "May 10, 2025",
    readTime: "6 min read",
    real: false,
  },
  {
    slug: null,
    title: "The Truth About Teeth Whitening Products From Pharmacies",
    excerpt:
      "Whitening strips, gels, and charcoal toothpaste -- what actually works and what could damage your enamel.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
    imageAlt: "Professional teeth whitening equipment",
    date: "April 22, 2025",
    readTime: "5 min read",
    real: false,
  },
  {
    slug: null,
    title: "Dental Implants vs Dentures: Which Is Right for You?",
    excerpt:
      "Both replace missing teeth, but the long-term costs, comfort, and care requirements are very different. Here is a straight comparison.",
    image: "https://images.unsplash.com/photo-1598256989014-93a25d7d7350?w=800&q=80",
    imageAlt: "Dental implant model and consultation",
    date: "April 5, 2025",
    readTime: "7 min read",
    real: false,
  },
  {
    slug: null,
    title: "How to Brush Properly (Most Adults Are Doing It Wrong)",
    excerpt:
      "Two minutes twice a day is the guideline -- but technique matters as much as time. Our hygienist explains what to actually do.",
    image: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800&q=80",
    imageAlt: "Dental hygiene demonstration",
    date: "March 18, 2025",
    readTime: "3 min read",
    real: false,
  },
];

const allPosts = [realPost, ...placeholderPosts];

function BlogCard({ post }) {
  const cardContent = (
    <div className="group flex flex-col gap-4 rounded-2xl border border-black/8 bg-primary hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5">
        <div className="flex items-center gap-3 text-xs text-textDark/45">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          {/* PLACEHOLDER BADGE — remove when real content is added */}
          {!post.real && (
            <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-accent/60 border border-accent/20 rounded px-1.5 py-0.5">
              Placeholder
            </span>
          )}
        </div>
        <h2 className="font-heading font-semibold text-base text-textDark leading-snug">
          {post.title}
        </h2>
        <p className="text-textDark/60 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-200 w-fit mt-1">
          {post.real ? "Read More" : "Coming Soon"}
          {post.real && <ArrowRight size={14} />}
        </span>
      </div>
    </div>
  );

  // Only the real post is a clickable link
  if (post.real) {
    return (
      <Link href={`/blog/${post.slug}`} className="block">
        {cardContent}
      </Link>
    );
  }

  // Placeholder cards are non-interactive divs
  return <div className="cursor-default">{cardContent}</div>;
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
            Practical advice and honest answers from the Dental Avenue team --
            written for Faisalabad families, not search engines.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
