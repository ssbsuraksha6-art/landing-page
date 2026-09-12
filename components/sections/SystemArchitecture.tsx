import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SystemOverview } from "@/components/architecture/SystemOverview";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { diagramSpecs } from "@/data/architecture";

export function SystemArchitecture() {
  const overall = diagramSpecs.find((d) => d.id === "overall")!;

  return (
    <Section id="system" tone="dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative">
        <SectionHeading
          tone="dark"
          kicker="Complete System Overview"
          title="Ten stages, one continuous chain of evidence."
          description="Each stage produces evidence used by the next. Select a stage to see exactly what it does."
        />

        <Reveal>
          <SystemOverview />
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <DiagramPlaceholder
              id="diagram-overall"
              label={overall.label}
              title={overall.title}
              description={overall.description}
              aspect="aspect-[21/9]"
              tone="dark"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
