import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Dental Services in Faisalabad | Dental Avenue",
  description:
    "Explore all dental treatments at Dental Avenue Faisalabad -- scaling, root canals, extractions, braces, implants, and teeth whitening. Book today.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <nav
            className="flex items-center gap-1.5 text-xs text-textDark/50 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-textDark/80">Services</span>
          </nav>

          <div className="flex flex-col gap-4 max-w-2xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              What We Treat
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight">
              Our Dental Services
            </h1>
            <p className="text-textDark/70 text-lg leading-relaxed">
              From routine cleanings to full smile restorations -- everything
              your family needs under one roof in Faisalabad.
            </p>
          </div>

          <ServiceCardGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
