import { ArrowUpRight, Compass } from "lucide-react";
import { services } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export function WhatIDo() {
  return (
    <SectionShell id="about" className="bg-bg-deep/60">
      <SectionHeading
        index="01"
        kicker="what i do"
        title="Engineering reliable systems end to end"
        description="From cloud platforms and Kubernetes to pipelines, security gates and observability — infrastructure treated as a product."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const featured = index === services.length - 1;
          return (
            <Reveal key={service.title} delay={(index % 3) * 0.08} className={featured ? "lg:col-span-2" : undefined}>
              <article className="card group h-full p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-strong">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          );
        })}

        <Reveal delay={0.16}>
          <a
            href="#exploring"
            className="group flex h-full flex-col justify-between rounded-xl border border-dashed border-accent-line bg-accent-soft p-6 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-line bg-surface text-accent">
              <Compass className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="mt-4 text-base font-semibold text-ink-strong">Currently Exploring</h3>
              <p className="mt-2 flex items-center gap-1 text-sm text-muted">
                MLOps · AI Infrastructure
                <ArrowUpRight
                  className="h-4 w-4 text-accent transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </SectionShell>
  );
}
