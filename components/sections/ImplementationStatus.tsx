import { CheckCircle2, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { workingComponents, developmentComponents } from "@/data/status";

export function ImplementationStatus() {
  return (
    <Section id="status" tone="light">
      <SectionHeading
        kicker="Current Implementation Status"
        title="An honest account of what runs today, and what's still ahead."
        description="We distinguish clearly between what is working and integrated today, and what remains in development — this is engineering maturity, not weakness."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="rounded-md border border-emerald-600/20 bg-emerald-50/60 p-7 sm:p-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
            Working / Integrated
          </p>
          <ul className="mt-5 space-y-3">
            {workingComponents.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-navy-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06} className="rounded-md border border-gold-500/25 bg-gold-50/50 p-7 sm:p-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
            In Development
          </p>
          <ul className="mt-5 space-y-3">
            {developmentComponents.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-navy-800">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
