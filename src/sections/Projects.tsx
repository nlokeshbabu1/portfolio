import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { links, projects } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { GithubIcon } from "../components/ui/icons";

export function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        index="04"
        kicker="projects"
        title="Building in the open"
        description="Personal engineering work — platforms designed with the same rigor as production systems."
      />

      <div className="mt-12 space-y-6">
        {projects.map((project) => (
          <Reveal key={project.name}>
            <article className="card overflow-hidden">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip border-accent-line bg-accent-soft text-accent">
                      {project.kind}
                    </span>
                    <span className="chip border-accent-line text-accent">
                      ● {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-mono text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <p className="font-mono text-[11px] tracking-widest text-muted uppercase">stack</p>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li key={tech} className="chip hover:border-accent-line hover:text-accent">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 flex items-center gap-2 rounded-lg border border-dashed border-line px-3 py-2.5 font-mono text-xs text-muted">
                    <FolderGit2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Repository will be linked here once public
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-bg-deep/70 p-5 sm:p-6">
                  <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                    planned capabilities
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {project.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2 text-sm text-muted">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-line pt-4 font-mono text-[11px] leading-relaxed text-muted">
                    scope is actively evolving — capabilities listed are design goals,
                    not shipped features
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.1}>
          <a
            href={`${links.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center justify-between gap-4 p-5 transition-colors duration-300 hover:border-accent-line"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                <GithubIcon className="h-4 w-4" />
              </span>
              <span className="text-sm text-muted">
                More experiments and infrastructure code on{" "}
                <span className="font-medium text-ink-strong">GitHub</span>
              </span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </SectionShell>
  );
}
