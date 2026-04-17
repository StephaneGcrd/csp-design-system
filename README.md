# CSP Brand Platform (design system hub)

Internal Next.js app for **Comptoir Sud Pacifique**: brand guides, channel design systems (newsletter, web), and shared navigation.

## Stack

- **Next.js** 16 (App Router) · **React** 19 · **TypeScript** · **Tailwind CSS** v4 · **Remix Icon**

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
- `components/brand/` — brand guide pages (`BrandPlatformGuidePage`, `BrandCharterGuidePage`, shared `BrandGuideIntro`).
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
