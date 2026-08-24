import { skillGroups } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export function Skills() {
  return (
    <SectionShell id="skills" className="bg-bg-deep/60">
      <SectionHeading
        index="03"
        kicker="skills"
        title="Tools of the trade"
        description="Technologies I have hands-on experience with, grouped by domain — depth over percentages."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.name} delay={(index % 3) * 0.07}>
              <article className="card group h-full p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line">
                <header className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-line bg-accent-soft text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-mono text-[13px] font-semibold tracking-wide text-ink-strong uppercase">
                    {group.name}
                  </h3>
                </header>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip transition-colors group-hover:border-line-strong">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
