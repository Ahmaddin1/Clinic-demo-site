"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, Scissors, AlignCenter, Gem, Sun } from "lucide-react";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const services = [
  {
    icon: Sparkles,
    name: "Scaling & Polishing",
    desc: "Professional plaque removal and polishing for a cleaner, brighter smile.",
    href: "/services/scaling-polishing",
  },
  {
    icon: Zap,
    name: "Root Canal Treatment",
    desc: "Comfortable, precise root canal therapy to save your natural tooth.",
    href: "/services/root-canal",
  },
  {
    icon: Scissors,
    name: "Tooth Extraction",
    desc: "Safe, gentle extraction with minimal discomfort and fast recovery.",
    href: "/services/tooth-extraction",
  },
  {
    icon: AlignCenter,
    name: "Braces & Orthodontics",
    desc: "Metal, ceramic, and clear aligner options to straighten your smile.",
    href: "/services/braces-orthodontics",
  },
  {
    icon: Gem,
    name: "Dental Implants",
    desc: "Permanent, natural-looking implants that restore full chewing function.",
    href: "/services/dental-implants",
  },
  {
    icon: Sun,
    name: "Teeth Whitening",
    desc: "In-chair whitening treatment for visibly whiter teeth in one visit.",
    href: "/services/teeth-whitening",
  },
];

export default function ServiceCardGrid() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service, i) => (
        <ServiceCard
          key={service.href}
          {...service}
          cardRef={(el) => (cardRefs.current[i] = el)}
        />
      ))}
    </div>
  );
}
