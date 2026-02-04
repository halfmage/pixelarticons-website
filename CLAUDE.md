# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pixelarticons website - a static site showcasing 2000+ pixel art icons (24x24 grid). Built with Eleventy, Tailwind CSS, and Alpine.js. Deployed on Netlify.

## Commands

```bash
npm start    # Dev server with live reload (Eleventy + Tailwind watch)
npm run build  # Production build with minification
```

Node version: 15.10.0 (see .nvmrc)

## Architecture

**Static Site Generator**: Eleventy v2 with Nunjucks templates (`.html` files use `{% %}` syntax)

**Key Directories**:
- `_data/` - JSON config and JS modules that dynamically load icon data
- `_includes/` - Template partials (layouts, header, footer, etc.)
- `_site/` - Build output (gitignored)
- `newicons/` - PNG icon files (the 2000+ icons)
- `styles/` - Tailwind CSS config and source

**Data Loading**: Icon metadata is generated dynamically via JS modules in `_data/`:
- `newicons.js` scans `/newicons/` for PNGs and extracts style variants (base, sharp, glyph, solid)
- `pixelarticons.js` loads SVGs from `node_modules/pixelarticons/svg` for legacy pages

**Frontend Stack**:
- Tailwind CSS v3 with custom theme in `styles/tailwind.config.js`
- Alpine.js for interactivity (search, pagination, dark mode toggle, icon size control)
- Clipboard.js for copy-to-clipboard functionality

**Pages**: index.html (icon browser), about.html, examples.html, legacy.html

## Build Configuration

- `.eleventy.js` - Eleventy config with SVG plugin, passthrough copies, HTML minification (production only)
- `styles/tailwind.config.js` - Custom colors (primary yellow #FFDD2D), Nippo font, dark mode via class strategy
- `ELEVENTY_PRODUCTION=true` env var enables HTML minification
