import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Tooth Extraction in Faisalabad | Dental Avenue",
  description:
    "Safe, gentle tooth extraction at Dental Avenue Faisalabad. Clear aftercare guidance and same-day appointments available for urgent cases.",
};

const whatToExpect = [
  "We start with an X-ray to see the full root shape and confirm the extraction is the right course of action -- we only extract when there is no better option.",
  "Local anaesthetic is injected around the tooth. We wait for it to take full effect before proceeding -- you will feel pressure but not pain.",
  "For a simple extraction, the tooth is loosened with a dental elevator and removed with forceps. The whole step typically takes under five minutes.",
  "For impacted or surgical extractions (e.g. wisdom teeth), a small incision may be needed to access the tooth. We walk you through this beforehand.",
  "Gauze is placed over the socket and you bite down for 20 to 30 minutes to help the clot form. We give you a printed aftercare sheet covering diet, hygiene, and signs to watch for.",
  "Most patients are comfortable within 24 to 48 hours. We are always available by phone if you have concerns.",
];

const trustPoints = [
  {
    icon: "ShieldCheck",
    title: "Gentle Extraction Technique",
    desc: "We use controlled, minimal-force techniques designed to preserve the surrounding bone and tissue for faster, cleaner healing.",
  },
  {
    icon: "BookOpen",
    title: "Clear Aftercare Guidance",
    desc: "Every patient leaves with written aftercare instructions covering what to eat, what to avoid, and when to call us -- no guessing.",
  },
  {
    icon: "HeartHandshake",
    title: "Same-Day Urgent Slots",
    desc: "Severe toothache or a broken tooth that can't wait? We keep same-day slots for urgent extractions. Call us in the morning.",
  },
];

export default function ToothExtractionPage() {
  return (
    <ServicePageLayout
      title="Tooth Extraction"
      intro="Safe, careful removal of damaged, impacted, or non-restorable teeth with clear aftercare guidance."
      image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80"
      imageAlt="Tooth extraction procedure at Dental Avenue Faisalabad"
      whatToExpect={whatToExpect}
      trustPoints={trustPoints}
      priceRange="PKR 1,500 - 6,000"
      ctaHeading="Need an Extraction? We Make It Simple."
      ctaSubtext="Same-day slots available for urgent cases. Book at Dental Avenue Faisalabad and leave the worry behind."
    />
  );
}
