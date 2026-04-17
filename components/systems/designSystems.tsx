import { NewsletterGuidePage } from "@/components/newsletter/NewsletterGuidePage";
import { WebGuidePage } from "@/components/systems/WebGuidePage";
import type { ComponentType } from "react";

export type DesignSystemEntry = {
  slug: string;
  label: string;
  description: string;
  iconClass: string;
  GuidePage: ComponentType;
};

export type DesignSystemNavItem = Pick<
  DesignSystemEntry,
  "slug" | "label" | "description" | "iconClass"
>;

export const DEFAULT_DESIGN_SYSTEM_SLUG = "newsletter";

export const designSystems: DesignSystemEntry[] = [
  {
    slug: "newsletter",
    label: "Newsletter",
    description: "Guide email marketing (Klaviyo, structure et composants).",
    iconClass: "ri-mail-send-line",
    GuidePage: NewsletterGuidePage,
  },
  {
    slug: "web",
    label: "Web",
    description: "Guide web (fondations UI et patterns d'interface).",
    iconClass: "ri-global-line",
    GuidePage: WebGuidePage,
  },
];

function normalizeDesignSystemSlug(slug: string): string {
  return slug.trim().toLowerCase();
}

export function getDesignSystemBySlug(slug: string): DesignSystemEntry | undefined {
  const normalizedSlug = normalizeDesignSystemSlug(slug);
  return designSystems.find((entry) => entry.slug === normalizedSlug);
}

export function getDefaultDesignSystem(): DesignSystemEntry {
  const entry = getDesignSystemBySlug(DEFAULT_DESIGN_SYSTEM_SLUG);
  if (!entry) {
    throw new Error("Default design system is not configured.");
  }
  return entry;
}

export function resolveDesignSystemSlug(slug: string): string {
  return getDesignSystemBySlug(slug)?.slug ?? getDefaultDesignSystem().slug;
}

export function getDesignSystemNavItems(): DesignSystemNavItem[] {
  return designSystems.map(({ slug, label, description, iconClass }) => ({
    slug,
    label,
    description,
    iconClass,
  }));
}
