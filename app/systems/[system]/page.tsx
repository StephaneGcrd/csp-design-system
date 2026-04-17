import { redirect } from "next/navigation";
import { resolveDesignSystemSlug } from "@/components/systems/designSystems";

type PageProps = {
  params: Promise<{ system: string }>;
};

export default async function DesignSystemPage({ params }: PageProps) {
  const { system } = await params;
  const slug = resolveDesignSystemSlug(system);
  redirect(`/brand/${slug}`);
}
