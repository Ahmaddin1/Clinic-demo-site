"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const faqs = [
  {
    q: "Are dental procedures painful?",
    a: "Most modern dental treatments cause little to no pain. We use local anaesthetic before any procedure that involves the teeth or gums, and we wait until the area is fully numb before starting. For anxious patients, we explain every step beforehand so there are no surprises. Post-treatment soreness, when it occurs, is usually mild and short-lived.",
  },
  {
    q: "How much do treatments cost at Dental Avenue?",
    a: "Costs vary by treatment and are listed as estimated ranges on each service page. A scaling and polishing session starts from PKR 2,000, while more complex work like implants starts from PKR 55,000. We always confirm the exact cost before starting any treatment -- you will never receive a bill that was not agreed upfront.",
  },
  {
    q: "Do you offer payment plans or installments?",
    a: "For higher-cost treatments such as braces, implants, and multiple crowns, we can arrange a phased payment schedule. Speak to our front desk when booking and we will work out a structure that fits your situation. We do not charge interest on in-house payment plans.",
  },
  {
    q: "How long does a typical appointment take?",
    a: "A routine checkup and cleaning takes 30 to 45 minutes. Fillings and extractions are usually done in under an hour. Complex treatments like root canals and implant surgeries may take 60 to 90 minutes per session. We give you a realistic time estimate when you book so you can plan your day.",
  },
  {
    q: "Do I need to book in advance, or do you accept walk-ins?",
    a: "We recommend booking in advance, especially for treatments, as slots fill quickly. That said, we keep a small number of same-day slots open each morning for urgent cases such as severe toothache or a broken tooth. Call us first thing and we will fit you in if we have availability.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, we see patients of all ages including young children. We are experienced at making children feel comfortable in the dental chair and work at their pace. We recommend bringing children in for their first checkup around age 3 to 4, or earlier if you notice any concerns.",
  },
  {
    q: "What should I do if I have a dental emergency after hours?",
    a: "If you have severe pain, significant swelling, a knocked-out tooth, or heavy bleeding, WhatsApp or call us on our clinic number -- we monitor urgent messages outside hours. For life-threatening situations, go directly to the nearest hospital emergency department.",
  },
  {
    q: "How do you sterilize your instruments?",
    a: "All reusable instruments are sterilized in an autoclave after every single use. Single-use items such as needles, extraction forceps, and surgical files are disposed of after each patient. Our sterilization area is separate from the treatment rooms and follows standard clinical protocols.",
  },
  {
    q: "Does health insurance cover dental treatment at your clinic?",
    a: "We work with select insurance panels -- contact us with your provider details and we will confirm coverage before your appointment. Patients without insurance pay directly and receive a detailed receipt for any reimbursement claims they wish to submit independently.",
  },
  {
    q: "How often should I come in for a checkup?",
    a: "For most healthy adults, every 6 to 12 months is appropriate. If you have active gum disease, a history of frequent cavities, diabetes, or smoke, we may recommend coming in every 3 to 4 months. We will give you a specific recall interval based on your actual risk level at your first visit.",
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(
    () => {
      const body = bodyRef.current;
      const inner = innerRef.current;
      if (!body || !inner) return;

      if (open) {
        const height = inner.offsetHeight;
        gsap.fromTo(
          body,
          { height: 0, opacity: 0 },
          {
            height,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              body.style.height = "auto";
            },
          },
        );
      } else {
        gsap.to(body, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [open], scope: bodyRef },
  );
  return (
    <div className="border-b border-black/8 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-base text-textDark group-hover:text-accent transition-colors duration-150">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-textDark/40 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div ref={innerRef} className="pb-5">
          <p className="text-textDark/65 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("[data-faq-item]");
    if (!items) return;
    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: listRef.current, start: "top 85%", once: true },
    });
  }, []);

  return (
    <section className="pt-32 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs text-textDark/50 mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-textDark/80">FAQ</span>
        </nav>

        {/* Hero copy */}
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Got Questions?
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-textDark/70 text-lg">
            Straight answers to the questions we hear most from patients before
            their first visit.
          </p>
        </div>

        {/* Accordion */}
        <div
          ref={listRef}
          className="rounded-2xl border border-black/8 bg-primary px-6"
        >
          {faqs.map((item, i) => (
            <div key={i} data-faq-item>
              <AccordionItem q={item.q} a={item.a} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-textDark/60 text-sm mb-4">
            Still have a question we did not answer?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200"
          >
            Ask Us Directly
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
