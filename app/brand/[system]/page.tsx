import { redirect } from "next/navigation";
import { DesignSystemShell } from "@/components/systems/DesignSystemShell";
import {
  getDesignSystemNavItems,
  getDesignSystemBySlug,
  resolveDesignSystemSlug,
} from "@/components/systems/designSystems";

type PageProps = {
  params: Promise<{ system: string }>;
};

export default async function BrandPage({ params }: PageProps) {
  const { system } = await params;
  const slug = resolveDesignSystemSlug(system);

  if (slug !== system) {
    redirect(`/brand/${slug}`);
  }

  const entry = getDesignSystemBySlug(slug);

  if (!entry) {
    redirect(`/brand/${resolveDesignSystemSlug("")}`);
  }

  const GuidePage = entry.GuidePage;

  return (
    <DesignSystemShell
      systems={getDesignSystemNavItems()}
      activeSlug={entry.slug}
      content={<GuidePage />}
    />
  );
}
