import { cn } from "@/lib/utils";

export function Kicker({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em]",
        tone === "light" ? "text-cyan-600" : "text-cyan-400",
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-cyan-500" : "bg-cyan-400")}
        aria-hidden
      />
      {children}
    </div>
  );
}
