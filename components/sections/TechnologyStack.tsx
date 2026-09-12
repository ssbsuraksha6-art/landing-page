import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { techStack, modelRegistry } from "@/data/technology";

export function TechnologyStack() {
  return (
    <Section id="technology" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <SectionHeading
          tone="dark"
          kicker="Technology Stack"
          title="Built from proven, purpose-fit components."
          description="Select a model below to see the specific role it plays in the pipeline."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.04} className="bg-navy-950 p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                {group.title}
              </p>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[13px] text-white/65">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modelRegistry.map((model, i) => (
            <Reveal key={model.id} delay={i * 0.03}>
              <details className="group rounded-md border border-white/10 bg-white/[0.02] px-5 py-4 open:bg-white/[0.04]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold text-white">{model.name}</span>
                  <span className="font-mono text-[10px] text-white/30 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                  <p className="text-[13px] leading-relaxed text-white/60">{model.role}</p>
                  <StatusBadge status={model.status} tone="dark" className="shrink-0" />
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
