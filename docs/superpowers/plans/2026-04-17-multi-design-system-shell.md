# Multi Design System Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the app from a single newsletter page into a modular multi-system guide with a persistent side navigation (`newsletter`, `web`, and future systems).

**Architecture:** Introduce a shell component that owns the global page layout and side navigation, then register each design system through a typed config map. Keep each system's content isolated in its own module and render via route param (`/systems/[system]`) with a default redirect from `/`.

**Tech Stack:** Next.js App Router, React 19, TypeScript, ESLint (next/core-web-vitals), Tailwind CSS 4

---

## Scope Check

This request is one subsystem (navigation + modular content composition for design system guides), so a single implementation plan is appropriate.

## Planned File Structure

- Create: `app/systems/[system]/page.tsx` - Dynamic route for each design system page.
- Create: `app/page.tsx` - Redirect root route to default system (`newsletter`).
- Create: `components/systems/DesignSystemShell.tsx` - Main two-column app shell with side navigation and content area.
- Create: `components/systems/DesignSystemNav.tsx` - Reusable side nav component.
- Create: `components/systems/designSystems.ts` - Typed registry for available systems (slug, label, status, render fn).
- Create: `components/systems/WebGuidePage.tsx` - Placeholder modular page for the new `web` system.
- Modify: `components/newsletter/NewsletterGuidePage.tsx` - Export only guide content (remove top horizontal nav and shell-specific layout concerns).
- Modify: `app/layout.tsx` - Metadata/title adjusted from newsletter-specific to multi-system.
- Test: `tests/systems/designSystems.test.ts` - Validate registry behavior and fallback/default handling.
- Test: `tests/systems/shell-navigation.test.tsx` - Validate active side nav item + rendered content.
- Create: `vitest.config.ts` and `tests/setup.ts` - Minimal test harness for the new modular shell tests.

### Task 1: Establish test harness and route contract

**Files:**
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `tests/systems/designSystems.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { getDesignSystemBySlug, getDefaultDesignSystem, designSystems } from "@/components/systems/designSystems";

describe("design system registry", () => {
  it("returns newsletter as default system", () => {
    expect(getDefaultDesignSystem().slug).toBe("newsletter");
  });

  it("resolves a known slug", () => {
    expect(getDesignSystemBySlug("web")?.label).toBe("Web");
  });

  it("returns undefined for unknown slug", () => {
    expect(getDesignSystemBySlug("unknown")).toBeUndefined();
  });

  it("keeps slugs unique", () => {
    const slugs = designSystems.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/systems/designSystems.test.ts`
Expected: FAIL with module resolution error because `components/systems/designSystems.ts` does not exist yet.

- [ ] **Step 3: Write minimal implementation**

```ts
// components/systems/designSystems.ts
import type { ReactNode } from "react";
import { NewsletterGuidePage } from "@/components/newsletter/NewsletterGuidePage";
import { WebGuidePage } from "@/components/systems/WebGuidePage";

export type DesignSystemEntry = {
  slug: string;
  label: string;
  description: string;
  content: ReactNode;
};

export const designSystems: DesignSystemEntry[] = [
  {
    slug: "newsletter",
    label: "Newsletter",
    description: "Email design guidelines and blocks.",
    content: <NewsletterGuidePage />,
  },
  {
    slug: "web",
    label: "Web",
    description: "Website design language and component usage.",
    content: <WebGuidePage />,
  },
];

export function getDesignSystemBySlug(slug: string) {
  return designSystems.find((item) => item.slug === slug);
}

export function getDefaultDesignSystem() {
  return designSystems[0];
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/systems/designSystems.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add vitest.config.ts tests/setup.ts tests/systems/designSystems.test.ts components/systems/designSystems.ts components/systems/WebGuidePage.tsx package.json package-lock.json
git commit -m "test: add registry tests for modular design systems"
```

### Task 2: Build reusable shell and side navigation

**Files:**
- Create: `components/systems/DesignSystemNav.tsx`
- Create: `components/systems/DesignSystemShell.tsx`
- Create: `tests/systems/shell-navigation.test.tsx`
- Modify: `components/systems/designSystems.ts`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DesignSystemShell } from "@/components/systems/DesignSystemShell";
import { designSystems } from "@/components/systems/designSystems";

describe("DesignSystemShell", () => {
  it("highlights active system and renders its content", () => {
    render(
      <DesignSystemShell
        systems={designSystems}
        activeSlug="newsletter"
        content={<div>Newsletter Body</div>}
      />,
    );

    expect(screen.getByRole("link", { name: "Newsletter" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByText("Newsletter Body")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/systems/shell-navigation.test.tsx`
Expected: FAIL because `DesignSystemShell` and `DesignSystemNav` do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```tsx
// components/systems/DesignSystemShell.tsx
import type { ReactNode } from "react";
import type { DesignSystemEntry } from "@/components/systems/designSystems";
import { DesignSystemNav } from "@/components/systems/DesignSystemNav";

type DesignSystemShellProps = {
  systems: DesignSystemEntry[];
  activeSlug: string;
  content: ReactNode;
};

export function DesignSystemShell({ systems, activeSlug, content }: DesignSystemShellProps) {
  return (
    <div className="min-h-screen bg-white text-blue-primary md:grid md:grid-cols-[260px_1fr]">
      <aside className="border-r border-blue-primary/10 bg-off-white/60">
        <DesignSystemNav systems={systems} activeSlug={activeSlug} />
      </aside>
      <main className="min-w-0">{content}</main>
    </div>
  );
}
```

```tsx
// components/systems/DesignSystemNav.tsx
import Link from "next/link";
import type { DesignSystemEntry } from "@/components/systems/designSystems";

type DesignSystemNavProps = {
  systems: DesignSystemEntry[];
  activeSlug: string;
};

export function DesignSystemNav({ systems, activeSlug }: DesignSystemNavProps) {
  return (
    <nav aria-label="Design system sections" className="sticky top-0 p-6">
      <p className="mb-6 text-xs font-semibold tracking-widest uppercase">Design Systems</p>
      <ul className="space-y-2">
        {systems.map((system) => {
          const active = system.slug === activeSlug;
          return (
            <li key={system.slug}>
              <Link
                href={`/systems/${system.slug}`}
                aria-current={active ? "page" : undefined}
                className={`block rounded px-3 py-2 text-sm transition ${
                  active ? "bg-blue-primary text-white" : "hover:bg-blue-primary/10"
                }`}
              >
                {system.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/systems/shell-navigation.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add components/systems/DesignSystemShell.tsx components/systems/DesignSystemNav.tsx tests/systems/shell-navigation.test.tsx components/systems/designSystems.ts
git commit -m "feat: add reusable side nav shell for design systems"
```

### Task 3: Wire App Router routes for modular systems

**Files:**
- Create: `app/page.tsx`
- Create: `app/systems/[system]/page.tsx`
- Modify: `components/systems/designSystems.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { resolveDesignSystemSlug } from "@/components/systems/designSystems";

describe("resolveDesignSystemSlug", () => {
  it("returns incoming slug when known", () => {
    expect(resolveDesignSystemSlug("web")).toBe("web");
  });

  it("falls back to default slug when unknown", () => {
    expect(resolveDesignSystemSlug("ios")).toBe("newsletter");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/systems/designSystems.test.ts`
Expected: FAIL with `resolveDesignSystemSlug` missing.

- [ ] **Step 3: Write minimal implementation**

```ts
// components/systems/designSystems.ts
export function resolveDesignSystemSlug(slug: string) {
  return getDesignSystemBySlug(slug)?.slug ?? getDefaultDesignSystem().slug;
}
```

```tsx
// app/page.tsx
import { redirect } from "next/navigation";
import { getDefaultDesignSystem } from "@/components/systems/designSystems";

export default function Home() {
  redirect(`/systems/${getDefaultDesignSystem().slug}`);
}
```

```tsx
// app/systems/[system]/page.tsx
import { DesignSystemShell } from "@/components/systems/DesignSystemShell";
import {
  designSystems,
  getDesignSystemBySlug,
  resolveDesignSystemSlug,
} from "@/components/systems/designSystems";

type PageProps = {
  params: Promise<{ system: string }>;
};

export default async function DesignSystemPage({ params }: PageProps) {
  const { system } = await params;
  const slug = resolveDesignSystemSlug(system);
  const entry = getDesignSystemBySlug(slug)!;

  return (
    <DesignSystemShell
      systems={designSystems}
      activeSlug={entry.slug}
      content={entry.content}
    />
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/systems/designSystems.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/systems/[system]/page.tsx components/systems/designSystems.ts tests/systems/designSystems.test.ts
git commit -m "feat: route design systems through modular slug pages"
```

### Task 4: Decouple newsletter page from global nav and finalize metadata

**Files:**
- Modify: `components/newsletter/NewsletterGuidePage.tsx`
- Modify: `app/layout.tsx`
- Create: `components/systems/WebGuidePage.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NewsletterGuidePage } from "@/components/newsletter/NewsletterGuidePage";

describe("NewsletterGuidePage", () => {
  it("does not render a duplicated global page nav label", () => {
    render(<NewsletterGuidePage />);
    expect(screen.queryByText("Design Systems")).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/systems/shell-navigation.test.tsx`
Expected: FAIL if the newsletter page still contains top-level nav shell concerns.

- [ ] **Step 3: Write minimal implementation**

```tsx
// components/newsletter/NewsletterGuidePage.tsx
// Remove the local `Nav()` component and the `<Nav />` usage so this component
// exports content-only sections. Keep hero + section blocks unchanged.
```

```tsx
// components/systems/WebGuidePage.tsx
export function WebGuidePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-semibold">Web Design System</h1>
      <p className="max-w-2xl text-base leading-relaxed">
        This module is the foundation for website typography, spacing, components,
        and accessibility standards. Add web-specific sections incrementally.
      </p>
    </section>
  );
}
```

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: "Design Systems · Comptoir Sud Pacifique",
  description: "Internal modular guides for newsletter, web, and future channels.",
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run`
Expected: PASS across `tests/systems/*.test.ts*`

Run: `npm run lint`
Expected: PASS with no new lint errors.

- [ ] **Step 5: Commit**

```bash
git add components/newsletter/NewsletterGuidePage.tsx components/systems/WebGuidePage.tsx app/layout.tsx
git commit -m "refactor: make newsletter guide content modular for shared shell"
```

## Self-Review

1. **Spec coverage:**  
   - Multi design systems (`newsletter`, `web`, future-ready) covered via typed registry and dynamic route.  
   - Side navigation redesign covered via shell + nav components.  
   - Modularity covered by separate page modules and registry-driven composition.

2. **Placeholder scan:**  
   - No `TODO`/`TBD` placeholders in actionable steps.  
   - Every implementation step includes concrete file paths, code, and commands.

3. **Type consistency:**  
   - `slug` is the canonical route key across nav, registry, and route resolver.  
   - `DesignSystemEntry` shared across shell/nav to avoid prop divergence.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-17-multi-design-system-shell.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
