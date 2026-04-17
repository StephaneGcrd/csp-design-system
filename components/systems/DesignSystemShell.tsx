"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { DesignSystemNav } from "@/components/systems/DesignSystemNav";
import type { DesignSystemNavItem } from "@/components/systems/designSystems";

type DesignSystemShellProps = {
  systems: DesignSystemNavItem[];
  activeSlug: string;
  content: ReactNode;
};

export function DesignSystemShell({
  systems,
  activeSlug,
  content,
}: DesignSystemShellProps) {
  const [mobileVisible, setMobileVisible] = useState(false);
  const [mobileMounted, setMobileMounted] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function closeMobileMenu() {
    setMobileVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      setMobileMounted(false);
      closeTimeoutRef.current = null;
    }, 220);
  }

  function openMobileMenu() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMobileMounted(true);
    requestAnimationFrame(() => setMobileVisible(true));
  }

  useEffect(() => {
    if (!mobileMounted) {
      return;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [mobileMounted]);

  useEffect(() => {
    if (!mobileMounted) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMounted]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-blue-primary md:grid md:grid-cols-[340px_1fr]">
      <div className="sticky top-0 z-30 bg-[#f5f6f8]/75 px-4 py-3 backdrop-blur-xl md:hidden">
        <button
          type="button"
          onClick={openMobileMenu}
          aria-expanded={mobileVisible}
          aria-controls="design-system-mobile-navigation"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-primary"
        >
          <i aria-hidden className="ri-menu-line text-base leading-none" />
          Menu
        </button>
      </div>

      <aside className="hidden border-r border-slate-200/80 bg-white md:block md:min-h-screen">
        <div className="sticky top-0">
          <DesignSystemNav systems={systems} activeSlug={activeSlug} />
        </div>
      </aside>

      {mobileMounted ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className={`absolute inset-0 bg-[#0b27491a] backdrop-blur-2xl transition-opacity duration-200 ${
              mobileVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
          />
          <div
            id="design-system-mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Brand and systems navigation"
            className={`absolute inset-y-0 left-0 w-[86%] max-w-xs border-r border-slate-200/80 bg-white transition-transform duration-200 ease-out ${
              mobileVisible ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-end px-5 pt-4">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-primary"
              >
                <i aria-hidden className="ri-close-line text-sm leading-none" />
                Fermer
              </button>
            </div>
            <DesignSystemNav
              systems={systems}
              activeSlug={activeSlug}
              onNavigate={closeMobileMenu}
            />
          </div>
        </div>
      ) : null}

      <main className="min-w-0 bg-white">{content}</main>
    </div>
  );
}
