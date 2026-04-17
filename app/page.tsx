import { redirect } from "next/navigation";
import { getDefaultDesignSystem } from "@/components/systems/designSystems";

export default function Home() {
  redirect(`/systems/${getDefaultDesignSystem().slug}`);
}
