"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: 10000, suffix: "+", label: "Patients Treated" },
  { value: 10, suffix: "+", label: "Years in Practice" },
  { value: 4.9, suffix: "", label: "Average Rating", decimals: 1 },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function StatsSection() {
  const containerRef = useRef(null);
  const numRefs = useRef([]);

  useGSAP(
    () => {
      const counters = numRefs.current;

      counters.forEach((el, i) => {
        if (!el) return;
        const { value, decimals = 0 } = stats[i];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate() {
            el.textContent = decimals
              ? obj.val.toFixed(decimals)
              : Math.round(obj.val).toLocaleString();
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-16">
      <div className="mx-auto max-w-7xl rounded-2xl px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ suffix, label }, i) => (
            <div
              key={label}
              className="flex flex-col border-black border-1 py-12 rounded-2xl shadow-black/30 shadow-xl items-center gap-2"
            >
              <div className="flex items-end gap-0.5">
                <span
                  ref={(el) => (numRefs.current[i] = el)}
                  className="font-heading font-bold text-4xl md:text-5xl text-textDark"
                >
                  0
                </span>
                <span className="font-heading font-bold text-3xl md:text-4xl text-textDark mb-0.5">
                  {suffix}
                </span>
              </div>
              <p className="text-textDark/70 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
