import Image from "next/image";
import Link from "next/link";
import type { DesignSystemNavItem } from "@/components/systems/designSystems";

type DesignSystemNavProps = {
  systems: DesignSystemNavItem[];
  activeSlug: string;
  onNavigate?: () => void;
};

export function DesignSystemNav({
  systems,
  activeSlug,
  onNavigate,
}: DesignSystemNavProps) {
  return (
    <nav aria-label="Design systems navigation" className="p-5 md:p-7">
      <div className="mb-8 px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logo_vec.svg"
            alt="Comptoir Sud Pacifique"
            width={120}
            height={24}
            className="h-6 w-auto"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-blue-primary">
              CSP Design Systems
            </p>
            <p className="truncate text-xs text-blue-primary/70">Internal guide</p>
          </div>
        </div>
      </div>

      <p className="mb-4 px-2 text-[11px] font-semibold tracking-[0.14em] text-blue-primary/70 uppercase">
        Design Systems
      </p>

      <ul className="space-y-2.5">
        {systems.map((system) => {
          const isActive = system.slug === activeSlug;
          return (
            <li key={system.slug}>
              <Link
                href={`/systems/${system.slug}`}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
                className={`block px-4 py-3.5 text-sm transition ${
                  isActive
                    ? "text-blue-primary"
                    : "text-blue-primary/75 hover:text-blue-primary"
                }`}
              >
                <span className="mb-1.5 block">
                  <span
                    className={`block text-[15px] ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {system.label}
                  </span>
                </span>
                <span
                  className={`block text-xs leading-relaxed ${
                    isActive ? "text-blue-primary/85" : "text-blue-primary/60"
                  }`}
                >
                  {system.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
