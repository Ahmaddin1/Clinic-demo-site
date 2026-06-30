import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Scaling & Polishing in Faisalabad | Dental Avenue",
  description:
    "Professional teeth scaling and polishing at Dental Avenue Faisalabad. Remove plaque and tartar, brighten your smile, and protect your gum health.",
};

const whatToExpect = [
  "You settle into the chair and we do a quick visual check of your teeth and gums before we begin -- no surprises.",
  "Using an ultrasonic scaler, we gently break up and remove hardened tartar and plaque from above and below the gumline. You will feel vibration and water, not pain.",
  "A fine polishing paste is applied with a soft rotating brush, buffing away surface stains and leaving teeth smooth and noticeably brighter.",
  "We finish with a rinse and a quick assessment of your gum health, then share any tips specific to your teeth.",
  "Most appointments take 30 to 45 minutes. You can eat and drink normally straight after.",
];

const trustPoints = [
  {
    icon: "ShieldCheck",
    title: "Sterilized Instruments",
    desc: "Every scaler and polishing tool is individually sterilized in an autoclave between patients. No shared instruments, ever.",
  },
  {
    icon: "Sparkles",
    title: "Gentle, Pain-Managed Approach",
    desc: "Sensitive teeth? We adjust the scaler intensity and can apply a topical desensitizer before starting so you stay comfortable throughout.",
  },
  {
    icon: "Clock",
    title: "Quick, No-Fuss Appointments",
    desc: "Most scaling and polishing sessions are done in under 45 minutes. Same-day slots are often available -- just call or book online.",
  },
];

export default function ScalingPolishingPage() {
  return (
    <ServicePageLayout
      title="Scaling & Polishing"
      intro="A thorough professional cleaning that removes plaque and tartar buildup, leaving teeth smoother, brighter, and gums healthier."
      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80"
      imageAlt="Dental scaling and polishing procedure at Dental Avenue Faisalabad"
      whatToExpect={whatToExpect}
      trustPoints={trustPoints}
      priceRange="PKR 2,000 - 4,000"
      ctaHeading="Ready for a Cleaner, Brighter Smile?"
      ctaSubtext="Book a scaling and polishing session at Dental Avenue -- same-day appointments often available."
    />
  );
}
