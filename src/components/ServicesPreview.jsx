"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import ServiceCardGrid from "./ServiceCardGrid";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ServicesPreview() {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);

  useGSAP(() => {
    headingRefs.current.filter(Boolean).forEach((el) => {
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
    <section ref={containerRef} className="px-4 md:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span
            ref={(el) => (headingRefs.current[0] = el)}
            className="text-accent font-semibold text-sm uppercase tracking-widest"
          >
            What We Treat
          </span>
          <h2
            ref={(el) => (headingRefs.current[1] = el)}
            className="font-heading font-bold text-3xl md:text-4xl text-textDark"
          >
            Complete Dental Care Under One Roof
          </h2>
        </div>

        <ServiceCardGrid />

        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
