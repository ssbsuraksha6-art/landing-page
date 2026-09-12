import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FlowChain } from "@/components/pipeline/FlowChain";
import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { dataFlowSteps } from "@/data/flows";
import { diagramSpecs } from "@/data/architecture";

export function DataFlow() {
  const diagram = diagramSpecs.find((d) => d.id === "dataflow")!;

  return (
    <Section id="data-flow" tone="paper">
      <SectionHeading
        kicker="How One Screening Case Flows"
        title="The complete data journey of a single case."
        description="This is the actual movement of data through the system — capture to case record — distinct from the component architecture shown above."
      />

      <Reveal className="mt-14 rounded-md border border-navy-900/10 bg-white p-7 sm:p-9">
        <FlowChain steps={dataFlowSteps} direction="vertical" tone="light" size="sm" />
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <DiagramPlaceholder
            id="diagram-dataflow"
            label={diagram.label}
            title={diagram.title}
            description={diagram.description}
            aspect="aspect-[21/9]"
            tone="light"
          />
        </Reveal>
      </div>
    </Section>
  );
}
