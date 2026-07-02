"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const testimonials = [
  {
    name: "Ayesha R.",
    area: "Gulberg, Faisalabad",
    quote:
      "The team made me feel completely at ease. My scaling and polishing was done quickly and my teeth feel incredible. I won't go anywhere else.",
  },
  {
    name: "Usman K.",
    area: "Madina Town, Faisalabad",
    quote:
      "I was terrified of root canals but the dentist explained every step. Zero pain, zero surprises on the bill. Absolutely recommend Dental Avenue.",
  },
  {
    name: "Sana M.",
    area: "Peoples Colony, Faisalabad",
    quote:
      "Got my braces fitted here and the follow-up care has been outstanding. The clinic is spotless and the staff are so welcoming.",
  },
  {
    name: "Bilal H.",
    area: "Canal Road, Faisalabad",
    quote:
      "Needed an urgent extraction and they fit me in the same day. Professional, gentle, and the pricing was exactly what they quoted upfront.",
  },
  {
    name: "Fatima N.",
    area: "Jinnah Colony, Faisalabad",
    quote:
      "Teeth whitening results were better than I expected. Done in under an hour and the difference is genuinely noticeable. Very happy.",
  },
  {
    name: "Hamza T.",
    area: "D Ground, Faisalabad",
    quote:
      "Brought my whole family here for checkups. The kids were completely comfortable which says everything. Highly trust this clinic.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-accent text-accent" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      headingRefs.current.filter(Boolean).forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            once: true,
          },
        });
      });

      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          scrub: true,
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-16">
      <div className="mx-auto max-w-7xl bg-black/[0.03] rounded-2xl px-6 md:px-10 py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <span
            ref={(el) => (headingRefs.current[0] = el)}
            className="text-accent font-semibold text-sm uppercase tracking-widest"
          >
            What Patients Say
          </span>
          <h2
            ref={(el) => (headingRefs.current[1] = el)}
            className="font-heading font-bold text-3xl md:text-4xl text-textDark"
          >
            Trusted by Families Across Faisalabad
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, area, quote }, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-primary border border-black/8"
            >
              <StarRow />
              <p className="text-textDark/70 text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold text-sm text-textDark">
                  {name}
                </p>
                <p className="text-textDark/50 text-xs">{area}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="flex justify-center mt-8">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
