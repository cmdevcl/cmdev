"use client";

import { useEffect, useRef } from "react";

/** Agrega .visible a un elemento .reveal cuando entra en viewport (equivalente al IntersectionObserver del sitio anterior). */
export function useReveal<T extends HTMLElement>(threshold = 0.08) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
