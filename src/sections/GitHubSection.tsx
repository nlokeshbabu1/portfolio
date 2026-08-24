import { Activity, ArrowUpRight, FolderGit2, User } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

const githubCards = [
  {
    title: "GitHub Profile",
    handle: `@${profile.githubUser}`,
    description: "Who I am, what I maintain and what I am currently building.",
    href: `https://github.com/${profile.githubUser}`,
    icon: User,
  },
  {
    title: "Repositories",
    handle: "public repos",
    description: "Infrastructure code, automation scripts and engineering experiments.",
    href: `https://github.com/${profile.githubUser}?tab=repositories`,
    icon: FolderGit2,
  },
  {
    title: "Contribution Activity",
    handle: "commit history",
    description: "Recent contributions across projects, writing and tooling.",
    href: `https://github.com/${profile.githubUser}?tab=overview`,
    icon: Activity,
  },
];

export function GitHubSection() {
  return (
    <SectionShell id="github">
      <SectionHeading
        index="08"
        kicker="open source & engineering"
        title="Work on GitHub"
        description="A static snapshot here — the live picture lives on GitHub."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {githubCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={(index % 3) * 0.08}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-strong">{card.title}</h3>
                <p className="mt-0.5 font-mono text-xs text-accent">{card.handle}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{card.description}</p>
              </a>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
