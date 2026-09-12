import { cn } from "@/lib/utils";

type Status = "live" | "development";

const config: Record<Status, { label: string; className: string }> = {
  live: {
    label: "Working / Integrated",
    className: "border-emerald-600/30 bg-emerald-500/10 text-emerald-700",
  },
  development: {
    label: "In Development",
    className: "border-gold-600/40 bg-gold-500/10 text-gold-600",
  },
};

export function StatusBadge({
  status,
  tone = "light",
  className,
}: {
  status: Status;
  tone?: "light" | "dark";
  className?: string;
}) {
  const c = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]",
        tone === "dark" && status === "live" && "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
        tone === "dark" && status === "development" && "border-gold-400/40 bg-gold-400/10 text-gold-300",
        tone === "light" && c.className,
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "live" ? "bg-emerald-500" : "bg-gold-500 animate-pulse-slow",
        )}
        aria-hidden
      />
      {c.label}
    </span>
  );
}
