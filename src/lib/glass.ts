import type { CSSProperties } from "react";

// Lightning CSS (Tailwind v4 + Turbopack, mismo pipeline que moliq-app) descarta
// backdrop-filter cuando se escribe en globals.css: hay que aplicarlo inline.
export const glassStyle: CSSProperties = {
  backdropFilter: "blur(20px) saturate(160%)",
  WebkitBackdropFilter: "blur(20px) saturate(160%)",
};
