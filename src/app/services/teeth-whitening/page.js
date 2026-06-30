import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Teeth Whitening in Faisalabad | Dental Avenue",
  description:
    "Professional in-chair teeth whitening at Dental Avenue Faisalabad. Visibly brighter results in a single visit using safe, clinic-grade whitening gel.",
};

const whatToExpect = [
  "We begin with a quick assessment of your current tooth shade and note any existing restorations like crowns or veneers, which do not whiten -- we flag this so your expectations are realistic.",
  "A protective barrier is applied to your gums to shield them from the whitening gel. This takes about two minutes and prevents any sensitivity to the soft tissue.",
  "A professional-grade hydrogen peroxide gel is applied evenly across the front surface of your teeth. The concentration is stronger than any over-the-counter product.",
  "The gel is activated and left to work for 15 to 20 minutes, then removed and reapplied for a second or third pass depending on your starting shade and target.",
  "The full session takes about 60 to 90 minutes. You will leave with teeth several shades lighter. Results are immediate and visible as soon as you rinse.",
  "We advise avoiding deeply pigmented food and drinks (coffee, tea, red sauce) for 48 hours after treatment to let the enamel pores close and lock in the result.",
];

const trustPoints = [
  {
    icon: "Sun",
    title: "Clinic-Grade Whitening Gel",
    desc: "We use professional-strength whitening agents not available in pharmacies. Faster, more even results with a single in-chair session.",
  },
  {
    icon: "ShieldCheck",
    title: "Gum Protection Throughout",
    desc: "A custom barrier is fitted before any gel is applied. Your gums, lips, and cheeks are fully protected for the entire procedure.",
  },
  {
    icon: "Clock",
    title: "Done in One Visit",
    desc: "No trays to take home, no waiting weeks for results. The entire treatment is completed in a single 60 to 90 minute appointment.",
  },
];

export default function TeethWhiteningPage() {
  return (
    <ServicePageLayout
      title="Teeth Whitening"
      intro="Safe, in-clinic whitening treatment for a noticeably brighter smile in a single visit."
      image="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80"
      imageAlt="Professional teeth whitening treatment at Dental Avenue Faisalabad"
      whatToExpect={whatToExpect}
      trustPoints={trustPoints}
      priceRange="PKR 8,000 - 15,000"
      ctaHeading="A Brighter Smile in Under Two Hours"
      ctaSubtext="Book a teeth whitening session at Dental Avenue and walk out with visibly whiter teeth the same day."
    />
  );
}
