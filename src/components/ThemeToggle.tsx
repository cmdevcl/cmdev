"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

/** Script inline para fijar el tema antes del primer paint y evitar flash. Se inyecta en layout.tsx. */
export const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;
