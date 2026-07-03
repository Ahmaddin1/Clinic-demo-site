import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "About Us | Dental Avenue Faisalabad",
  description:
    "Learn about Dental Avenue Faisalabad -- our story, our PMDC-licensed team, and our commitment to honest, compassionate dental care for families across Faisalabad.",
};

const values = [
  {
    title: "Transparent Pricing",
    desc: "We quote before we treat. The price you are told at consultation is the price on your invoice -- no additions, no surprises.",
  },
  {
    title: "Clinical-Grade Sterilization",
    desc: "Autoclaved instruments after every patient. Single-use items for surgical procedures. Our sterilization log is available to any patient who asks.",
  },
  {
    title: "Honest Treatment Plans",
    desc: "We recommend only what you actually need. If monitoring is more appropriate than immediate treatment, we say so.",
  },
];

const team = [
  {
    name: "Dr. Amir Siddiqui",
    role: "Lead Dentist & Founder",
    bio: "PMDC-licensed with over 10 years of clinical experience in general and restorative dentistry. Dr. Siddiqui founded Dental Avenue with a single goal: bringing city-standard dental care to Faisalabad families at honest, transparent prices.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    imageAlt: "Lead dentist at Dental Avenue Faisalabad",
  },
  {
    name: "Dr. Sara Malik",
    role: "Orthodontist",
    bio: "Specialist in fixed braces and clear aligner therapy for both children and adults. Dr. Malik has completed over 400 orthodontic cases and is known for her patient-first approach to treatment planning.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    imageAlt: "Orthodontist at Dental Avenue Faisalabad",
  },
  {
    name: "Dr. Tariq Hussain",
    role: "Dental Surgeon",
    bio: "Experienced in surgical extractions, implant placement, and minor oral surgery. Dr. Hussain's calm, methodical approach puts even the most anxious patients at ease before and during procedures.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    imageAlt: "Dental surgeon at Dental Avenue Faisalabad",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <nav
            className="flex items-center gap-1.5 text-xs text-textDark/50 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-textDark/80">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                About Dental Avenue
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight">
                Rooted in Faisalabad, Built on Trust
              </h1>
              <p className="text-textDark/70 leading-relaxed">
                Dental Avenue was founded on a straightforward belief: families
                in Faisalabad deserve the same standard of dental care available
                in any major city. We built the clinic we wished existed --
                modern equipment, rigorous sterilization, transparent pricing,
                and a team that treats patients like people, not appointments.
              </p>
              <p className="text-textDark/70 leading-relaxed">
                Over a decade later, we have treated more than 10,000 patients
                across Faisalabad and Punjab. Every member of our team is
                PMDC-licensed. Every instrument is sterilized between patients.
                Every treatment plan is explained and agreed before work begins.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200 w-fit"
              >
                Book an Appointment
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative h-80 lg:h-125 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80"
                alt="Dental Avenue Faisalabad clinic reception and waiting area"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-8 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-textDark">
              What Makes Dental Avenue Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-black/8 bg-primary"
              >
                <h3 className="font-heading font-semibold text-base text-textDark">
                  {title}
                </h3>
                <p className="text-textDark/65 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 md:px-8 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Our Team
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-textDark">
              The People Behind Your Care
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ id, name, role, bio, image, imageAlt }) => (
              <div
                key={id}
                className="flex flex-col gap-0 rounded-2xl border border-black/8 overflow-hidden bg-primary p-4"
              >
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 px-1 py-5">
                  <h3 className="font-heading font-semibold text-base text-textDark">
                    {name}
                  </h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {role}
                  </p>
                  <p className="text-textDark/60 text-sm leading-relaxed mt-1">
                    {bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Meet the Team in Person?"
        subtext="Book an appointment at Dental Avenue Faisalabad and experience the difference firsthand."
      />
    </>
  );
}
