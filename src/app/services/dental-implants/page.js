import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Dental Implants in Faisalabad | Dental Avenue",
  description:
    "Permanent, natural-looking dental implants at Dental Avenue Faisalabad. Restore your bite, confidence, and smile with titanium implants and custom crowns.",
};

const whatToExpect = [
  "We start with a detailed consultation including X-rays and a 3D assessment of your jawbone. This tells us whether you have sufficient bone density for an implant or whether a bone graft is needed first.",
  "On the day of surgery, local anaesthetic is applied and a small titanium post is placed precisely into the jawbone. The procedure takes 30 to 60 minutes per implant and is not painful.",
  "The implant is left to fuse with the bone over a healing period of 8 to 12 weeks. During this time a temporary crown can be fitted so the gap is never visible.",
  "Once osseointegration is confirmed, an abutment is attached to the implant post. This is the connector piece that will hold your permanent crown.",
  "A custom porcelain crown, matched to the colour and shape of your natural teeth, is fitted onto the abutment. It looks, feels, and functions exactly like a real tooth.",
  "With proper brushing, flossing, and regular checkups, implants can last 20 years or more. We provide a full aftercare plan at handover.",
];

const trustPoints = [
  {
    icon: "Gem",
    title: "Custom-Matched Porcelain Crowns",
    desc: "Each crown is shade-matched and shaped to blend seamlessly with your surrounding teeth. No one will know it is an implant.",
  },
  {
    icon: "ShieldCheck",
    title: "Surgical-Grade Sterile Environment",
    desc: "Implant surgery requires the highest sterilization standards. We use a fully sterile setup with single-use surgical kits for every procedure.",
  },
  {
    icon: "UserCheck",
    title: "End-to-End Care in One Clinic",
    desc: "Assessment, surgery, healing reviews, and crown fitting all happen at Dental Avenue. No referrals to external specialists.",
  },
];

export default function DentalImplantsPage() {
  return (
    <ServicePageLayout
      title="Dental Implants"
      intro="Permanent, natural-looking replacements for missing teeth, restoring full bite function and confidence."
      image="https://images.unsplash.com/photo-1598256989014-93a25d7d7350?w=900&q=80"
      imageAlt="Dental implant consultation and placement at Dental Avenue Faisalabad"
      whatToExpect={whatToExpect}
      trustPoints={trustPoints}
      priceRange="PKR 55,000 - 95,000"
      ctaHeading="Replace a Missing Tooth for Good"
      ctaSubtext="Book an implant consultation at Dental Avenue and get a full treatment plan with honest costs -- no surprises."
    />
  );
}
