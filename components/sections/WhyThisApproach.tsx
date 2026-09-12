import { WifiOff, Layers, Puzzle, Eye, UserCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyCards } from "@/data/why";

const icons = {
  offline: WifiOff,
  "multi-evidence": Layers,
  modular: Puzzle,
  explainable: Eye,
  human: UserCheck,
} as const;

export function WhyThisApproach() {
  return (
    <Section id="why" tone="light">
      <SectionHeading
        kicker="Why SSB Suraksha?"
        title="A design built around real operating conditions."
        align="center"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {whyCards.map((card, i) => {
          const Icon = icons[card.key as keyof typeof icons];
          return (
            <Reveal
              key={card.key}
              delay={i * 0.05}
              className="rounded-md border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-panel"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy-900/10 bg-paper-100">
                <Icon className="h-5 w-5 text-cyan-600" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-[15px] font-bold text-navy-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{card.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
