"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutPreview() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRefs = useRef([]);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
    });

    const texts = textRefs.current.filter(Boolean);
    texts.forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          ref={imgRef}
          className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80"
            alt="Dental Avenue Faisalabad clinic team and interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-5">
          <span
            ref={(el) => (textRefs.current[0] = el)}
            className="text-accent font-semibold text-sm uppercase tracking-widest"
          >
            About Dental Avenue
          </span>
          <h2
            ref={(el) => (textRefs.current[1] = el)}
            className="font-heading font-bold text-3xl md:text-4xl text-textDark leading-tight"
          >
            Rooted in Faisalabad, Committed to Your Smile
          </h2>
          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="text-textDark/70 leading-relaxed"
          >
            Dental Avenue was founded with a single belief: every family in
            Faisalabad deserves world-class dental care close to home. Over a
            decade ago, our lead dentist saw a gap between the care available
            locally and the standards patients deserved -- so we built the
            clinic we wished existed.
          </p>
          <p
            ref={(el) => (textRefs.current[3] = el)}
            className="text-textDark/70 leading-relaxed"
          >
            Today we serve thousands of patients across Faisalabad with a team
            of PMDC-licensed professionals, modern sterilization protocols, and
            a practice built on trust, transparency, and genuine warmth.
          </p>
          <Link
            ref={(el) => (textRefs.current[4] = el)}
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200 w-fit"
          >
            Meet Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
