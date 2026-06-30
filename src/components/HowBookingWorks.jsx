"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PhoneCall, ClipboardList, FileText, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book Online or Call",
    desc: "Pick a time that suits you -- online or by phone, we make it easy.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Checkup & Diagnosis",
    desc: "A thorough exam so we understand exactly what your smile needs.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Treatment Plan & Pricing",
    desc: "Clear options and upfront costs before any work begins.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Treatment Begins",
    desc: "Comfortable, expert care delivered at your pace.",
  },
];

export default function HowBookingWorks() {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const stepRefs = useRef([]);

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
            start: "top 30%",
            once: true,
            
          },
        });
      });

      const cards = stepRefs.current.filter(Boolean);
      if (!cards.length) return;
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span
            ref={(el) => (headingRefs.current[0] = el)}
            className="text-white font-semibold text-sm uppercase tracking-widest"
          >
            Getting Treated Is Simple
          </span>
          <h2
            ref={(el) => (headingRefs.current[1] = el)}
            className="font-heading font-bold text-3xl md:text-4xl text-textDark"
          >
            Your Visit, From Booking to Smile
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-black/10" />

          {steps.map(({ number, icon: Icon, title, desc }, i) => (
            <div
              key={number}
              ref={(el) => (stepRefs.current[i] = el)}
              className="relative flex flex-col items-center md:items-center text-center gap-4"
            >
              {/* Number bubble */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-heading font-bold text-lg text-white">
                  {number}
                </span>
              </div>

              {/* Vertical connector dot for mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden w-px h-8 bg-black/10" />
              )}

              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading font-semibold text-base text-textDark">
                  {title}
                </h3>
                <p className="text-textDark/65 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
