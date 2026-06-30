import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Root Canal Treatment in Faisalabad | Dental Avenue",
  description:
    "Comfortable, precise root canal therapy at Dental Avenue Faisalabad. Save your natural tooth and eliminate pain with our experienced dental team.",
};

const whatToExpect = [
  "We begin with an X-ray to see the full shape of the root canals and check for any signs of infection in the surrounding bone.",
  "Local anaesthetic is applied and given time to fully numb the area. You should feel no pain during the procedure -- only light pressure.",
  "A small opening is made in the tooth crown to access the pulp chamber. The infected or damaged pulp is carefully removed using fine instruments.",
  "The canals are cleaned, shaped, and irrigated with an antibacterial solution to remove any remaining bacteria.",
  "The cleaned canals are filled with a biocompatible material called gutta-percha and sealed. A temporary or permanent crown is then placed to protect the tooth.",
  "Most root canals are completed in one or two visits. Mild soreness for a day or two after is normal and manageable with standard pain relief.",
];

const trustPoints = [
  {
    icon: "Zap",
    title: "Pain-Free with Local Anaesthetic",
    desc: "Modern anaesthesia means root canals are no more uncomfortable than a standard filling. We wait until you are fully numb before starting.",
  },
  {
    icon: "ShieldCheck",
    title: "Sterile, Single-Use Instruments",
    desc: "All root canal files and irrigation needles are single-use and disposed of after your treatment. No cross-contamination risk.",
  },
  {
    icon: "UserCheck",
    title: "Experienced Clinical Team",
    desc: "Our dentists have performed hundreds of root canal procedures across a wide range of complexity levels -- straightforward or multi-rooted.",
  },
];

export default function RootCanalPage() {
  return (
    <ServicePageLayout
      title="Root Canal Treatment"
      intro="A pain-managed procedure to treat infected or severely decayed tooth pulp, saving the natural tooth instead of extracting it."
      image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80"
      imageAlt="Root canal treatment procedure at Dental Avenue Faisalabad"
      whatToExpect={whatToExpect}
      trustPoints={trustPoints}
      priceRange="PKR 8,000 - 18,000"
      ctaHeading="Tooth Pain? Don't Wait."
      ctaSubtext="Early treatment saves your tooth and stops the infection spreading. Book a same-day assessment at Dental Avenue."
    />
  );
}
