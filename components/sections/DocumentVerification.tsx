import { ScanLine, FileText, QrCode } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowChain } from "@/components/pipeline/FlowChain";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { documentMainFlow, mrzBranch, qrBranch } from "@/data/flows";
import { diagramSpecs } from "@/data/architecture";

export function DocumentVerification() {
  const ocrDiagram = diagramSpecs.find((d) => d.id === "ocr-mrz-qr")!;

  return (
    <Section id="ai-pipeline" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <SectionHeading
          tone="dark"
          kicker="AI Pipeline — Document Verification"
          title="From a photograph to structured, checkable data."
          description="Detection finds where the document is. OCR reads what the document says. MRZ and QR provide additional machine-readable evidence. Validation checks that it all agrees."
        />

        <Reveal className="mt-14 overflow-x-auto rounded-md border border-white/10 bg-white/[0.02] p-7 sm:p-9">
          <FlowChain steps={documentMainFlow} tone="dark" />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-md border border-white/10 bg-white/[0.02] p-7">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">
              <FileText className="h-4 w-4" aria-hidden />
              MRZ Branch
            </div>
            <FlowChain steps={mrzBranch} tone="dark" size="sm" />
          </Reveal>
          <Reveal delay={0.06} className="rounded-md border border-white/10 bg-white/[0.02] p-7">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">
              <QrCode className="h-4 w-4" aria-hidden />
              QR Branch
            </div>
            <FlowChain steps={qrBranch} tone="dark" size="sm" />
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              If the QR code is printed on the reverse of the document, both the front and back images are captured and processed together.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-6 flex items-start gap-4 rounded-md border border-cyan-400/20 bg-cyan-400/[0.04] p-6">
          <ScanLine className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" strokeWidth={1.5} aria-hidden />
          <p className="text-sm leading-relaxed text-white/70">
            Detection finds where the document is. OCR reads what the document says. MRZ / QR
            provide additional machine-readable evidence. Validation checks consistency across all
            three sources before the case moves forward.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <DiagramPlaceholder
              id="diagram-ocr-mrz-qr"
              label={ocrDiagram.label}
              title={ocrDiagram.title}
              description={ocrDiagram.description}
              tone="dark"
              src="/assets/diagrams/ocr-mrz-qr.png"
              aspect="aspect-[4/3] sm:aspect-[16/9]"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
