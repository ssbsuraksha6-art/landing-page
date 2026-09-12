import { Wifi, WifiOff } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowChain } from "@/components/pipeline/FlowChain";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { offlineStack, onlineStack, offlineCapabilities, onlineCapabilities } from "@/data/flows";
import { diagramSpecs } from "@/data/architecture";

export function Deployment() {
  const diagram = diagramSpecs.find((d) => d.id === "deployment")!;

  return (
    <Section id="deployment" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-4">
          <SectionHeading
            tone="dark"
            kicker="Offline-First Architecture"
            title="Core screening should not depend on internet connectivity."
            description="AI inference and evidence generation run entirely on the local device. Connectivity is used only to synchronise afterward."
            className="flex-1"
          />
          <span className="rounded-sm border border-gold-400/30 bg-gold-400/[0.06] px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300">
            Target Deployment Architecture
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-md border border-white/10 bg-white/[0.02] p-7">
            <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">
              <WifiOff className="h-4 w-4" aria-hidden />
              Offline — On-Device
            </div>
            <FlowChain steps={offlineStack} direction="vertical" tone="dark" size="sm" />
            <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
              {offlineCapabilities.map((c) => (
                <li key={c} className="font-mono text-[11px] text-white/55">
                  · {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="rounded-md border border-white/10 bg-white/[0.02] p-7">
            <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">
              <Wifi className="h-4 w-4" aria-hidden />
              Online — When Available
            </div>
            <FlowChain steps={onlineStack} direction="vertical" tone="dark" size="sm" />
            <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
              {onlineCapabilities.map((c) => (
                <li key={c} className="font-mono text-[11px] text-white/55">
                  · {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <DiagramPlaceholder
              id="diagram-deployment"
              label={diagram.label}
              title={diagram.title}
              description={diagram.description}
              tone="dark"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
