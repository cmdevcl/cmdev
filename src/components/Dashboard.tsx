import { stats, stackSkills, roleDistribution, businessAreas, industries, timeline } from "@/data/profile";
import { AnimatedStat } from "@/components/AnimatedStat";
import { BarList } from "@/components/BarList";
import { RoleDonut } from "@/components/RoleDonut";

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accentT)" }}>
        {eyebrow}
      </div>
      <h2 className="font-display mt-2 text-[clamp(26px,3.5vw,40px)] font-extrabold">{title}</h2>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="font-mono mb-4 text-[11px] uppercase tracking-wider" style={{ color: "var(--textM)" }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border px-3 py-1.5 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--textD)" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionLabel eyebrow="Mi trayectoria · en datos" title="Un consultor que entiende los datos — y los muestra así." />

      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <p style={{ color: "var(--textD)" }}>
          Trabajo con organizaciones que tienen datos y aún no los usan para tomar mejores decisiones. Mi rol es cerrar esa
          brecha: entender el problema real, diseñar la solución correcta y acompañar su implementación hasta que genere
          valor visible. He trabajado en el ciclo completo — desde la fuente de datos hasta el reporte ejecutivo — en equipos
          multidisciplinarios, en industrias muy distintas.
        </p>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.period + t.role} className="flex gap-4 border-l-2 pl-4" style={{ borderColor: "var(--border)" }}>
              <div className="font-mono w-24 shrink-0 text-[11px]" style={{ color: "var(--accentT)" }}>
                {t.period}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.role}</div>
                <div className="text-xs" style={{ color: "var(--textM)" }}>
                  {t.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <AnimatedStat key={s.id} stat={s} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ChartCard title="Stack tecnológico · nivel de dominio">
          <BarList items={stackSkills} valueKey="level" />
        </ChartCard>
        <ChartCard title="Distribución de roles en proyectos">
          <RoleDonut data={roleDistribution} />
        </ChartCard>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ChartCard title="Áreas beneficiadas">
          <TagList items={businessAreas} />
        </ChartCard>
        <ChartCard title="Industrias atendidas">
          <TagList items={industries} />
        </ChartCard>
      </div>
    </section>
  );
}
