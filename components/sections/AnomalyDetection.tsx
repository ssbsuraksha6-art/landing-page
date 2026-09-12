import { ArrowRight, ShieldQuestion, Fingerprint } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { diagramSpecs } from "@/data/architecture";

export function AnomalyDetection() {
  const diagram = diagramSpecs.find((d) => d.id === "patchcore")!;

  return (
    <Section id="anomaly" tone="light">
      <div className="flex flex-wrap items-center gap-4">
        <SectionHeading
          kicker="AI Pipeline — Unknown Anomaly Detection"
          title="Catching what forensic training data has never seen before."
          description="DINOv2 recognises known manipulation types it has been trained on. PatchCore is planned to flag unusual, unseen visual patterns even without prior examples of that specific fraud."
          className="flex-1"
        />
        <StatusBadge status="development" />
      </div>

      <div className="mt-14 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
        <Reveal className="rounded-md border border-navy-900/10 bg-white p-7 text-center">
          <Fingerprint className="mx-auto h-6 w-6 text-cyan-600" strokeWidth={1.5} aria-hidden />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-navy-500/70">Known Tampering</p>
          <p className="mt-2 font-display text-lg font-bold text-navy-950">DINOv2</p>
        </Reveal>

        <ArrowRight className="mx-auto hidden h-5 w-5 rotate-90 text-navy-900/25 sm:block sm:rotate-0" aria-hidden />

        <Reveal delay={0.06} className="rounded-md border border-dashed border-gold-500/40 bg-gold-500/[0.04] p-7 text-center">
          <ShieldQuestion className="mx-auto h-6 w-6 text-gold-600" strokeWidth={1.5} aria-hidden />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-navy-500/70">Unknown Anomaly</p>
          <p className="mt-2 font-display text-lg font-bold text-navy-950">PatchCore</p>
        </Reveal>
      </div>

      <div className="mt-4 flex justify-center">
        <ArrowRight className="h-5 w-5 rotate-90 text-navy-900/25" aria-hidden />
      </div>

      <Reveal delay={0.1} className="mx-auto mt-4 max-w-xs rounded-md border border-navy-900/15 bg-navy-950 p-5 text-center">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
          Evidence Fusion
        </p>
      </Reveal>

      <Reveal delay={0.14} className="mx-auto mt-8 max-w-2xl rounded-md border border-gold-500/30 bg-gold-500/[0.05] p-6 text-center">
        <p className="text-sm leading-relaxed text-navy-800/80">
          <strong className="text-gold-700">In development.</strong> PatchCore-based anomaly
          detection is a planned component and is not yet part of the deployed screening pipeline.
        </p>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <DiagramPlaceholder
            id="diagram-patchcore"
            label={diagram.label}
            title={diagram.title}
            description={diagram.description}
            tone="light"
            src="/assets/diagrams/patchcore.png"
            aspect="aspect-[16/10] sm:aspect-[2/1]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
