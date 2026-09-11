import type { RoleShare } from "@/data/profile";

const COLORS = ["var(--accent)", "var(--accentT)", "var(--accentL)"];

export function RoleDonut({ data }: { data: RoleShare[] }) {
  let acc = 0;
  const stops = data.map((d, i) => {
    const start = acc;
    acc += d.pct;
    return `${COLORS[i % COLORS.length]} ${start}% ${acc}%`;
  });

  return (
    <div className="flex items-center gap-5">
      <div
        className="h-28 w-28 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(${stops.join(", ")})`,
          boxShadow: "inset 0 0 0 14px var(--surface)",
        }}
      />
      <ul className="space-y-2 text-xs">
        {data.map((d, i) => (
          <li key={d.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
            <span style={{ color: "var(--textD)" }}>{d.label}</span>
            <span className="font-mono ml-auto" style={{ color: "var(--textM)" }}>
              {d.pct}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
