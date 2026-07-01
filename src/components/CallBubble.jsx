import { Phone } from "lucide-react";

export default function CallBubble() {
  return (
    <a
      href="tel:+15551234567"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-orange-600 md:hidden"
      aria-label="Call +1 (555) 123-4567"
      title="+1 (555) 123-4567"
    >
      <Phone size={24} aria-hidden="true" />
    </a>
  );
}
