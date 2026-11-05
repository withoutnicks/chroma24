# Pixelarticons colored

A curated collection of colored derivatives of the free
[Pixelarticons](https://pixelarticons.com/) icon set.

This project does not aim to reproduce every upstream icon. The original set is
the better choice for neutral symbols that need to inherit `currentColor`. An
icon belongs here only when color improves its meaning, recognition, identity,
or visual depth.

## Curation standard

Every catalog icon should:

- preserve the upstream `24x24` geometry and pixel-grid alignment;
- use color with an explainable purpose rather than as decoration;
- remain legible at its native 24 px size;
- follow a consistent material, light, shadow, and contrast treatment;
- feel complete alongside the other icons in its family.

Brand colors and single-color semantic icons are valid when that color carries
identity or meaning. Merely replacing `currentColor` with a fixed fill is not.

`src/catalog/iconCategories.ts` is the curated catalog allowlist. Every SVG in
`public/icons` must have a corresponding catalog entry.

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
- `src/catalog` contains the curated gallery, catalog metadata, and copy behavior.
- `public/icons` contains the curated SVG assets served by the gallery.

The icon assets are colored derivatives of Pixelarticons v2.4.2, distributed under the MIT license by Gerrit Halfmann. The upstream project is at https://github.com/halfmage/pixelarticons.
