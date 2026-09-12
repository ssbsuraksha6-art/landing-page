import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contextItems } from "@/data/context";

export function MissionContext() {
  return (
    <Section id="context" tone="light">
      <SectionHeading
        kicker="Mission Context"
        title="Grounded in SSB's actual border-security mandate."
        description="Verified institutional facts, not manufactured news — cited to their official source."
      />

      <Reveal className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-md border border-navy-900/10">
        <Image
          src="/assets/context/border-patrol.jpg"
          alt="SSB personnel on frontier patrol"
          fill
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
        <p className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
          Illustrative — SSB personnel on frontier patrol
        </p>
      </Reveal>

      <div className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
        {contextItems.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i * 0.04}
            className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-navy-500/60">{item.date}</p>
            <div>
              <h3 className="font-display text-base font-bold text-navy-950 sm:text-lg">{item.headline}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-700/70">{item.relevance}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-cyan-600/80">
                Source — {item.source}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
