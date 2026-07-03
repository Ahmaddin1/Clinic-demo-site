import { Phone } from "lucide-react";

export default function CallBubble() {
  return (
    <a
      href="tel:+923000000000"
      className="fixed bottom-15 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-orange-600 md:hidden"
      aria-label="Call Dental Avenue Faisalabad"
      title="+92 300 0000000"
    >
      <Phone size={24} aria-hidden="true" />
    </a>
  );
}
