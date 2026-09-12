"use client";

import { useEffect, useState } from "react";
import { FileText, ScanEye, Layers, Gauge, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "document", label: "Document", icon: FileText },
  { id: "screening", label: "AI Screening", icon: ScanEye },
  { id: "evidence", label: "Evidence", icon: Layers },
  { id: "risk", label: "Risk", icon: Gauge },
  { id: "decision", label: "Officer Decision", icon: ShieldCheck },
];

export function HeroFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setInterval(() => setActive((v) => (v + 1) % nodes.length), 1700);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative flex flex-col gap-0"
      role="img"
      aria-label="Screening flow: Document, then AI Screening, then Evidence, then Risk, then Officer Decision"
    >
      {nodes.map((node, i) => {
        const Icon = node.icon;
        const isActive = i === active;
        const isPast = i < active;
        return (
          <div key={node.id} className="relative flex items-stretch gap-4">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border transition-all duration-500",
                  isActive
                    ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_0_4px_rgba(34,184,207,0.12)]"
                    : isPast
                      ? "border-cyan-400/30 bg-cyan-400/5"
                      : "border-white/15 bg-white/[0.03]",
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors duration-500",
                    isActive ? "text-cyan-300" : isPast ? "text-cyan-400/50" : "text-white/40",
                  )}
                  strokeWidth={1.6}
                  aria-hidden
                />
              </span>
              {i < nodes.length - 1 && (
                <span
                  className={cn(
                    "my-1 w-px flex-1 transition-colors duration-700",
                    isPast ? "bg-cyan-400/40" : "bg-white/10",
                  )}
                  style={{ minHeight: "28px" }}
                  aria-hidden
                />
              )}
            </div>
            <div className={cn("pb-7 pt-2.5", i === nodes.length - 1 && "pb-0")}>
              <p
                className={cn(
                  "font-mono text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-500",
                  isActive ? "text-white" : "text-white/50",
                )}
              >
                {node.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
