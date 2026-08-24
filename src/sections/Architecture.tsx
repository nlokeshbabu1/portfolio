import { flows } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { FlowDiagram } from "../components/FlowDiagram";

export function Architecture() {
  return (
    <SectionShell id="architecture">
      <SectionHeading
        index="07"
        kicker="architecture"
        title="From commit to production"
        description="The delivery patterns I work with daily — automated, security-gated pipelines and GitOps-driven platforms."
      />

      <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
        {flows.map((flow, index) => (
          <Reveal key={flow.id} delay={index * 0.1} className="h-full">
            <FlowDiagram flow={flow} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
