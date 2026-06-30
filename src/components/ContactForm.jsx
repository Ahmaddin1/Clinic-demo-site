"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  "Scaling & Polishing",
  "Root Canal Treatment",
  "Tooth Extraction",
  "Braces & Orthodontics",
  "Dental Implants",
  "Teeth Whitening",
  "General Checkup",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-textDark placeholder:text-textDark/35 bg-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200";

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-textDark/80 mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.service) e.service = "Please select a service.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    // TODO: Connect a real form handler here (e.g. Resend, EmailJS, or a
    // Next.js API route that POSTs to the clinic inbox). Currently shows a
    // client-side success state only -- no email is sent.
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      service: "",
      message: "",
    });
    setErrors({});
  }

  return (
    <section className="pt-32 pb-16 px-4 md:px-8">
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
          <span className="text-textDark/80">Contact</span>
        </nav>

        {/* Page heading */}
        <div className="flex flex-col gap-3 max-w-2xl mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Book an Appointment
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-textDark leading-tight">
            Get in Touch
          </h1>
          <p className="text-textDark/70 text-lg">
            Fill in the form and we will call you back within 2 hours to confirm
            your slot.
          </p>
          <div>
            <button
              type="button"
              className="bg-accent text-white px-10 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Call Us
            </button>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* LEFT: Form */}
          <div className="rounded-2xl border border-black/8 bg-primary p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-accent" />
                <h2 className="font-heading font-bold text-2xl text-textDark">
                  Request Received!
                </h2>
                <p className="text-textDark/65 max-w-sm">
                  Thanks, {form.name.split(" ")[0]}. We will call you on{" "}
                  {form.phone} within 2 hours to confirm your appointment.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-2 text-accent text-sm font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ahmad Raza"
                      className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
                    />
                  </Field>
                  <Field label="Phone Number *" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Email Address *" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                    />
                  </Field>
                  <Field label="Preferred Date" error={errors.date}>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Service Needed *" error={errors.service}>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.service ? "border-red-400" : ""}`}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message (optional)" error={errors.message}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any details we should know before your visit..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-200 w-full sm:w-fit"
                >
                  Send My Request
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            {/* Reassurance microcopy */}
            {!submitted && (
              <div className="mt-6 pt-5 border-t border-black/6">
                <p className="text-xs text-textDark/40 leading-relaxed">
                  We will call you within 2 hours during clinic hours (Mon-Sat,
                  10 AM - 8 PM) to confirm your appointment. Your information is
                  never shared with third parties.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Contact details */}
            <div className="rounded-2xl bg-secondary px-7 py-8 flex flex-col gap-6">
              <h2 className="font-heading font-semibold text-lg text-white">
                Contact Information
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <Phone size={17} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">
                      Phone / WhatsApp
                    </p>
                    {/* PLACEHOLDER -- replace before handoff */}
                    <a
                      href="tel:+923000000000"
                      className="text-white text-sm font-medium hover:text-accent transition-colors"
                    >
                      +92 300 0000000
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={17} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Email</p>
                    {/* PLACEHOLDER -- replace before handoff */}
                    <a
                      href="mailto:hello@dentalavenue.pk"
                      className="text-white text-sm font-medium hover:text-accent transition-colors"
                    >
                      hello@dentalavenue.pk
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={17} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Address</p>
                    {/* PLACEHOLDER -- replace before handoff */}
                    <p className="text-white text-sm font-medium">
                      123 Main Boulevard, Peoples Colony,
                      <br />
                      Faisalabad, Punjab, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={17} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Clinic Hours</p>
                    <p className="text-white text-sm font-medium">
                      Mon - Sat: 10:00 AM - 8:00 PM
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-black/8 h-64">
              <iframe
                title="Dental Avenue Faisalabad location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108879.42888896498!2d73.0151!3d31.4504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922693f0000000b%3A0x6e55e9fe4e98b08f!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
