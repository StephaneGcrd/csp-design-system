# Changelog - `extend-design-system` branch

Date: 2026-04-17 (updated for Brand Platform routing, manifeste galleries, Fern display type, moodboard)

## Overview

This branch evolves the app from a single newsletter-focused page into a modular hub with:

- a shared shell and side navigation,
- **canonical dynamic routing under `/brand/[system]`** (registry slug; `/systems/[system]` redirects for compatibility),
- **brand** guides (`plateforme-de-marque`, `charte-graphique`) and **systems** guides (`newsletter`, `web`) distinguished in config via `navSection`,
- **brand platform manifeste** long-form copy, a **moodboard** image block, plus theme-based image galleries fed from `public/brands/comptoir-sud-pacifique/manifeste/`,
- **Fern** (local `woff2`) for display typography via `font-display` / `--font-display` (replacing Google Fraunces in the app shell),
- a first additional `web` guide placeholder,
- visual and copy updates for multi-system / brand-platform positioning,
- Remix Icon integration for global UI usage.

---

## 2026-04-17 — Brand Platform (`/brand`) and registry `navSection`

### Added

- `app/brand/page.tsx` — redirect to default slug under `/brand`.
- `app/brand/[system]/page.tsx` — shell + guide (canonical app surface).
- `components/brand/BrandPlatformGuidePage.tsx`, `BrandCharterGuidePage.tsx`, `BrandGuideIntro.tsx` — internal brand guide scaffolds.

### Changed

- `app/page.tsx` — root redirect target is `/brand/{defaultSlug}` (was `/systems/...`).
- `app/systems/[system]/page.tsx` — **redirect only** to `/brand/{resolvedSlug}` (no duplicate shell render).
- `app/layout.tsx` — metadata title/description oriented to Brand Platform.
- `components/systems/designSystems.tsx` — new entries for brand guides; **`navSection`: `"brand"` | `"systems"`** on each registry row; nav items include `navSection`.
- `components/systems/DesignSystemNav.tsx` — links target `/brand/...`; side nav grouped into **Brand** and **Systems** from `navSection`.
- `components/systems/DesignSystemShell.tsx` — mobile drawer `aria-label` aligned with nav wording.

### Notes

- Historical detail for the first shell iteration (paths under `/systems` as primary) is preserved in the sections below; the **current** primary route is `/brand/[system]`.

---

## 2026-04-17 — Brand platform: Manifeste content and image galleries

### Added

- **`components/brand/ManifesteGallery.tsx`** — responsive image grid (or dashed placeholders when a folder has no images yet); named region for accessibility; `next/image` with filenames in captions.
- **`lib/getManifesteGalleryImages.ts`** — `getManifesteSectionImageUrls(sectionSlug)` reads `public/brands/comptoir-sud-pacifique/manifeste/{sectionSlug}/` at **server render** only; validates the slug (single path segment, no traversal); returns sorted public URLs; swallows I/O errors as an empty list.
- **`public/brands/comptoir-sud-pacifique/manifeste/*`** — per-theme asset folders (e.g. `minimalisme`, `dessin`, `postal`, `sensorialite`, `voyage-exotisme`, …) with `fig-*.jpeg` / `.png` files.

### Changed

- **`components/brand/BrandPlatformGuidePage.tsx`** — extended with the full Manifeste narrative and one `ManifesteGallery` block per visual theme section.

### Notes

- `ManifesteGallery` must stay a **Server Component** (or be composed only from server-safe parents) so `getManifesteSectionImageUrls` can use Node `fs`.
- Adding or replacing files in a theme folder updates the page on the next build/deploy without code changes.

---

## 2026-04-17 — Display type: Fern (local) + brand platform moodboard

### Added

- **`app/fonts/fern/`** — `FernVariable-Roman-VF.woff2` and `FernVariable-Italic-VF.woff2` (DJR Fern webfont bundle; keep licensing terms with your font vendor).
- **`public/brands/comptoir-sud-pacifique/moodboard-plateforme-marque.png`** — moodboard image for the brand platform guide.
- **`BrandPlatformMoodboard`** (in `components/brand/BrandPlatformGuidePage.tsx`) — section above the Manifeste article; uses `next/image` with a desktop max height constraint for the moodboard strip.

### Changed

- **`app/layout.tsx`** — display font: `next/font/local` Fern instead of Google **Fraunces**; CSS variable `--font-fern-display` on `<html>`.
- **`app/globals.css`** — `--font-display` now references `var(--font-fern-display)` with system serif fallbacks.

### Notes

- Tailwind **`font-display`** maps to `--font-display` (brand guide titles, newsletter display headings, etc.).
- **Typekit** (`NEXT_PUBLIC_ENABLE_TYPEKIT`) is unchanged for optional Freight Neo body styling.

## Added

### New route and modular system pages

- Added `app/systems/[system]/page.tsx` to render guide content by slug (later superseded as **canonical** route by `app/brand/[system]/page.tsx`; `systems` route kept as redirect — see section above).
- Added registry-driven fallback and canonical slug redirect behavior.

### New shared shell and side navigation

- Added `components/systems/DesignSystemShell.tsx`:
  - responsive two-column layout on desktop,
  - mobile slide-over navigation with overlay and close interaction.
- Added `components/systems/DesignSystemNav.tsx`:
  - shared navigation UI for all systems,
  - active-state handling with `aria-current`.

### New design-system registry

- Added `components/systems/designSystems.tsx`:
  - typed system entries (`slug`, `label`, `description`, `GuidePage`, `iconClass`; later **`navSection`**),
  - default-system resolution,
  - slug resolver and nav item mapping,
  - normalized slug lookup (`trim` + lowercase) for safer route resolution.

### New Web guide placeholder

- Added `components/systems/WebGuidePage.tsx` as the initial scaffold for future web foundations and patterns.

### Plan artifact

- Added `docs/superpowers/plans/2026-04-17-multi-design-system-shell.md` with implementation planning details and execution checklist.

## Changed

### Root route behavior

- Updated `app/page.tsx`:
  - replaced direct newsletter rendering with redirect to the default guide route (now **`/brand/{defaultSlug}`**; was `/systems/{defaultSlug}` at this milestone).

### Global app metadata and icon styles

- Updated `app/layout.tsx`:
  - metadata changed from newsletter-specific to multi-system wording,
  - imported Remix Icon stylesheet globally.

### Newsletter page modularization

- Updated `components/newsletter/NewsletterGuidePage.tsx`:
  - removed local top navigation component,
  - retained guide content so page can be rendered inside shared shell.

### Sidebar visual styling refinements

- Updated `components/systems/DesignSystemShell.tsx`:
  - sidenav background switched to white,
  - added soft thin right border to separate navigation from content,
  - mirrored white panel + right border in mobile drawer,
  - improved mobile navigation accessibility (`aria-expanded`, `aria-controls`, `role="dialog"`, `aria-modal`, `Escape` close support),
  - locked body scroll while the mobile drawer is mounted.

### Navigation iconography and cleanup

- Updated `components/systems/DesignSystemNav.tsx` and `components/systems/designSystems.tsx`:
  - kept per-system icon classes available in config for future usage,
  - removed icon rendering from side-nav item labels for a cleaner text-first navigation.

## Dependencies

- Updated `package.json`:
  - added `remixicon` (`^4.9.1`).
- Updated `package-lock.json` accordingly.

## File-level summary

### Modified files

- `app/layout.tsx`
- `app/page.tsx`
- `components/newsletter/NewsletterGuidePage.tsx`
- `package.json`
- `package-lock.json`

### New files

- `app/systems/[system]/page.tsx` (redirect-only after Brand Platform update)
- `app/brand/page.tsx`, `app/brand/[system]/page.tsx` (canonical shell route)
- `components/systems/DesignSystemNav.tsx`
- `components/systems/DesignSystemShell.tsx`
- `components/systems/WebGuidePage.tsx`
- `components/systems/designSystems.tsx`
- `components/brand/*` (brand guide pages)
- `docs/superpowers/plans/2026-04-17-multi-design-system-shell.md`

## Notes

- An additional untracked temporary path `.tmp-review-5ec7702/` exists in the working tree and appears separate from product feature implementation.
