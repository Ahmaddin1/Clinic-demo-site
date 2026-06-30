"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(eyebrowRef.current, { y: 50, opacity: 0, duration: 0.8 })
      .from(headlineRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.55")
      .from(subRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.55")
      .from(ctaRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.55");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-28 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
          alt="Modern dental clinic interior at Dental Avenue Faisalabad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <span
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest"
          >
            Trusted Dental Clinic in Faisalabad
          </span>

          <h1
            ref={headlineRef}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-textDark"
          >
            Faisalabad&apos;s Trusted Dental Clinic for{" "}
            <span className="text-black">Healthy, Confident Smiles</span>
          </h1>

          <p
            ref={subRef}
            className="text-textDark/70 text-lg leading-relaxed max-w-lg"
          >
            PMDC-licensed dentists, clinic-grade sterilization, and upfront
            transparent pricing. No surprises, just exceptional care.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200"
            >
              Book an Appointment
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+923000000000"
              className="inline-flex items-center gap-2 rounded-full border border-accent text-accent px-6 py-3 text-sm font-semibold hover:bg-accent/10 transition-colors duration-200"
            >
              <Phone size={16} />
              {/* PLACEHOLDER phone */}
              Call Now
            </a>
            {/* PLACEHOLDER WhatsApp number */}
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent text-accent px-6 py-3 text-sm font-semibold hover:bg-accent/10 transition-colors duration-200"
            >
              <Phone size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right: feature image */}
        <div className="relative h-80 lg:h-130 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80"
            alt="Dentist with patient at Dental Avenue Faisalabad"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
