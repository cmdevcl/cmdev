# Estado

## En curso

- Nada en curso.

## Pendientes

1. Arreglar los 2 errores de lint previos: `src/components/RoleDonut.tsx` y `src/components/ThemeToggle.tsx`.
2. Completar `docs/producto.md` (meta con métrica, mensaje del CEO, HEART).
3. Borrar la rama remota `fix/seguridad-next`: `main` ya trae el mismo `next` y `eslint-config-next` (16.4.5). Su árbol difiere solo en que no tiene el esqueleto de D-0018.
4. Alinear `node-version` de `deploy.yml` (22) con `.nvmrc` (24).

## Brechas

- Lint falla en 2 archivos · Riesgo: no hay verificación completa limpia antes de integrar.

## Mejoras

- Reemplazar `legacy/` por su historia en git y borrarlo.
