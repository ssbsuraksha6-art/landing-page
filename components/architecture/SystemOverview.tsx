"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { systemStages } from "@/data/pipeline";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function SystemOverview() {
  const [openId, setOpenId] = useState<string>(systemStages[0].id);

  return (
    <div className="mt-14 rounded-md border border-white/10 bg-white/[0.02]">
      {systemStages.map((stage, i) => {
        const isOpen = openId === stage.id;
        return (
          <div
            key={stage.id}
            className={cn("border-white/10", i !== 0 && "border-t")}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? "" : stage.id)}
              aria-expanded={isOpen}
              aria-controls={`stage-panel-${stage.id}`}
              className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-8"
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border font-mono text-xs font-semibold transition-colors",
                  isOpen ? "border-cyan-400 text-cyan-300" : "border-white/15 text-white/50",
                )}
                aria-hidden
              >
                {String(stage.index).padStart(2, "0")}
              </span>

              <span className="flex-1">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className={cn("font-display text-base font-bold sm:text-lg", isOpen ? "text-white" : "text-white/85")}>
                    {stage.title}
                  </span>
                  {stage.status === "development" && (
                    <StatusBadge status="development" tone="dark" />
                  )}
                </span>
                <span className="mt-1 hidden text-sm text-white/50 sm:block">{stage.short}</span>
              </span>

              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-white/40 transition-transform duration-300",
                  isOpen && "rotate-180 text-cyan-300",
                )}
                aria-hidden
              />
            </button>

            <div
              id={`stage-panel-${stage.id}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-relaxed text-white/65 sm:px-8 sm:pl-[4.75rem]">
                  {stage.detail}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
