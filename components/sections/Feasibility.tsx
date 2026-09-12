import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { maturityPath } from "@/data/status";

const feasibilityPoints = [
  "Built on existing, well-validated pretrained models",
  "Modular architecture — components upgrade independently",
  "Edge-compatible inference strategy from the outset",
  "Deterministic, auditable validation rules",
  "Offline-capable local storage",
  "Incremental deployment without redesigning the application",
];

export function Feasibility() {
  return (
    <Section id="feasibility" tone="paper">
      <SectionHeading
        kicker="Feasibility"
        title="A realistic path from prototype to field deployment."
        description="Every stage builds on proven, replaceable components rather than a single fragile breakthrough."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {feasibilityPoints.map((point) => (
            <div key={point} className="rounded-md border border-navy-900/10 bg-white px-4 py-3.5 text-sm text-navy-800">
              {point}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="rounded-md border border-navy-900/10 bg-navy-950 p-7 sm:p-9">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Maturity Path
          </p>
          <ol className="space-y-0">
            {maturityPath.map((step, i) => (
              <li key={step.key} className="relative flex gap-4 pb-7 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 font-mono text-[11px] font-semibold text-cyan-300">
                    {i + 1}
                  </span>
                  {i < maturityPath.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-white/15" style={{ minHeight: "20px" }} aria-hidden />
                  )}
                </div>
                <div className="pt-0.5">
                  <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/55">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
