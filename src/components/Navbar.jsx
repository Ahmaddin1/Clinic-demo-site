"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const mobileLinksBoxRef = useRef(null);
  const hasAnimatedMenuRef = useRef(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useGSAP(
    () => {
      const panel = mobilePanelRef.current;
      const linksBox = mobileLinksBoxRef.current;

      if (!panel || !linksBox) return;

      if (!hasAnimatedMenuRef.current) {
        gsap.set(panel, { height: 0, marginTop: 0 });
        gsap.set(linksBox, { autoAlpha: 0, y: -8 });
        hasAnimatedMenuRef.current = true;
        return;
      }

      const tl = gsap.timeline();

      if (menuOpen) {
        tl.to(panel, {
          height: "auto",
          marginTop: 16,
          duration: 0.4,
          ease: "power3.out",
        }).to(linksBox, {
          autoAlpha: 1,
          y: 0,
          duration: 0.14,
          ease: "power3.out",
        });
      } else {
        tl.to(linksBox, {
          autoAlpha: 0,
          y: -8,
          duration: 0.12,
          ease: "power3.in",
        }).to(panel, {
          height: 0,
          marginTop: 0,
          duration: 0.4,
          ease: "power3.inOut",
        });
      }

      return () => tl.kill();
    },
    { scope: navRef, dependencies: [menuOpen] },
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <nav
        ref={navRef}
        className="mx-auto max-w-7xl bg-secondary/40 backdrop-blur-md rounded-2xl shadow-md border border-black/8 px-5 py-3"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-primary font-heading font-bold text-xl leading-none">
              Dental Avenue
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-accent"
                        : "text-primary hover:text-accent"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-3 h-0.5 bg-accent transition-all duration-200 ${
                        isActive
                          ? "w-[calc(100%-1.5rem)]"
                          : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200 shrink-0"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-primary hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div ref={mobilePanelRef} className="overflow-hidden md:hidden">
          <div
            ref={mobileLinksBoxRef}
            className="rounded-2xl border border-black/8 bg-secondary/40 p-4 shadow-sm backdrop-blur-md"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors duration-150 ${
                      pathname === href
                        ? "text-accent bg-accent/5"
                        : "text-primary hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
