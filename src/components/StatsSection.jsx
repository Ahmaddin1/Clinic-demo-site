"use client";

import { useRef } from "react";
import { CalendarCheck2, Star, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ToothIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...rest
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12 3c-2.5 0-4 1.2-5 1.2C5.5 4.2 4 5 4 7.5c0 2 .6 3.8 1 6 .3 1.7.7 4 1.6 5.2.5.7 1.2 1 1.9.3.6-.6.8-2 1-3 .2-1 .5-1.8 1.5-1.8s1.3.8 1.5 1.8c.2 1 .4 2.4 1 3 .7.7 1.4.4 1.9-.3.9-1.2 1.3-3.5 1.6-5.2.4-2.2 1-4 1-6 0-2.5-1.5-3.3-3-3.3-1 0-2.5-1.2-5-1.2z" />
    </svg>
  );
}

const NAVY = "#1B3A6B";
const ACCENT = "#F97316";
const TEXT_DARK = "#1C1C1C";

const stats = [
  {
    icon: ToothIcon,
    value: 1000,
    suffix: "+",
    label: "Patients Treated",
  },
  {
    icon: CalendarCheck2,
    value: 5,
    suffix: "+",
    label: "Years in Practice",
  },
  {
    icon: Star,
    value: 5.0,
    decimals: 1,
    label: "Average Rating",
    sublabel: "from 350+ reviews",
    accent: true,
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray(".stat-value");

      counters.forEach((counter) => {
        const endValue = Number(counter.dataset.value);
        const decimals = Number(counter.dataset.decimals || 0);
        const suffix = counter.dataset.suffix || "";
        const value = { current: 0 };

        gsap.to(value, {
          current: endValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            once: true,
            onEnter: () => {
              // Reset display to 0 right before animation starts
              counter.textContent = `${(0).toFixed(decimals)}${suffix}`;
            },
          },
          onUpdate: () => {
            const formatted = value.current.toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
            counter.textContent = `${formatted}${suffix}`;
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full py-16 px-4 bg-white">
      <noscript>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map(({ label, value, suffix = "", decimals = 0 }, i) => (
            <div key={i} className="flex flex-col items-center text-center rounded-2xl border px-6 py-8">
              <div className="text-3xl font-bold">
                {`${value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`}
              </div>
              <div className="text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </noscript>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map(
          (
            {
              icon: Icon,
              value,
              suffix = "",
              decimals = 0,
              label,
              sublabel,
              accent,
            },
            i,
          ) => {
            const tint = accent ? ACCENT : NAVY;

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-2xl border px-6 py-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1B3A6B]/30 transition-colors duration-300"
                style={{ borderColor: `${tint}33` }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full mb-4"
                  style={{ backgroundColor: `${tint}1A` }}
                >
                  <Icon size={26} color={tint} strokeWidth={2} />
                </div>

                <div
                  className="stat-value text-3xl font-bold"
                  style={{ color: accent ? tint : TEXT_DARK }}
                  data-value={value}
                  data-suffix={suffix}
                  data-decimals={decimals}
                >
                  {`${value.toLocaleString("en-US", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                  })}${suffix}`}
                </div>

                <div
                  className="text-sm mt-1"
                  style={{ color: TEXT_DARK, opacity: 0.65 }}
                >
                  {label}
                </div>

                {sublabel && (
                  <div
                    className="text-xs mt-0.5 font-medium"
                    style={{ color: tint, opacity: 0.85 }}
                  >
                    {sublabel}
                  </div>
                )}
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
