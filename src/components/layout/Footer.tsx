import { ArrowUp, MapPin } from "lucide-react";
import { profile, socialLinks } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-ink-strong">
            <span className="text-accent" aria-hidden="true">
              ~$
            </span>{" "}
            {profile.shortName}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent-line hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent-line hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-site py-4 text-center font-mono text-[11px] text-muted">
          © {year} {profile.name} · designed & built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}
