import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book an Appointment | Dental Avenue Faisalabad",
  description:
    "Contact Dental Avenue Faisalabad to book a dental appointment. Call, WhatsApp, or fill in our online form and we will confirm your slot within 2 hours.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dental Avenue Faisalabad",
  url: "https://www.dentalavenue.pk",
  telephone: "+92-300-0000000",
  email: "hello@dentalavenue.pk",
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
  priceRange: "PKR 2,000 - 120,000",
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <ContactForm />
    </>
  );
}
