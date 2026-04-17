# Changelog - `extend-design-system` branch

Date: 2026-04-17

## Overview

This branch evolves the app from a single newsletter-focused page into a modular multi-design-system experience with:

- a shared shell and side navigation,
- dynamic routing by design-system slug,
- a first additional `web` guide placeholder,
- visual and copy updates for multi-system positioning,
- Remix Icon integration for global UI usage.

## Added

### New route and modular system pages

- Added `app/systems/[system]/page.tsx` to render guide content by slug.
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
  - typed system entries (`slug`, `label`, `description`, `GuidePage`, `iconClass`),
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
  - replaced direct newsletter rendering with redirect to default system route (`/systems/{defaultSlug}`).

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

- `app/systems/[system]/page.tsx`
- `components/systems/DesignSystemNav.tsx`
- `components/systems/DesignSystemShell.tsx`
- `components/systems/WebGuidePage.tsx`
- `components/systems/designSystems.tsx`
- `docs/superpowers/plans/2026-04-17-multi-design-system-shell.md`

## Notes

- An additional untracked temporary path `.tmp-review-5ec7702/` exists in the working tree and appears separate from product feature implementation.
