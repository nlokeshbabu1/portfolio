import { Briefcase, ChevronRight, MapPin } from "lucide-react";
import { experience } from "../data/profile";
import { SectionHeading, SectionShell, StatusDot } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        index="02"
        kicker="experience"
        title="Where I've operated"
        description="Production infrastructure across payments, cloud platforms and engineering support."
      />

      <ol className="relative mt-12 space-y-10 before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-line sm:space-y-12">
        {experience.map((item, index) => (
          <li key={item.company} className="relative pl-8">
            <span
              className={`absolute top-2 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 ${
                item.current
                  ? "border-accent bg-accent-soft"
                  : "border-line-strong bg-surface"
              }`}
              aria-hidden="true"
            >
              {item.current ? <span className="h-1.5 w-1.5 rounded-full bg-accent" /> : null}
            </span>

            <Reveal delay={index * 0.06}>
              <article className="card p-6 transition-colors duration-300 hover:border-accent-line sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink-strong">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {item.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 sm:items-end">
                    <span className="chip">
                      {item.current ? <StatusDot /> : null}
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {item.summary ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                ) : null}

                {item.highlights ? (
                  <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <ChevronRight
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.focus ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.focus.map((topic) => (
                      <span key={topic} className="chip hover:border-accent-line hover:text-accent">
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : null}

                {item.stack ? (
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="font-mono text-[11px] tracking-widest text-muted uppercase">stack</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
