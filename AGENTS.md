# cmdev

Capa de la raíz: lee `C:\Personal\AGENTS.md` antes de seguir si tu herramienta no la cargó.

Portafolio y CV web de Carlos Muñoz Carrasco (Senior Data Consultant), para reclutadores y clientes. Se publica en GitHub Pages desde `main`. Detalle en `docs/producto.md`.

## Comandos

- Instalar: `npm ci`
- Desarrollo: `npm run dev` (queda en http://localhost:3000/cmdev)
- Typecheck: `npx next typegen && npx tsc --noEmit` (sin typegen falla `LayoutProps`)
- Lint: `npm run lint`
- Verificar (antes de integrar): `npx next typegen && npx tsc --noEmit && npm run lint && npm run build`

## Pilares

1. **Una sola fuente de contenido.** La home (`/`) y el CV (`/cv`) leen de `src/data/profile.ts`; nunca se duplica texto en componentes. Se comprueba con: `npm run build`.
2. **Sitio 100% estático.** `output: "export"` y `basePath: "/cmdev"` en `next.config.ts`; sin rutas de servidor ni imágenes optimizadas. Se comprueba con: `npm run build` (genera `out/`).
3. **Solo datos verificables.** Nada de cifras, clientes ni proyectos inventados; todo sale del CV real en `public/cv/`.

## Trampas

- Merge a `main` despliega a GitHub Pages (`.github/workflows/deploy.yml`): no integres sin pedido explícito.
- `legacy/` es la versión HTML anterior, solo referencia; no se edita.
- Estilo: Tailwind 4 vía PostCSS, tema claro y oscuro por `ThemeToggle`.
- Variables: ninguna requerida hoy. Si aparece una, va en `.env.example`; los valores viven en `%USERPROFILE%\Secretos\personal\cmdev\<entorno>.env` y llegan al repo solo como `.env.local`. No los leas.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev`, verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Dónde leer

| Si vas a | Lee |
|---|---|
| Entender qué se construye y para quién | `docs/producto.md` |
| Ver lo que está en curso o pendiente | `docs/estado.md` |
| Cambiar algo ya decidido | `docs/decisiones/INDEX.md` |
| Hacer una feature de 3 o más archivos | `docs/specs/` cuando exista (la spec va antes del código) |

## Límites

- Sin push, PR ni merge a `main` sin pedido explícito en la sesión.
