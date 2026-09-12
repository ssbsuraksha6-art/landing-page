import { ArrowRight, Clock3, ListChecks, WifiOff, UserCog } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { problems, operationalConstraints } from "@/data/problem";

const constraintIcons = {
  "manual-effort": UserCog,
  time: Clock3,
  consistency: ListChecks,
  connectivity: WifiOff,
} as const;

export function Problem() {
  return (
    <Section id="problem" tone="paper">
      <SectionHeading
        kicker="The Challenge"
        title="Identity fraud is a frontline border-security problem."
        description="Officers at screening posts must judge documents and identities quickly, consistently, and often without connectivity — a task where manual review alone struggles to keep pace."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
        {problems.map((p, i) => (
          <Reveal key={p.key} delay={i * 0.06} className="group bg-paper-100 p-7 transition-colors hover:bg-white sm:p-9">
            <span className="font-mono text-xs text-navy-900/30">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-xl font-bold text-navy-950 sm:text-2xl">{p.title}</h3>
            <div className="mt-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-status-high">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              {p.consequence}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-700/75">{p.description}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-navy-900/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {operationalConstraints.map((c, i) => {
          const Icon = constraintIcons[c.key as keyof typeof constraintIcons];
          return (
            <Reveal key={c.key} delay={i * 0.05}>
              <Icon className="h-5 w-5 text-cyan-600" strokeWidth={1.5} aria-hidden />
              <h4 className="mt-3 font-display text-[15px] font-bold text-navy-950">{c.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{c.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
