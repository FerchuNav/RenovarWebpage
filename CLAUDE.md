# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

Open `Renovar.html` directly in a browser — no build step, no server required. React 18, ReactDOM, and Babel standalone are loaded from unpkg CDN, so an internet connection is needed on first load.

## Architecture

Single-file website: all markup, CSS (`<style>`), and React components live inside `Renovar.html` as a `<script type="text/babel">` block. Babel transpiles JSX in the browser at runtime.

`tweaks-panel.jsx` is loaded as a second Babel script (`<script type="text/babel" src="tweaks-panel.jsx">`). It exposes `useTweaks`, `TweaksPanel`, and all `Tweak*` controls as globals on `window`. The main script consumes them via `window.useTweaks` / `window.TweaksPanel` etc.

### Tweaks / edit-mode protocol

`TWEAK_DEFAULTS` in `Renovar.html` is wrapped in `/*EDITMODE-BEGIN*/` … `/*EDITMODE-END*/` markers. A host toolbar can rewrite that JSON block on disk by posting `__edit_mode_set_keys` messages. The panel listens for `__activate_edit_mode` / `__deactivate_edit_mode` and posts back `__edit_mode_available` / `__edit_mode_dismissed`.

### CSS

All styles are a single `<style>` block in `<head>`. Design tokens are CSS custom properties on `:root` (e.g. `--teal`, `--cream`, `--rust`). The tweaks system overrides `--teal`/`--teal-deep`/`--rust` at runtime via `document.documentElement.style.setProperty`.

### Assets

- `assets/fachada.jpg` — storefront photo used in the hero
- `assets/fadepa.jpeg` — Fadepa brand logo used in the distributor section
- `uploads/` — duplicate copies; `assets/` is the canonical path referenced in HTML

### Key data

All page content (palette swatches, products, reviews) is defined as JS constants (`PALETTE`, `PRODUCTS`, `REVIEWS`) inside the inline script — edit those arrays to update content.
