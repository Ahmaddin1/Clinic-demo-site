import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Frequently Asked Questions | Dental Avenue Faisalabad",
  description:
    "Answers to common questions about dental procedures, pricing, payment plans, emergency appointments, sterilization, and more at Dental Avenue Faisalabad.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are dental procedures painful?", acceptedAnswer: { "@type": "Answer", text: "Most modern dental treatments cause little to no pain. We use local anaesthetic before any procedure that involves the teeth or gums, and we wait until the area is fully numb before starting." } },
    { "@type": "Question", name: "How much do treatments cost at Dental Avenue?", acceptedAnswer: { "@type": "Answer", text: "Costs vary by treatment. A scaling and polishing session starts from PKR 2,000, while more complex work like implants starts from PKR 55,000. We always confirm the exact cost before starting any treatment." } },
    { "@type": "Question", name: "Do you offer payment plans or installments?", acceptedAnswer: { "@type": "Answer", text: "For higher-cost treatments such as braces, implants, and multiple crowns, we can arrange a phased payment schedule. We do not charge interest on in-house payment plans." } },
    { "@type": "Question", name: "How long does a typical appointment take?", acceptedAnswer: { "@type": "Answer", text: "A routine checkup and cleaning takes 30 to 45 minutes. Fillings and extractions are usually done in under an hour. Complex treatments may take 60 to 90 minutes per session." } },
    { "@type": "Question", name: "Do I need to book in advance, or do you accept walk-ins?", acceptedAnswer: { "@type": "Answer", text: "We recommend booking in advance. We keep a small number of same-day slots open each morning for urgent cases such as severe toothache or a broken tooth." } },
    { "@type": "Question", name: "Do you treat children?", acceptedAnswer: { "@type": "Answer", text: "Yes, we see patients of all ages including young children. We recommend bringing children in for their first checkup around age 3 to 4." } },
    { "@type": "Question", name: "What should I do if I have a dental emergency after hours?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp or call us on our clinic number — we monitor urgent messages outside hours. For life-threatening situations, go directly to the nearest hospital emergency department." } },
    { "@type": "Question", name: "How do you sterilize your instruments?", acceptedAnswer: { "@type": "Answer", text: "All reusable instruments are sterilized in an autoclave after every single use. Single-use items are disposed of after each patient." } },
    { "@type": "Question", name: "Does health insurance cover dental treatment at your clinic?", acceptedAnswer: { "@type": "Answer", text: "We work with select insurance panels — contact us with your provider details and we will confirm coverage before your appointment." } },
    { "@type": "Question", name: "How often should I come in for a checkup?", acceptedAnswer: { "@type": "Answer", text: "For most healthy adults, every 6 to 12 months is appropriate. We will give you a specific recall interval based on your actual risk level at your first visit." } },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQAccordion />
    </>
  );
}
