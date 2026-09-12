import { WifiOff, Zap, Layers, Puzzle, UserCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowChain } from "@/components/pipeline/FlowChain";
import { principles } from "@/data/project";

const principleIcons = {
  offline: WifiOff,
  fast: Zap,
  evidence: Layers,
  modular: Puzzle,
  officer: UserCheck,
} as const;

const solutionFlow = [
  { id: "input", label: "Input", sublabel: "Document + Live Photo" },
  { id: "screening", label: "AI Screening" },
  { id: "evidence", label: "Evidence" },
  { id: "risk", label: "Risk Assessment" },
  { id: "decision", label: "SSB Officer Decision" },
];

export function Solution() {
  return (
    <Section id="solution" tone="dark" className="bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div className="relative">
        <SectionHeading
          tone="dark"
          kicker="Our Solution"
          title="SSB Suraksha turns a document and a face into a decision an officer can trust."
          description="A single, consistent pipeline takes a document image and a live photograph, screens both, and returns evidence and a risk score — the officer decides."
        />

        <Reveal className="mt-14 overflow-x-auto rounded-md border border-white/10 bg-white/[0.02] p-7 sm:p-9">
          <FlowChain steps={solutionFlow} tone="dark" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {principles.map((p, i) => {
            const Icon = principleIcons[p.key as keyof typeof principleIcons];
            return (
              <Reveal key={p.key} delay={i * 0.05} className="bg-navy-950 p-6">
                <Icon className="h-5 w-5 text-cyan-400" strokeWidth={1.5} aria-hidden />
                <h4 className="mt-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                  {p.title}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{p.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
