export type ButtonVariant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent font-semibold text-white shadow-sm hover:brightness-110 active:brightness-95 dark:text-[#04150d]",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-accent-line hover:text-accent",
  ghost: "bg-surface text-muted hover:text-accent hover:border hover:border-accent-line",
};

export function buttonClass(variant: ButtonVariant, extra = ""): string {
  return `${base} ${variants[variant]} ${extra}`.trim();
}
