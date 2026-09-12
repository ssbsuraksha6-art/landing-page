import { Gauge, ListChecks, ShieldAlert, FileSearch, WifiOff, Network } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { impactThemes } from "@/data/why";

const icons = {
  faster: Gauge,
  consistent: ListChecks,
  early: ShieldAlert,
  auditable: FileSearch,
  "low-connectivity": WifiOff,
  scalable: Network,
} as const;

export function Impact() {
  return (
    <Section id="impact" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <SectionHeading
          tone="dark"
          kicker="Impact"
          title="What consistent, evidence-driven screening changes."
          description="Qualitative, not fabricated — outcomes stated here reflect intended design goals, not measured field statistics."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {impactThemes.map((theme, i) => {
            const Icon = icons[theme.key as keyof typeof icons];
            return (
              <Reveal key={theme.key} delay={i * 0.05} className="bg-navy-950 p-7">
                <Icon className="h-5 w-5 text-cyan-400" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 font-display text-base font-bold text-white">{theme.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{theme.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
