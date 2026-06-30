import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import HowBookingWorks from "@/components/HowBookingWorks";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Dental Avenue Faisalabad | Expert Dental Care",
  description:
    "PMDC-licensed dentists in Faisalabad offering scaling, root canals, implants, braces, extractions, and teeth whitening. Book your appointment today.",
};

// PLACEHOLDER structured data -- update address, telephone, and url before client handoff
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dental Avenue Faisalabad",
  url: "https://www.dentalavenue.pk",
  telephone: "+92-300-0000000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Boulevard, Peoples Colony",
    addressLocality: "Faisalabad",
    addressRegion: "Punjab",
    postalCode: "38000",
    addressCountry: "PK",
  },
  openingHours: ["Mo-Sa 10:00-20:00"],
  description:
    "PMDC-licensed dental clinic in Faisalabad offering scaling, root canal treatment, extractions, braces, dental implants, and teeth whitening.",
  priceRange: "PKR 2,000 - 120,000",
  areaServed: {
    "@type": "City",
    name: "Faisalabad",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBadges />
      <StatsSection />
      <AboutPreview />
      <ServicesPreview />
      <HowBookingWorks />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
