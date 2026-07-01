"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <nav className="mx-auto max-w-7xl bg-secondary/60 backdrop-blur-md rounded-2xl shadow-md border border-black/8 px-5 py-3">
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
        <div
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden ${
            menuOpen ? "mt-4 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-black/8 bg-secondary/80 p-4 shadow-sm backdrop-blur-md">
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
