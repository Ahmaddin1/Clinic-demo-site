"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  AlignCenter,
  UserCheck,
  CalendarCheck,
  Gem,
  ShieldCheck,
  Zap,
  Sparkles,
  Clock,
  Sun,
  BookOpen,
  HeartHandshake,
} from "lucide-react";
import CTABanner from "./CTABanner";

const ICONS = {
  AlignCenter,
  UserCheck,
  CalendarCheck,
  Gem,
  ShieldCheck,
  Zap,
  Sparkles,
  Clock,
  Sun,
  BookOpen,
  HeartHandshake,
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Shared layout for every individual service page.
 *
 * Props:
 *   title         string   -- page H1
 *   intro         string   -- short intro paragraph
 *   image         string   -- Unsplash URL
 *   imageAlt      string
 *   whatToExpect  string[] -- array of step/paragraph strings
 *   trustPoints   { icon: string, title: string, desc: string }[]  -- icon is a key of ICONS map
 *   priceRange    string   -- e.g. "PKR 2,000 – 4,000"
 *   ctaHeading    string
 *   ctaSubtext    string
 */
export default function ServicePageLayout({
  title,
  intro,
  image,
  imageAlt,
  whatToExpect,
  trustPoints,
  priceRange,
  ctaHeading,
  ctaSubtext,
}) {
  const heroRefs = useRef([]);
  const imgRef = useRef(null);
  const sectionRefs = useRef([]);

  // useEffect(() => {
  //   heroRefs.current.forEach((el, i) => {
  //     if (!el) return;
  //     gsap.from(el, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       delay: i * 0.15,
  //     });
  //   });

  //   gsap.from(imgRef.current, {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.8,
  //     ease: "power3.out",
  //     scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true },
  //   });

  //   sectionRefs.current.forEach((el) => {
  //     if (!el) return;
  //     gsap.from(el, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: { trigger: el, start: "top 85%", once: true },
  //     });
  //   });
  // }, []);

  useGSAP(() => {
    heroRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.15,
      });
    });

    gsap.from(imgRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true },
    });

    sectionRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });
  }, []);
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav
            ref={(el) => (heroRefs.current[0] = el)}
            className="flex items-center gap-1.5 text-xs text-textDark/50 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              href="/services"
              className="hover:text-accent transition-colors"
            >
              Services
            </Link>
            <ChevronRight size={13} />
            <span className="text-textDark/80">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <h1
                ref={(el) => (heroRefs.current[1] = el)}
                className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight"
              >
                {title}
              </h1>
              <p
                ref={(el) => (heroRefs.current[2] = el)}
                className="text-textDark/70 text-lg leading-relaxed"
              >
                {intro}
              </p>
              <div ref={(el) => (heroRefs.current[3] = el)}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200"
                >
                  Book This Treatment
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div
              ref={imgRef}
              className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden"
            >
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="px-4 md:px-8 py-14"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-textDark mb-6">
            What to Expect
          </h2>
          <ol className="flex flex-col gap-4">
            {whatToExpect.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-heading font-bold text-accent text-lg shrink-0 w-7">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-textDark/70 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Choose Dental Avenue */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="px-4 md:px-8 py-14"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-textDark mb-10 text-center">
            Why Choose Dental Avenue for This Treatment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map(({ icon, title: ptTitle, desc }) => {
              const Icon = ICONS[icon];
              return (
                <div
                  key={ptTitle}
                  className="flex flex-col gap-3 p-6 rounded-2xl border border-black/8 bg-primary"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-textDark">
                    {ptTitle}
                  </h3>
                  <p className="text-textDark/65 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Price range */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="px-4 md:px-8 py-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-black/[0.03] border border-black/8 px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-textDark/50 uppercase tracking-widest font-semibold mb-1">
                Estimated Price Range
              </p>
              <p className="font-heading font-bold text-2xl text-textDark">
                {priceRange}
              </p>
              <p className="text-textDark/50 text-xs mt-1">
                Final cost confirmed after in-clinic assessment. No hidden fees.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200 shrink-0"
            >
              Book an Appointment
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner heading={ctaHeading} subtext={ctaSubtext} />
    </>
  );
}
