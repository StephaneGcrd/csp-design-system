# CSP Brand Platform (design system hub)

Internal Next.js app for **Comptoir Sud Pacifique**: brand guides, channel design systems (newsletter, web), and shared navigation.

## Stack

- **Next.js** 16 (App Router) · **React** 19 · **TypeScript** · **Tailwind CSS** v4 · **Remix Icon**

## Typography

- **Display / titles** — **Fern** (DJR), loaded with `next/font/local` from `app/fonts/fern/` (`FernVariable-Roman-VF.woff2`, `FernVariable-Italic-VF.woff2`). The Tailwind token `font-display` (CSS variable `--font-display`) applies this stack everywhere headings use `font-display`.
- **UI sans** — **Plus Jakarta Sans** via `next/font/google`, exposed as `--font-geist-sans` (historical variable name) for `font-sans` in the theme.
- **Mono** — **Geist Mono** (`--font-geist-mono`).
- **Body (marketing)** — When `NEXT_PUBLIC_ENABLE_TYPEKIT=true`, Adobe Typekit loads **Freight Neo** families for `body` (see `app/layout.tsx` + `app/globals.css`). Otherwise the sans stack above applies.

## Routes

| Path | Behavior |
|------|----------|
| `/` | Redirects to the default guide slug under `/brand/…` (currently `newsletter`). |
| `/brand` | Redirects to `/brand/{defaultSlug}`. |
| `/brand/[system]` | Renders the shared shell + guide for the resolved slug (registry in `components/systems/designSystems.tsx`). |
| `/systems/[system]` | **Compatibility redirect** to `/brand/{resolvedSlug}` (canonical URLs live under `/brand`). |

Registered slugs include brand sections (`plateforme-de-marque`, `charte-graphique`) and systems (`newsletter`, `web`). Slugs are normalized (trim + lowercase) with fallback to the default.

## Key paths

- `app/brand/[system]/page.tsx` — main dynamic page (shell + guide).
- `app/systems/[system]/page.tsx` — redirect to `/brand/…`.
- `components/systems/designSystems.tsx` — typed registry, `navSection` (`brand` \| `systems`), slug resolution.
- `components/systems/DesignSystemShell.tsx` — layout + mobile drawer.
- `components/systems/DesignSystemNav.tsx` — side nav grouped by `navSection`.
- `components/brand/` — brand guide pages (`BrandPlatformGuidePage` includes intro + **moodboard** + manifeste, `BrandCharterGuidePage`, shared `BrandGuideIntro`, `ManifesteGallery` for manifeste image grids).
- `app/fonts/fern/` — local **Fern** variable fonts for display typography (committed; license per your DJR webfont agreement).
- `app/globals.css` — design tokens (`@theme inline`), including `--font-display` (Fern + system serif fallbacks).
- `lib/getManifesteGalleryImages.ts` — server-only listing of images under `public/brands/comptoir-sud-pacifique/manifeste/{section}/` (safe slug; used by `ManifesteGallery`).
- `public/brands/comptoir-sud-pacifique/manifeste/` — on-disk image assets per manifeste theme (wired to the brand platform guide).
- `public/brands/comptoir-sud-pacifique/moodboard-plateforme-marque.png` — brand platform moodboard image (referenced from `BrandPlatformGuidePage`).
- `components/newsletter/` — newsletter guide content and data.

## Scripts

```bash
npm run dev    # development server → http://localhost:3000
npm run lint   # ESLint
npm run build  # production build
```

## Documentation

- [`docs/llm_project_and_last_merge.md`](docs/llm_project_and_last_merge.md) — LLM / contributor context (architecture, conventions).
- [`docs/changelog-extend-design-system.md`](docs/changelog-extend-design-system.md) — notable structural changes.
- [`docs/agent_code_review_guide.md`](docs/agent_code_review_guide.md) — agent code review checklist.

## Deploy

Standard Next.js deployment (e.g. [Vercel](https://vercel.com/docs/frameworks/nextjs)). Ensure env vars such as `NEXT_PUBLIC_ENABLE_TYPEKIT` match your environment.
