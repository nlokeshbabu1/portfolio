import { ArrowDown, Download, MapPin } from "lucide-react";
import { links, profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/ui/icons";
import { Terminal } from "../components/Terminal";
import { buttonClass } from "../components/ui/button";
import { StatusDot } from "../components/ui/Section";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted">
              <StatusDot />
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location} · IST
            </p>

            <p className="mt-6 font-mono text-sm text-muted">
              <span className="text-accent">$</span> {profile.name}{" "}
              <span className="text-muted">·</span> {profile.role}
            </p>

            <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight text-balance text-ink-strong sm:text-5xl xl:text-6xl">
              Building{" "}
              <span className="text-accent">Reliable, Secure&nbsp;&&nbsp;Automated</span>{" "}
              Infrastructure
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Site Reliability Engineer focused on DevOps, DevSecOps, Cloud
              Infrastructure, Kubernetes and Infrastructure as Code — with a growing
              focus on MLOps and AI Infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#experience" className={buttonClass("primary")}>
                View My Work
              </a>
              <a href="#contact" className={buttonClass("outline")}>
                Contact Me
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={buttonClass("outline", "px-3!")}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={buttonClass("outline", "px-3!")}
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className={buttonClass("ghost")}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end lg:w-full">
            <Terminal />
          </div>
        </div>

        <a
          href="#about"
          className="mx-auto mt-16 hidden w-fit flex-col items-center gap-1 font-mono text-[11px] tracking-widest text-muted uppercase transition-colors hover:text-accent sm:flex"
        >
          scroll
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
