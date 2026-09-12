import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--bg) 75%, transparent)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
      }}
    >
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, var(--accent), var(--accentT))" }} />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-extrabold">
          CM<span style={{ color: "var(--accent)" }}>Dev</span>
        </Link>
        <div className="font-mono hidden gap-6 text-xs uppercase tracking-wider md:flex" style={{ color: "var(--textM)" }}>
          <Link href="/#dashboard">Trayectoria</Link>
          <Link href="/#projects">Proyectos</Link>
          <Link href="/#contact">Contacto</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/cv"
            className="font-mono rounded-full border px-4 py-2 text-xs uppercase tracking-wider"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            Ver CV →
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
