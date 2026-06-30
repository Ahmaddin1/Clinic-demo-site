import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, name, desc, href, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="group flex flex-col gap-4 p-6 rounded-2xl border border-black/8 bg-primary hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
        <Icon
          size={20}
          className="text-accent group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="font-heading font-semibold text-lg text-textDark">{name}</h3>
      <p className="text-textDark/65 text-sm leading-relaxed flex-1">{desc}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200 w-fit"
      >
        Learn More
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
