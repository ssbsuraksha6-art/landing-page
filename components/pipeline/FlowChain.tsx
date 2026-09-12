import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FlowStep } from "@/data/flows";

export function FlowChain({
  steps,
  direction = "horizontal",
  tone = "dark",
  size = "md",
  className,
}: {
  steps: (FlowStep & { development?: boolean })[];
  direction?: "horizontal" | "vertical";
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
}) {
  const Arrow = direction === "horizontal" ? ArrowRight : ArrowDown;

  return (
    <div
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-wrap items-center gap-x-2 gap-y-4" : "flex-col items-start gap-1",
        className,
      )}
    >
      {steps.map((step, i) => (
        <div key={step.id} className={cn("flex items-center", direction === "vertical" && "w-full flex-col")}>
          <FlowNode step={step} tone={tone} size={size} />
          {i < steps.length - 1 && (
            <Arrow
              className={cn(
                direction === "horizontal" ? "mx-1 h-4 w-4 shrink-0 sm:mx-2" : "my-1 h-4 w-4 shrink-0",
                tone === "dark" ? "text-cyan-400/50" : "text-cyan-600/50",
              )}
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function FlowNode({
  step,
  tone = "dark",
  size = "md",
}: {
  step: FlowStep & { development?: boolean };
  tone?: "dark" | "light";
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "rounded-sm border text-center leading-tight",
        size === "md" ? "px-3.5 py-2.5" : "px-2.5 py-1.5",
        step.development
          ? tone === "dark"
            ? "border-dashed border-gold-400/40 bg-gold-400/5"
            : "border-dashed border-gold-500/50 bg-gold-500/5"
          : tone === "dark"
            ? "border-white/15 bg-white/[0.04]"
            : "border-navy-900/12 bg-white",
      )}
    >
      <p
        className={cn(
          "font-mono font-semibold",
          size === "md" ? "text-[12px]" : "text-[11px]",
          tone === "dark" ? "text-white" : "text-navy-950",
        )}
      >
        {step.label}
      </p>
      {step.sublabel && (
        <p className={cn("mt-0.5 text-[10px]", tone === "dark" ? "text-white/50" : "text-navy-700/60")}>
          {step.sublabel}
        </p>
      )}
    </div>
  );
}
