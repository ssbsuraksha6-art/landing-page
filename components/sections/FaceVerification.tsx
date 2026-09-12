import { FileText, Camera, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowChain } from "@/components/pipeline/FlowChain";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { faceFlowSteps, faceFlowTail } from "@/data/flows";
import { diagramSpecs } from "@/data/architecture";

export function FaceVerification() {
  const diagram = diagramSpecs.find((d) => d.id === "face")!;

  return (
    <Section id="face-verification" tone="paper">
      <SectionHeading
        kicker="AI Pipeline — Face Verification"
        title="Confirming the person in front of the officer matches the document."
        description="This is 1:1 verification — checking one face against one document portrait — not an open-ended identity search across a database."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="rounded-md border border-navy-900/10 bg-white p-7">
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-600">
            <FileText className="h-4 w-4" aria-hidden />
            Document Face
          </div>
          <FlowChain steps={faceFlowSteps} tone="light" direction="vertical" size="sm" />
        </Reveal>
        <Reveal delay={0.06} className="rounded-md border border-navy-900/10 bg-white p-7">
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-600">
            <Camera className="h-4 w-4" aria-hidden />
            Live Face
          </div>
          <FlowChain steps={faceFlowSteps} tone="light" direction="vertical" size="sm" />
        </Reveal>
      </div>

      <Reveal className="relative mt-6 flex flex-col items-center gap-4 rounded-md border border-navy-900/10 bg-navy-950 p-8 sm:flex-row sm:justify-center">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
          <span>Document Embedding</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </div>
        <FlowChain steps={faceFlowTail} tone="dark" size="md" />
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
          <ArrowRight className="hidden h-3.5 w-3.5 rotate-180 sm:block" aria-hidden />
          <span>Live Embedding</span>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-6 text-center text-sm text-navy-700/60">
        A cosine-similarity score above the calibrated threshold is reported as a <strong className="text-navy-900">match</strong>; below it, the case is flagged for <strong className="text-navy-900">review</strong>.
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <DiagramPlaceholder
            id="diagram-face"
            label={diagram.label}
            title={diagram.title}
            description={diagram.description}
            tone="light"
            src="/assets/diagrams/face-verification.png"
            aspect="aspect-[4/3] sm:aspect-[16/9]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
