import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FlowChain } from "@/components/pipeline/FlowChain";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { forensicsFlow, forensicsExamples } from "@/data/flows";
import { diagramSpecs } from "@/data/architecture";

export function DocumentForensics() {
  const diagram = diagramSpecs.find((d) => d.id === "dinov2")!;
  const flow = forensicsFlow.map((s, i) => (i > 0 ? { ...s, development: true } : s));

  return (
    <Section id="forensics" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-4">
          <SectionHeading
            tone="dark"
            kicker="AI Pipeline — Document Forensics"
            title="Detecting known ways a genuine document can be altered."
            description="Detect whether a document has been altered, identify the manipulation type, and localise the suspicious region."
            className="flex-1"
          />
          <StatusBadge status="development" tone="dark" />
        </div>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {forensicsExamples.map((ex) => (
            <span
              key={ex}
              className="rounded-sm border border-gold-400/25 bg-gold-400/[0.06] px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-gold-300"
            >
              {ex}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="mt-8 overflow-x-auto rounded-md border border-white/10 bg-white/[0.02] p-7 sm:p-9">
          <FlowChain steps={flow} tone="dark" />
        </Reveal>

        <Reveal delay={0.12} className="mt-6 rounded-md border border-gold-400/25 bg-gold-400/[0.05] p-6">
          <p className="text-sm leading-relaxed text-white/70">
            <strong className="text-gold-300">In development.</strong> DINOv2-based forensic
            classification is a planned component of SSB Suraksha and is not yet part of the
            deployed screening pipeline. It is shown here to communicate the intended architecture.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <DiagramPlaceholder
              id="diagram-dinov2"
              label={diagram.label}
              title={diagram.title}
              description={diagram.description}
              tone="dark"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
