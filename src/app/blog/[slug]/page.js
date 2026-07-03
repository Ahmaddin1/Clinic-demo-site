import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

export const metadata = {
  title:
    "How Often Should You Really Visit the Dentist? | Dental Avenue Faisalabad",
  description:
    "Most people assume an annual checkup is enough. The honest answer depends on your personal risk level -- and skipping visits almost always costs more in the long run.",
};

export default function BlogPost() {
  return (
    <article className="pt-32 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs text-textDark/50 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <ChevronRight size={13} />
          <span className="text-textDark/80 line-clamp-1">
            How Often Should You Really Visit the Dentist?
          </span>
        </nav>

        {/* Article header */}
        <header className="flex flex-col gap-5 mb-10">
          <div className="flex items-center gap-4 text-xs text-textDark/45">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              June 12, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />5 min read
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-textDark leading-tight">
            How Often Should You Really Visit the Dentist?
          </h1>

          <p className="text-textDark/70 text-lg leading-relaxed">
            Most people assume once a year is fine. The honest answer depends on
            your risk level -- and skipping checkups almost always costs more in
            the long run.
          </p>
        </header>

        {/* Hero image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Dentist reviewing patient records during a routine checkup at Dental Avenue Faisalabad"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        {/* Article body */}
        <div className="prose-content flex flex-col gap-6 text-textDark/80 leading-relaxed">
          <p>
            The &ldquo;twice a year&rdquo; rule you have heard since childhood
            was popularised by a toothpaste advertisement in the 1950s, not a
            clinical guideline. The actual recommendation from dental
            associations is more nuanced: visit often enough that problems are
            caught before they become expensive. For most healthy adults with
            good oral hygiene, that works out to every six to twelve months. For
            others, it can mean every three to four months.
          </p>

          <h2 className="font-heading font-bold text-2xl text-textDark mt-4">
            What Determines How Often You Need to Come In?
          </h2>

          <p>
            Your dentist is looking at a combination of factors when they
            recommend a recall interval. Gum disease history is the biggest one
            -- patients who have had periodontitis need more frequent cleanings
            to prevent recurrence. Diabetes, dry mouth from medication, and a
            history of frequent cavities all push the interval shorter. Smokers
            accumulate tartar faster and face higher oral cancer risk, so
            quarterly visits are common.
          </p>

          <p>
            On the other end, a patient in their 30s with no fillings, no gum
            issues, no systemic conditions, and a solid home care routine can
            often go twelve months between visits without any clinical downside.
            The key word is &ldquo;solid&rdquo; -- most people overestimate how
            well they brush and floss.
          </p>

          <h2 className="font-heading font-bold text-2xl text-textDark mt-4">
            What Actually Happens at a Checkup?
          </h2>

          <p>
            A proper checkup is not just a quick look around your mouth. Your
            dentist is checking for early decay on all surfaces, probing the
            gumline for pocket depth changes, examining soft tissue for any
            lesions, reviewing existing restorations for wear or cracks, and
            assessing bite changes. An X-ray (usually once a year for lower-risk
            patients) catches what is invisible to the naked eye -- decay
            between teeth, bone levels around roots, and impacted wisdom teeth.
          </p>

          <p>
            The cleaning portion removes calculus deposits that no amount of
            home brushing can shift. Calculus is hardened tartar that sits below
            the gumline and drives the chronic inflammation behind gum disease.
            Removing it regularly is the single most effective thing a clinic
            can do for your long-term gum health.
          </p>

          <h2 className="font-heading font-bold text-2xl text-textDark mt-4">
            The Cost Argument for Coming in More, Not Less
          </h2>

          <p>
            A scaling and polishing session at Dental Avenue costs a fraction of
            what a root canal or crown costs. Decay caught at the small cavity
            stage is a 20-minute composite filling. Left for 18 months, that
            same cavity reaches the pulp and becomes a root canal followed by a
            crown -- a ten-fold cost increase, more chair time, and a less
            comfortable experience overall. The economics of prevention are not
            close.
          </p>

          <p>
            If cost is a barrier to regular visits, tell us. We will work out a
            realistic maintenance schedule with you and flag which treatments
            are urgent versus which can wait. What we will not do is let small
            problems grow silently when a short visit would have caught them.
          </p>

          <h2 className="font-heading font-bold text-2xl text-textDark mt-4">
            Our Recommendation for Faisalabad Patients
          </h2>

          <p>
            If you have not had a checkup in over a year, book one regardless of
            how your teeth feel. Pain is a late signal -- most early decay and
            gum disease is completely asymptomatic until it is expensive to fix.
            Come in, let us assess your actual risk level, and we will give you
            an honest interval recommendation based on your mouth, not a
            one-size-fits-all guideline.
          </p>
        </div>

        {/* End-of-article CTA */}
        <div className="mt-14 rounded-2xl bg-secondary px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl text-white">
              Have questions about your dental health?
            </h3>
            <p className="text-white/70 text-sm">
              Book a checkup at Dental Avenue -- we will give you a straight
              answer and a clear plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200 shrink-0 whitespace-nowrap"
          >
            Book Appointment
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-textDark/50 text-sm font-medium hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
