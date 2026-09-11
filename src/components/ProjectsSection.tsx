"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectType } from "@/data/profile";

const FILTERS: { key: ProjectType | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "case", label: "Casos de negocio" },
  { key: "platform", label: "Plataforma" },
  { key: "fabrica", label: "Fábrica de informes" },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const items = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accentT)" }}>
          Proyectos
        </div>
        <h2 className="font-display mt-2 text-[clamp(26px,3.5vw,40px)] font-extrabold">
          Lo que construyo dentro y fuera del trabajo.
        </h2>
      </div>

      <div className="font-mono mb-8 flex flex-wrap gap-2 text-xs uppercase tracking-wider">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="rounded-full border px-4 py-2"
            style={{
              borderColor: filter === f.key ? "var(--accent)" : "var(--border)",
              color: filter === f.key ? "var(--accent)" : "var(--textM)",
              background: filter === f.key ? "var(--accentDim)" : "transparent",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <div
            key={p.id}
            className="flex flex-col overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {p.image ? (
              <div className="relative h-40 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            ) : (
              (p.type === "fabrica" || p.type === "platform") && (
                <div
                  className="font-mono flex h-40 w-full items-center justify-center text-[11px] uppercase tracking-wider"
                  style={{ background: "var(--surface2)", color: "var(--textM)" }}
                >
                  Captura próximamente
                </div>
              )
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 text-2xl">{p.emoji}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--accentT)" }}>
                {p.eyebrow}
              </div>
              <h3 className="font-display mt-1 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm" style={{ color: "var(--textD)" }}>
                {p.description}
              </p>
              <div className="font-mono mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider" style={{ color: "var(--textM)" }}>
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-2 py-0.5" style={{ borderColor: "var(--border)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono mt-4 text-xs uppercase tracking-wider"
                  style={{ color: "var(--accent)" }}
                >
                  Ver en GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
