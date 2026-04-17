import { redirect } from "next/navigation";
import { getDefaultDesignSystem } from "@/components/systems/designSystems";

export default function BrandIndexPage() {
  redirect(`/brand/${getDefaultDesignSystem().slug}`);
}
