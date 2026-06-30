"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const images = [
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
    alt: "Dental Avenue Faisalabad reception and waiting area",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGFsJTIwY2xpbmljfGVufDB8fDB8fHww",
    alt: "Modern dental treatment chair and equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    alt: "Dental tools and sterilized instruments",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsJTIwY2xpbmljfGVufDB8fDB8fHww",
    alt: "Bright and clean dental treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    alt: "Dentist consulting with a patient",
  },
  {
    src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
    alt: "Dental X-ray and diagnosis equipment",
  },
];

export default function GalleryPreview() {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const imgRefs = useRef([]);

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
            start: "top 85%",
            once: true,
          },
        });
      });

      const imgs = imgRefs.current.filter(Boolean);
      if (!imgs.length) return;
      gsap.from(imgs, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <span
            ref={(el) => (headingRefs.current[0] = el)}
            className="text-accent font-semibold text-sm uppercase tracking-widest"
          >
            Our Clinic
          </span>
          <h2
            ref={(el) => (headingRefs.current[1] = el)}
            className="font-heading font-bold text-3xl md:text-4xl text-textDark"
          >
            A Look Inside Dental Avenue
          </h2>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              ref={(el) => (imgRefs.current[i] = el)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200"
          >
            View Full Gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
