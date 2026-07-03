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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.4697,
    longitude: 73.0851,
  },
  openingHours: ["Mo-Sa 10:00-20:00"],
  description:
    "PMDC-licensed dental clinic in Faisalabad offering scaling, root canal treatment, extractions, braces, dental implants, and teeth whitening.",
  priceRange: "PKR 2,000 - 120,000",
  areaServed: {
    "@type": "City",
    name: "Faisalabad",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "350",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    { "@type": "Review", author: { "@type": "Person", name: "Ayesha R." }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "The team made me feel completely at ease. My scaling and polishing was done quickly and my teeth feel incredible. I won't go anywhere else." },
    { "@type": "Review", author: { "@type": "Person", name: "Usman K." }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "I was terrified of root canals but the dentist explained every step. Zero pain, zero surprises on the bill. Absolutely recommend Dental Avenue." },
    { "@type": "Review", author: { "@type": "Person", name: "Sana M." }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Got my braces fitted here and the follow-up care has been outstanding. The clinic is spotless and the staff are so welcoming." },
    { "@type": "Review", author: { "@type": "Person", name: "Bilal H." }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Needed an urgent extraction and they fit me in the same day. Professional, gentle, and the pricing was exactly what they quoted upfront." },
    { "@type": "Review", author: { "@type": "Person", name: "Fatima N." }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Teeth whitening results were better than I expected. Done in under an hour and the difference is genuinely noticeable. Very happy." },
    { "@type": "Review", author: { "@type": "Person", name: "Hamza T." }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Brought my whole family here for checkups. The kids were completely comfortable which says everything. Highly trust this clinic." },
  ],
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
