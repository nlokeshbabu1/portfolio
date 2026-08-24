import { useEffect, useState } from "react";
import { Check, Copy, Mail, MapPin } from "lucide-react";
import { profile, socialLinks } from "../data/profile";
import { SectionHeading, SectionShell } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { buttonClass } from "../components/ui/button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      return;
    }
  };

  return (
    <SectionShell id="contact" className="relative overflow-hidden bg-bg-deep/60">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[620px] max-w-full -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative text-center">
        <SectionHeading
          index="09"
          kicker="contact"
          title="Let's Connect"
          description="Interested in DevOps, SRE, Cloud Infrastructure, DevSecOps or MLOps? Let's connect and build reliable systems."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={buttonClass("primary")}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className={buttonClass("outline")}>
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Copy email
                </>
              )}
            </button>
          </div>
          <p aria-live="polite" className="sr-only">
            {copied ? "Email address copied to clipboard" : ""}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex flex-col items-center gap-2 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line"
                  >
                    <Icon className="h-5 w-5 text-muted transition-colors duration-200 group-hover:text-accent" />
                    <span className="text-xs font-medium text-muted transition-colors duration-200 group-hover:text-accent">
                      {social.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.location}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
