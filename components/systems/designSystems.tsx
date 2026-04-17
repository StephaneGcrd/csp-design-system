import { NewsletterGuidePage } from "@/components/newsletter/NewsletterGuidePage";
import { BrandCharterGuidePage } from "@/components/brand/BrandCharterGuidePage";
import { BrandPlatformGuidePage } from "@/components/brand/BrandPlatformGuidePage";
import { WebGuidePage } from "@/components/systems/WebGuidePage";
import type { ComponentType } from "react";

/** Where the entry appears in the side navigation (single source of truth). */
export type DesignSystemNavSection = "brand" | "systems";

export type DesignSystemEntry = {
  slug: string;
  label: string;
  description: string;
  iconClass: string;
  navSection: DesignSystemNavSection;
  GuidePage: ComponentType;
};

export type DesignSystemNavItem = Pick<
  DesignSystemEntry,
  "slug" | "label" | "description" | "iconClass" | "navSection"
>;

export const DEFAULT_DESIGN_SYSTEM_SLUG = "newsletter";

export const designSystems: DesignSystemEntry[] = [
  {
    slug: "plateforme-de-marque",
    label: "Plateforme de marque",
    description: "Vision de marque et manifeste de direction artistique.",
    iconClass: "ri-brush-line",
    navSection: "brand",
    GuidePage: BrandPlatformGuidePage,
  },
  {
    slug: "charte-graphique",
    label: "Charte graphique",
    description: "Règles visuelles et principes d'application de la marque.",
    iconClass: "ri-palette-line",
    navSection: "brand",
    GuidePage: BrandCharterGuidePage,
  },
  {
    slug: "newsletter",
    label: "Newsletter",
    description: "Guide email marketing (Klaviyo, structure et composants).",
    iconClass: "ri-mail-send-line",
    navSection: "systems",
    GuidePage: NewsletterGuidePage,
  },
  {
    slug: "web",
    label: "Web",
    description: "Guide web (fondations UI et patterns d'interface).",
    iconClass: "ri-global-line",
    navSection: "systems",
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
  return designSystems.map(({ slug, label, description, iconClass, navSection }) => ({
    slug,
    label,
    description,
    iconClass,
    navSection,
  }));
}
