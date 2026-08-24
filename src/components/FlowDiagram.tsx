import type { Flow } from "../data/profile";

export function FlowDiagram({ flow }: { flow: Flow }) {
  const isAccentTone = flow.tone === "accent";
  const iconColor = isAccentTone ? "text-accent" : "text-accent-2";
  const iconBg = isAccentTone ? "bg-accent-soft border-accent-line" : "bg-accent-2-soft border-accent-line";

  return (
    <article className="card h-full p-5 sm:p-7">
      <header className="mb-6 flex items-center gap-2.5">
        <span className={`h-2 w-2 rounded-full ${isAccentTone ? "bg-accent" : "bg-accent-2"}`} aria-hidden="true" />
        <h3 className="font-mono text-[13px] font-semibold tracking-wide text-ink-strong uppercase">
          {flow.title}
        </h3>
      </header>

      <ol className="flex flex-col">
        {flow.nodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === flow.nodes.length - 1;
          return (
            <li key={node.label} className="flex flex-col items-center">
              <div
                className={`flex w-full max-w-xs items-center gap-3 rounded-lg border px-4 py-2.5 transition-colors duration-200 ${
                  isLast ? "border-line-strong bg-elevated" : "border-line bg-surface"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${iconBg} ${iconColor}`}
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-mono text-[13px] font-medium text-ink-strong">
                    {node.label}
                  </span>
                  {node.sublabel ? (
                    <span className="truncate font-mono text-[11px] text-muted">{node.sublabel}</span>
                  ) : null}
                </span>
              </div>
              {!isLast && (
                <div className="flow-track" aria-hidden="true">
                  <span
                    className="flow-dot"
                    style={{ animationDelay: `${(index % 4) * 0.45}s` }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </article>
  );
}
