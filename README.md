# Livemap Design System

Design system documentation for the Livemap application — a shared design language across iOS, Android, and web.

## What's inside

A static single-page styleguide covering:

- **Foundations** — Design tokens, getting started guide
- **Styles** — Typography, colors, spacing & layout, elevation, motion, iconography, map styles
- **Building Blocks** — Components (buttons, inputs, cards, modals, etc.) and patterns (forms, navigation, empty states)
- **Platform** — iOS Live Activities
- **Resources** — Accessibility, responsive design, dark mode, i18n guidelines

All design decisions are encoded as CSS custom properties in `public/tokens.css` — spacing on a 4pt grid, SF Pro type scale, semantic colors with dark mode, elevation shadows, motion curves, and more.

## Project structure

```
public/
├── tokens.css              # Design tokens (CSS custom properties)
├── utilities.css            # Type style utility classes
├── serve.json               # SPA rewrite rules
└── styleguide/
    ├── index.html           # Main SPA
    ├── styleguide.js        # Navigation & page logic
    ├── styleguide.css        # Core styles
    ├── inspector.js/css     # Token inspector
    └── page-*.css           # Per-section styles
livemap-kit.pen              # Pencil design kit
```

## Running locally

```sh
npm install
PORT=3000 npm start
```

Opens at `http://localhost:3000/styleguide/`.

## Deployment

**Vercel** — configured via `vercel.json` (static output from `public/`).
