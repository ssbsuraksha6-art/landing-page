"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, FileImage } from "lucide-react";
import { cn } from "@/lib/utils";

export function DiagramPlaceholder({
  id,
  label,
  title,
  description,
  aspect = "aspect-[16/9]",
  tone = "dark",
  src,
}: {
  id: string;
  label: string;
  title: string;
  description: string;
  aspect?: string;
  tone?: "dark" | "light";
  /** Path to a real diagram image. When omitted, an editorial placeholder is shown instead. */
  src?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={id} className="scroll-mt-24">
      <div
        className={cn(
          "flex flex-wrap items-end justify-between gap-4 border-b pb-4",
          tone === "dark" ? "border-white/10" : "border-navy-900/10",
        )}
      >
        <div>
          <p
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.28em]",
              tone === "dark" ? "text-cyan-400" : "text-cyan-600",
            )}
          >
            {label}
          </p>
          <h3
            className={cn(
              "mt-2 font-display text-xl font-bold sm:text-2xl",
              tone === "dark" ? "text-white" : "text-navy-950",
            )}
          >
            {title}
          </h3>
        </div>
        <p
          className={cn(
            "max-w-md text-sm leading-relaxed",
            tone === "dark" ? "text-white/60" : "text-navy-700/70",
          )}
        >
          {description}
        </p>
      </div>

      {src ? (
        <div
          className={cn(
            "group relative mt-6 w-full overflow-hidden rounded-md border bg-white",
            aspect,
            tone === "dark" ? "border-white/15" : "border-navy-900/12",
          )}
        >
          <Image src={src} alt={title} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain p-4" />
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-navy-900/15 bg-white/90 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-navy-800 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            aria-label={`View full ${title}`}
          >
            <Maximize2 className="h-3 w-3" aria-hidden />
            View full diagram
          </button>
        </div>
      ) : (
        <div
          className={cn(
            "group relative mt-6 w-full overflow-hidden rounded-md border",
            aspect,
            tone === "dark"
              ? "border-white/15 bg-navy-950/60 bg-grid-dark"
              : "border-navy-900/12 bg-paper-100 bg-grid-light",
          )}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
            <FileImage
              className={cn("h-8 w-8", tone === "dark" ? "text-white/25" : "text-navy-900/20")}
              strokeWidth={1.25}
              aria-hidden
            />
            <p
              className={cn(
                "font-mono text-xs font-semibold uppercase tracking-[0.24em]",
                tone === "dark" ? "text-white/40" : "text-navy-900/35",
              )}
            >
              Architecture Diagram
            </p>
            <p
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.2em]",
                tone === "dark" ? "text-white/25" : "text-navy-900/25",
              )}
            >
              Drop final diagram here
            </p>
          </div>

          {/* corner ticks for a technical / blueprint feel */}
          <CornerTicks tone={tone} />

          <button
            type="button"
            onClick={() => setExpanded(true)}
            className={cn(
              "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100",
              tone === "dark"
                ? "border-white/20 bg-navy-950/70 text-white/70 hover:text-white"
                : "border-navy-900/15 bg-white/70 text-navy-800/70 hover:text-navy-950",
            )}
            aria-label={`View full ${title}`}
          >
            <Maximize2 className="h-3 w-3" aria-hidden />
            View full diagram
          </button>
        </div>
      )}

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setExpanded(false)}
        >
          {src ? (
            <div
              className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center overflow-auto rounded-md border border-white/15 bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="absolute right-4 top-4 rounded-sm border border-navy-900/15 bg-white p-1.5 text-navy-800 hover:text-navy-950"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
              <Image src={src} alt={title} width={1800} height={1200} className="h-auto w-full object-contain" />
            </div>
          ) : (
            <div
              className="relative flex aspect-[16/9] w-full max-w-5xl flex-col items-center justify-center gap-3 rounded-md border border-white/15 bg-navy-900 bg-grid-dark text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="absolute right-4 top-4 rounded-sm border border-white/20 p-1.5 text-white/70 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
              <FileImage className="h-10 w-10 text-white/25" strokeWidth={1.25} aria-hidden />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                {title}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
                Drop final diagram here
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CornerTicks({ tone }: { tone: "dark" | "light" }) {
  const c = tone === "dark" ? "border-white/25" : "border-navy-900/20";
  const base = "absolute h-3 w-3";
  return (
    <>
      <span className={cn(base, "left-2 top-2 border-l border-t", c)} aria-hidden />
      <span className={cn(base, "right-2 top-2 border-r border-t", c)} aria-hidden />
      <span className={cn(base, "bottom-2 left-2 border-b border-l", c)} aria-hidden />
      <span className={cn(base, "bottom-2 right-2 border-b border-r", c)} aria-hidden />
    </>
  );
}
