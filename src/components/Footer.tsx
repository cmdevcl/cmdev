import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <div className="font-display text-sm font-extrabold">
          CM<span style={{ color: "var(--accent)" }}>Dev</span>
        </div>
        <div className="text-xs" style={{ color: "var(--textM)" }}>
          © {new Date().getFullYear()} Carlos Muñoz Carrasco · Santiago, Chile
        </div>
        <Link href="/cv" className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent)" }}>
          Ver CV completo →
        </Link>
      </div>
    </footer>
  );
}
