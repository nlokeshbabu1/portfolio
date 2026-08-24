import { ArrowUpRight, BookOpen, PenTool } from "lucide-react";
import { contentCreation, publications, writingTopics } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export function Writing() {
  return (
    <SectionShell id="writing" className="bg-bg-deep/60">
      <SectionHeading
        index="05"
        kicker="technical writing"
        title="Notes from the field"
        description="I write about the systems I operate — DevOps, Cloud, Kubernetes, Terraform, CI/CD, DevSecOps, SRE and MLOps."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {publications.map((publication, index) => {
          const Icon = publication.icon;
          return (
            <Reveal key={publication.name} delay={index * 0.08}>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-strong">{publication.name}</h3>
                <p className="mt-0.5 font-mono text-xs text-accent">{publication.handle}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{publication.description}</p>
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Writing topics">
          {writingTopics.map((topic) => (
            <li key={topic} className="chip hover:border-accent-line hover:text-accent">
              #{topic.toLowerCase().replace(/\s+/g, "-")}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="card mt-8 overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                <PenTool className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-ink-strong">
                {contentCreation.title}
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted">
                {contentCreation.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {contentCreation.channels.map((channel) => {
                  const Icon = channel.icon;
                  if (!channel.live) {
                    return (
                      <li
                        key={channel.label}
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2 text-sm text-muted opacity-60"
                        title={`${channel.label} coming soon`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {channel.label}
                        <span className="font-mono text-[10px] tracking-widest uppercase">soon</span>
                      </li>
                    );
                  }
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2 text-sm text-muted transition-colors duration-200 hover:border-accent-line hover:text-accent"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {channel.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-bg-deep/70 p-5 sm:p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted uppercase">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                topics covered
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {contentCreation.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-muted">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2"
                      aria-hidden="true"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
