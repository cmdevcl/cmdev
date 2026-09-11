"use client";

import { useReveal } from "@/hooks/useReveal";

export function BarList<T extends { label: string }>({
  items,
  valueKey,
  unit = "%",
}: {
  items: T[];
  valueKey: keyof T;
  unit?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal space-y-3">
      {items.map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex items-center justify-between text-xs">
            <span style={{ color: "var(--textD)" }}>{item.label}</span>
            <span className="font-mono" style={{ color: "var(--textM)" }}>
              {String(item[valueKey])}
              {unit}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--surface2)" }}>
            <div
              className="bar-fill h-full rounded-full"
              style={
                {
                  "--w": `${String(item[valueKey])}%`,
                  background: "linear-gradient(90deg, var(--accent), var(--accentT))",
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
