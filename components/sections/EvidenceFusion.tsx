import { ArrowDown, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { fusionInputs, riskBands } from "@/data/flows";
import { diagramSpecs } from "@/data/architecture";
import { cn } from "@/lib/utils";

const bandStyles = {
  low: "border-status-low/40 bg-status-low/10 text-status-low",
  review: "border-status-review/40 bg-status-review/10 text-status-review",
  high: "border-status-high/40 bg-status-high/10 text-status-high",
} as const;

export function EvidenceFusion() {
  const diagram = diagramSpecs.find((d) => d.id === "fusion")!;

  return (
    <Section id="fusion" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <SectionHeading
          tone="dark"
          kicker="Evidence Fusion / Risk"
          title="Every signal feeds one explainable risk score."
          description="AI provides evidence and risk assessment. The SSB officer makes the final operational decision."
        />

        <div className="mt-14 flex flex-col items-center gap-6">
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {fusionInputs.map((input) => (
              <Reveal
                key={input.id}
                className={cn(
                  "rounded-sm border px-3 py-3 text-center",
                  input.status === "development"
                    ? "border-dashed border-gold-400/35 bg-gold-400/[0.05]"
                    : "border-white/15 bg-white/[0.03]",
                )}
              >
                <p className="font-mono text-[11px] font-semibold uppercase leading-tight tracking-[0.06em] text-white/85">
                  {input.label}
                </p>
              </Reveal>
            ))}
          </div>

          <ArrowDown className="h-5 w-5 text-cyan-400/60" aria-hidden />

          <Reveal className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">
              LightGBM Evidence Fusion
            </p>
          </Reveal>

          <ArrowDown className="h-5 w-5 text-cyan-400/60" aria-hidden />

          <Reveal className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Risk Score
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {riskBands.map((band, i) => (
              <Reveal
                key={band.id}
                delay={i * 0.06}
                className={cn("rounded-md border p-5 text-center", bandStyles[band.color])}
              >
                <p className="font-mono text-sm font-bold uppercase tracking-[0.14em]">{band.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{band.description}</p>
              </Reveal>
            ))}
          </div>

          <ArrowDown className="h-5 w-5 text-cyan-400/60" aria-hidden />

          <Reveal className="flex items-center gap-3 rounded-md border border-white/15 bg-white/[0.03] px-8 py-4">
            <ShieldCheck className="h-5 w-5 text-cyan-300" strokeWidth={1.5} aria-hidden />
            <p className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-white">
              SSB Officer
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <DiagramPlaceholder
              id="diagram-fusion"
              label={diagram.label}
              title={diagram.title}
              description={diagram.description}
              tone="dark"
              src="/assets/diagrams/risk-fusion.png"
              aspect="aspect-[4/3] sm:aspect-[16/9]"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
