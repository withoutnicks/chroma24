# Pixelarticons colored

A React 19 + TypeScript + Vite gallery for colored derivatives of the free [Pixelarticons](https://pixelarticons.com/) icon set.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Checks

```bash
pnpm fmt:check
pnpm lint
pnpm build
```

## Structure

- `src/App.tsx` composes the application shell.
- `src/config.ts` contains shared application settings.
- `src/components` contains site-level components.
- `src/catalog` contains the icon gallery, catalog metadata, and copy behavior.
- `public/icons` contains the SVG assets served by the gallery.

The icon assets are colored derivatives of Pixelarticons v2.4.2, distributed under the MIT license by Gerrit Halfmann. The upstream project is at https://github.com/halfmage/pixelarticons.
