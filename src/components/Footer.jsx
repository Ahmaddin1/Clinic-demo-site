"use client";

import Link from "next/link";
import { useRef, useMemo } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Splits a string into individual characters, preserving spaces as
// non-breaking so the stagger animation doesn't collapse word gaps.
function splitToChars(text) {
  return text.split("").map((char) => (char === " " ? "\u00A0" : char));
}

const services = [
  { label: "Scaling & Polishing", href: "/services/scaling-polishing" },
  { label: "Root Canal", href: "/services/root-canal" },
  { label: "Tooth Extraction", href: "/services/tooth-extraction" },
  { label: "Braces & Orthodontics", href: "/services/braces-orthodontics" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const letterRefs = useRef([]);
  letterRefs.current = [];

  const addLetterRef = (el) => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  const chars = useMemo(() => splitToChars("Dental Avenue"), []);

  useGSAP(
    () => {
      gsap.set(letterRefs.current, { y: -150 });

      gsap.to(letterRefs.current, {
        y: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 25%",
          end: "top 0%",
        },
      });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="w-full bg-secondary overflow-hidden">
      {/* Top content area */}
      <div className="px-4 md:px-8 pt-12 pb-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-white font-heading font-bold text-xl">
                Dental Avenue
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Compassionate, modern dental care for the families of Faisalabad.
              Your smile is our priority.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-accent hover:text-white transition-colors duration-150"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 text-sm hover:text-accent transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 text-sm hover:text-accent transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="tel:+923000000000"
                  className="text-white/70 text-sm hover:text-accent transition-colors duration-150"
                >
                  {/* PLACEHOLDER -- replace before handoff */}
                  +92 300 0000000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  {/* PLACEHOLDER -- replace before handoff */}
                  hello@dentalavenue.pk
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  {/* PLACEHOLDER -- replace before handoff */}
                  123 Main Boulevard, Faisalabad, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Mon-Sat: 10:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/15" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Dental Avenue Faisalabad. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white/50 text-xs hover:text-accent transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/50 text-xs hover:text-accent transition-colors duration-150"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Giant wordmark — edge-to-edge, GSAP translateY-only scroll reveal, no opacity */}
      <div className="w-full overflow-hidden leading-none select-none">
        <h2 className="font-heading font-bold text-white whitespace-nowrap text-[18vw] sm:text-[15vw] lg:text-[11vw] leading-[0.85] -mx-1 text-center">
          {chars.map((char, i) => (
            <span key={i} ref={addLetterRef} className="inline-block">
              {char}
            </span>
          ))}
        </h2>
      </div>
    </footer>
  );
}
