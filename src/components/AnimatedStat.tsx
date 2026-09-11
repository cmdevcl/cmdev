"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { StatItem } from "@/data/profile";

export function AnimatedStat({ stat, compact = false }: { stat: StatItem; compact?: boolean }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={compact ? "text-center" : "rounded-2xl border p-5"}
      style={compact ? undefined : { borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="font-display text-3xl font-extrabold" style={{ color: "var(--accent)" }}>
        {value}
        {stat.suffix ?? ""}
      </div>
      <div className="font-mono mt-1 text-[10px] uppercase tracking-wider" style={{ color: "var(--textM)" }}>
        {stat.label}
      </div>
      {stat.note && !compact && (
        <div className="mt-1 text-xs" style={{ color: "var(--textD)" }}>
          {stat.note}
        </div>
      )}
    </div>
  );
}
