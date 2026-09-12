import type { CSSProperties } from "react";

/** Blob de luz decorativo, monocromático (blanco en dark, negro suave en light). */
export function Glow({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full ${className}`}
      style={{
        background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        filter: "blur(60px)",
        ...style,
      }}
    />
  );
}
