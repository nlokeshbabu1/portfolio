import { ArrowDown } from "lucide-react";
import { learningPath } from "../data/profile";
import { SectionHeading, SectionShell, StatusDot } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export function Exploring() {
  return (
    <SectionShell id="exploring" className="bg-bg-deep/60">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            index="06"
            kicker="currently exploring"
            title="The road ahead"
          />
          <Reveal delay={0.1}>
            <blockquote className="mt-6 border-l-2 border-accent pl-5 text-base leading-relaxed text-muted sm:text-lg">
              “{learningPath.statement}”
            </blockquote>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md font-mono text-xs leading-relaxed text-muted">
              grounded in production DevOps & SRE practice today — AI/ML systems are
              the direction of travel, not a claimed specialty
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <nav aria-label="Learning progression" className="card mx-auto w-full max-w-sm p-6 sm:p-7">
            <ol className="flex flex-col items-stretch">
              {learningPath.stages.map((stage, index) => {
                const isLast = index === learningPath.stages.length - 1;
                const active = stage.state === "active";
                return (
                  <li key={stage.label} className="flex flex-col items-center">
                    <div
                      className={`flex w-full items-center justify-between rounded-lg border px-4 py-2.5 transition-colors duration-200 ${
                        active
                          ? "border-accent-line bg-accent-soft"
                          : "border-line bg-surface"
                      }`}
                    >
                      <span
                        className={`font-mono text-[13px] ${
                          active ? "font-semibold text-accent" : "text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")} · {stage.label}
                      </span>
                      {active ? (
                        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-accent uppercase">
                          <StatusDot />
                          focus
                        </span>
                      ) : null}
                    </div>
                    {!isLast && (
                      <ArrowDown
                        className={`my-1 h-4 w-4 ${active ? "text-accent" : "text-muted"}`}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Reveal>
      </div>
    </SectionShell>
  );
}
