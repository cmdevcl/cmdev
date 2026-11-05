# Estado

## En curso

- Alineación al estándar D-0018 (rama `chore/estandar-d0018`).

## Pendientes

1. Arreglar los 2 errores de lint previos: `src/components/RoleDonut.tsx` y `src/components/ThemeToggle.tsx`.
2. Completar `docs/producto.md` (meta con métrica, mensaje del CEO, HEART).
3. Revisar la rama `fix/seguridad-next` y su worktree: ya integrada vía PR #1, se puede limpiar.
4. Alinear `node-version` de `deploy.yml` (22) con `.nvmrc` (24).

## Brechas

- Lint falla en 2 archivos · Riesgo: no hay verificación completa limpia antes de integrar.

## Mejoras

- Reemplazar `legacy/` por su historia en git y borrarlo.
