import { identity } from "@/data/profile";

const LINKS = [
  { icon: "✉️", label: "Email", value: identity.email, href: `mailto:${identity.email}` },
  { icon: "💼", label: "LinkedIn", value: identity.linkedin, href: `https://${identity.linkedin}` },
  { icon: "🐙", label: "GitHub", value: identity.github, href: `https://${identity.github}` },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accentT)" }}>
        Contacto
      </div>
      <h2 className="font-display mt-2 max-w-xl text-[clamp(26px,3.5vw,40px)] font-extrabold">
        ¿Tienes un desafío de datos?
      </h2>
      <p className="mt-4 max-w-xl" style={{ color: "var(--textD)" }}>
        Si tienes un problema de negocio que involucra datos — ya sea que no los tienes, no los entiendes o no los estás
        usando bien — conversemos. Sin compromiso, sin jerga innecesaria.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            className="rounded-2xl border p-5 transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="text-xl">{l.icon}</div>
            <div className="font-mono mt-2 text-[10px] uppercase tracking-wider" style={{ color: "var(--textM)" }}>
              {l.label}
            </div>
            <div className="mt-1 text-sm">{l.value}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
