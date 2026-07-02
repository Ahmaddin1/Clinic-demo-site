"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ALL = "All";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsJTIwY2xpbmljc3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Dental Avenue Faisalabad reception and waiting area",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
    alt: "Modern dental treatment chair",
    category: "Interior",
  },
  {
    src: "",
    alt: "Bright and clean dental treatment room",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    alt: "Dental instruments laid out for sterilization",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
    alt: "Dental X-ray and diagnosis equipment",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    alt: "Dentist consulting with a patient",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    alt: "Dental team member preparing treatment",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    alt: "Dental Avenue clinic hallway and interior decor",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    alt: "Close-up of dental tools and equipment tray",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    alt: "Dentist and patient reviewing treatment plan",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80",
    alt: "Dental clinic waiting area seating",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Dental ultrasonic scaler close-up",
    category: "Equipment",
  },
];

const categories = [ALL, "Interior", "Equipment", "Team"];

export default function GalleryGrid() {
  const [active, setActive] = useState(ALL);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const hasAnimated = useRef(false);

  const filtered =
    active === ALL ? images : images.filter((img) => img.category === active);

  // Animate on first scroll-into-view only
  useGSAP(
    () => {
      if (!gridRef.current || hasAnimated.current) return;
      const items = gridRef.current.querySelectorAll("[data-gallery-item]");
      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            hasAnimated.current = true;
          },
        },
      });
    },
    { scope: containerRef },
  );

  // Quick fade-in when filter changes (post initial animation)
  useGSAP(
    () => {
      if (!gridRef.current || !hasAnimated.current) return;
      const items = gridRef.current.querySelectorAll("[data-gallery-item]");
      gsap.fromTo(
        items,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.07 },
      );
    },
    { scope: containerRef, dependencies: [active] },
  );

  return (
    <section ref={containerRef} className="pt-32 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs text-textDark/50 mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-textDark/80">Gallery</span>
        </nav>

        {/* Hero copy */}
        <div className="flex flex-col gap-3 max-w-2xl mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Our Clinic
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight">
            A Look Inside Dental Avenue
          </h1>
          <p className="text-textDark/70 text-lg">
            Clean, modern, and welcoming -- see the space where Faisalabad
            families come to smile.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === cat
                  ? "bg-accent text-white"
                  : "border border-black/10 text-textDark/60 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map(({ src, alt, category }) => (
            <div
              key={src}
              data-gallery-item
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/0 group-hover:text-white/90 transition-colors duration-300">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
