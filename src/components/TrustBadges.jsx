import { ShieldCheck, Sparkles, CalendarCheck, ReceiptText, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "PMDC Licensed Dentists" },
  { icon: Sparkles, label: "Sterilized Equipment" },
  { icon: CalendarCheck, label: "Same-Day Appointments" },
  { icon: ReceiptText, label: "Transparent Pricing" },
  { icon: Award, label: "10+ Years Serving Faisalabad" },
];

// Duplicate for seamless loop
const items = [...badges, ...badges];

export default function TrustBadges() {
  return (
    <div className="px-4 md:px-8 py-6">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="flex animate-marquee gap-12 w-max">
          {items.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0 text-textDark"
            >
              <Icon size={18} className="text-accent shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
