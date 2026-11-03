# Agent instructions

## Project

- This is a single-package React 19 + TypeScript + Vite app. The runtime entrypoint is `src/main.tsx`; the app shell is `src/App.tsx`; global styles and Tailwind theme tokens are in `src/index.css`.
- The app renders `SiteHeader`, the searchable `IconCatalog`, and `SiteFooter`. Shared application settings live in `src/config.ts`; catalog-specific components, metadata, and behavior live in `src/catalog`.
- React Compiler and Tailwind are configured in `vite.config.ts`; keep TypeScript changes compatible with the referenced `tsconfig.app.json` and `tsconfig.node.json` projects.

## Commands

- Use `pnpm` and keep `pnpm-lock.yaml` in sync. Install with `pnpm install --frozen-lockfile`.
- Run the app with `pnpm dev`.
- Run `pnpm fmt:check`, `pnpm lint`, and `pnpm build` (`build` runs `tsc -b` before `vite build`) before finishing a change unless the current task explicitly excludes the build.
- There is currently no repository test runner or test script; use focused manual browser checks for UI behavior.

## Pixelarticons assets

- This project creates a colored version of Pixelarticons. Use only the free upstream SVG set from [the upstream `svg/` directory](https://github.com/halfmage/pixelarticons/tree/master/svg); never use Pro assets or run `pixelarticons upgrade`.
- Keep upstream provenance and retain the MIT copyright/license notice when distributing copied or derived icons. Record the upstream version or commit when importing/updating assets.
- Treat SVG as the source format: edit the XML with a vector editor or code, not LibreSprite as the primary editor. Preserve the upstream `24x24` viewBox, pixel-grid alignment, path-only geometry, kebab-case filenames, and `currentColor` behavior unless the color variant explicitly requires a documented change.
