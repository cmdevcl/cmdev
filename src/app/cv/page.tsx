import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  identity,
  experience,
  techStack,
  certifications,
  education,
  skillGroups,
  languages,
} from "@/data/profile";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display border-b pb-2 text-xl font-bold" style={{ borderColor: "var(--border)" }}>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function CvPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div
            className="font-mono mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-wider"
            style={{ borderColor: "var(--border)", color: "var(--accentT)" }}
          >
            Disponible para proyectos
          </div>
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold">{identity.name}</h1>
          <p className="font-display mt-1 text-lg font-bold" style={{ color: "var(--accent)" }}>
            {identity.role}
          </p>
          <p className="mt-4 max-w-2xl" style={{ color: "var(--textD)" }}>
            {identity.summary}
          </p>
          <div className="font-mono mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: "var(--textM)" }}>
            <span>{identity.location}</span>
            <span>{identity.phone}</span>
            <span>{identity.email}</span>
            <span>{identity.linkedin}</span>
          </div>
          <Link
            href="/cv/CV_Carlos_Munoz_Carrasco_2026_ES.pdf"
            prefetch={false}
            className="font-mono mt-6 inline-block rounded-full px-6 py-3 text-xs uppercase tracking-wider"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            Descargar CV en PDF →
          </Link>

          <Section title="Experiencia profesional">
            <div className="space-y-8">
              {experience.map((job) => (
                <div key={job.company + job.start}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-bold">
                      {job.company} · {job.role}
                      {job.context ? ` · ${job.context}` : ""}
                    </h3>
                    <span className="font-mono text-[11px]" style={{ color: "var(--accentT)" }}>
                      {job.start} — {job.current ? "ACTUALIDAD" : job.end}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: "var(--textM)" }}>
                    {job.location} · {job.modality}
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--textD)" }}>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="font-mono mt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider" style={{ color: "var(--textM)" }}>
                    {job.tech.map((t) => (
                      <span key={t} className="rounded-full border px-2 py-0.5" style={{ borderColor: "var(--border)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Stack de tecnologías">
            <div className="space-y-3">
              {techStack.map((s) => (
                <div key={s.category} className="text-sm">
                  <span className="font-semibold">{s.category}: </span>
                  <span style={{ color: "var(--textD)" }}>{s.items}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Habilidades profesionales">
            <div className="grid gap-6 sm:grid-cols-3">
              {skillGroups.map((g) => (
                <div key={g.group}>
                  <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--accentT)" }}>
                    {g.group}
                  </div>
                  <ul className="mt-2 space-y-1 text-sm" style={{ color: "var(--textD)" }}>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Educación">
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.title} className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                  <span>
                    {e.title} · {e.institution}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "var(--accentT)" }}>
                    {e.period}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Certificaciones">
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <div key={c.issuer}>
                  <div className="font-semibold text-sm">{c.issuer}</div>
                  <ul className="text-sm" style={{ color: "var(--textD)" }}>
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Idiomas">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {languages.map((l) => (
                <div key={l.name}>
                  <span className="font-semibold">{l.name}: </span>
                  <span style={{ color: "var(--textD)" }}>{l.level}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
