import { ArrowRight } from "lucide-react";

/**
 * variant: 'primary' | 'outline'
 * onDark: boolean — set true when rendered on a navy (#1B3A6B) background
 * arrow: boolean — shows trailing ArrowRight icon
 */
export default function Button({
  children,
  variant = "primary",
  onDark = false,
  arrow = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-heading transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-accent text-white hover:bg-orange-600",
    outline: onDark
      ? "border border-white text-white hover:bg-white/10"
      : "border border-accent text-accent hover:bg-accent/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <ArrowRight size={16} />}
    </button>
  );
}
