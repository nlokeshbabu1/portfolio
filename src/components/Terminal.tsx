import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { terminalLines } from "../data/profile";
import type { TerminalLine } from "../data/profile";

function LineView({ line }: { line: TerminalLine }) {
  if (line.type === "cmd") {
    return (
      <p>
        <span className="text-accent">$ </span>
        <span className="text-ink-strong">{line.text}</span>
      </p>
    );
  }
  return <p className="text-muted">{line.text}</p>;
}

export function Terminal() {
  const reduceMotion = useReducedMotion();
  const [blockIndex, setBlockIndex] = useState(0);
  const [completed, setCompleted] = useState<TerminalLine[]>([]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduceMotion) return;
    const block = terminalLines[blockIndex];
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;
    let timer = 0;

    const step = () => {
      if (cancelled) return;
      if (lineIndex >= block.length) {
        timer = window.setTimeout(() => {
          if (cancelled) return;
          setCompleted([]);
          setTyped("");
          setBlockIndex((index) => (index + 1) % terminalLines.length);
        }, 3600);
        return;
      }
      const line = block[lineIndex];
      if (line.type === "cmd") {
        if (charIndex <= line.text.length) {
          setTyped(line.text.slice(0, charIndex));
          charIndex += 1;
          timer = window.setTimeout(step, 26 + Math.random() * 58);
        } else {
          setCompleted((prev) => [...prev, line]);
          setTyped("");
          lineIndex += 1;
          charIndex = 0;
          timer = window.setTimeout(step, 400);
        }
      } else {
        setCompleted((prev) => [...prev, line]);
        lineIndex += 1;
        timer = window.setTimeout(step, 260);
      }
    };

    timer = window.setTimeout(step, 450);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [blockIndex, reduceMotion]);

  const staticLines = terminalLines[0];

  return (
    <div
      role="img"
      aria-label="Terminal window animating typical infrastructure commands such as kubectl, terraform, argocd and trivy"
      className="card overflow-hidden bg-elevated"
    >
      <div
        className="flex items-center gap-2 border-b border-line px-4 py-3"
        style={{ backgroundColor: "var(--terminal-head)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-muted">lokesh@prod: ~/infrastructure</span>
      </div>
      <div
        aria-hidden="true"
        className="min-h-[212px] space-y-1.5 px-5 py-4 font-mono text-[12.5px] leading-relaxed sm:min-h-[224px] sm:text-[13px]"
      >
        {reduceMotion ? (
          staticLines.map((line, index) => <LineView key={index} line={line} />)
        ) : (
          <>
            {completed.map((line, index) => (
              <LineView key={index} line={line} />
            ))}
            <p>
              <span className="text-accent">$ </span>
              <span className="text-ink-strong">{typed}</span>
              <span className="caret-blink ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] bg-accent" />
            </p>
          </>
        )}
      </div>
    </div>
  );
}
