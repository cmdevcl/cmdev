import Link from "next/link";
import { identity, stats, heroTags } from "@/data/profile";
import { AnimatedStat } from "@/components/AnimatedStat";
import { Glow } from "@/components/Glow";
import { glassStyle } from "@/lib/glass";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Glow style={{ width: 520, height: 520, top: -120, left: -160 }} />
      <Glow style={{ width: 420, height: 420, top: 60, right: -140 }} />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <div
            className="font-mono mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-wider"
            style={{ borderColor: "var(--border)", color: "var(--textM)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accentT)" }} />
            {identity.role} · {identity.location}
          </div>
          <h1 className="font-display text-[clamp(38px,5vw,60px)] font-extrabold leading-[1.04]">
            Del dato <br />a la decisión <br />
            que{" "}
            <span style={{ color: "var(--accentT)" }}>mueve</span>
            <br />
            negocios.
          </h1>
          <p className="mt-6 max-w-lg text-[17px]" style={{ color: "var(--textD)" }}>
            Traduzco problemas de negocio en soluciones de datos — desde la arquitectura hasta el dashboard ejecutivo. Con
            visión comercial, rigor técnico y trabajo en equipo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="font-mono rounded-full px-6 py-3 text-xs uppercase tracking-wider"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              Hablemos →
            </Link>
            <Link
              href="/#projects"
              className="font-mono rounded-full border px-6 py-3 text-xs uppercase tracking-wider"
              style={{ borderColor: "var(--border)", color: "var(--textD)" }}
            >
              Ver mi trabajo ↓
            </Link>
          </div>
          <div className="font-mono mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-wider" style={{ color: "var(--textM)" }}>
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div
          className="relative rounded-3xl border p-6"
          style={{ borderColor: "var(--border)", background: "var(--surface)", boxShadow: "var(--shadow)", ...glassStyle }}
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <AnimatedStat key={s.id} stat={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
