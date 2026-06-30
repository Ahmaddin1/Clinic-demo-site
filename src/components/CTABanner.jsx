"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CTABanner({
  heading = "Ready for a Healthier, Brighter Smile?",
  subtext = "Join thousands of Faisalabad families who trust Dental Avenue for all their dental care needs.",
}) {
  const containerRef = useRef(null);
  const refs = useRef([]);

  useGSAP(() => {
    const els = refs.current.filter(Boolean);
    els.forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-8">
      <div className="mx-auto max-w-7xl bg-secondary rounded-2xl px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2
            ref={(el) => (refs.current[0] = el)}
            className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight"
          >
            {heading}
          </h2>
          <p
            ref={(el) => (refs.current[1] = el)}
            className="text-white/70 text-base"
          >
            {subtext}
          </p>
        </div>
        <div ref={(el) => (refs.current[2] = el)} className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap"
          >
            Book Your Appointment
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
