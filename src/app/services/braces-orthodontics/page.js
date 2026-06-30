import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Braces & Orthodontics in Faisalabad | Dental Avenue",
  description:
    "Metal braces, ceramic braces, and clear aligner options at Dental Avenue Faisalabad. Teeth-straightening plans for children and adults. Book a consultation.",
};

const whatToExpect = [
  "Your first visit is a consultation. We take photos, X-rays, and impressions of your teeth so we can map out exactly what movement is needed and how long it will take.",
  "We walk you through your options: traditional metal braces, tooth-coloured ceramic braces, or clear aligners. We explain the pros, cons, and cost of each with no pressure.",
  "On your fitting appointment, brackets are bonded to the teeth and the archwire is threaded through. The process takes about an hour and is painless.",
  "You return every 4 to 6 weeks for adjustments. Each visit is short, usually 15 to 20 minutes. We tighten the wire gradually to keep teeth moving on schedule.",
  "When your teeth reach their final positions, the braces are removed and a retainer is fitted. The retainer is what keeps your results permanent, so wearing it as directed is essential.",
  "Total treatment time varies from 12 months for minor corrections to 24 months or more for complex cases. We give you a realistic timeline at consultation.",
];

const trustPoints = [
  {
    icon: "AlignCenter",
    title: "Multiple Treatment Options",
    desc: "We offer metal, ceramic, and clear aligner options so you can choose the path that fits your lifestyle, visibility preferences, and budget.",
  },
  {
    icon: "UserCheck",
    title: "Experienced Orthodontic Team",
    desc: "Our dentists have treated children, teenagers, and adult patients across a wide range of alignment complexity. Clear milestones, honest timelines.",
  },
  {
    icon: "CalendarCheck",
    title: "Flexible Appointment Scheduling",
    desc: "Adjustment visits are short and we work around school and work schedules. Evening and weekend slots are available for active patients.",
  },
];

export default function BracesOrthodonticsPage() {
  return (
    <ServicePageLayout
      title="Braces & Orthodontics"
      intro="Teeth-straightening treatment plans for children and adults, including traditional braces and modern alignment options."
      image="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80"
      imageAlt="Orthodontic braces treatment at Dental Avenue Faisalabad"
      whatToExpect={whatToExpect}
      trustPoints={trustPoints}
      priceRange="PKR 45,000 - 120,000"
      ctaHeading="Start Your Smile Transformation Today"
      ctaSubtext="Book a free orthodontic consultation at Dental Avenue and get a clear treatment plan and honest timeline."
    />
  );
}
