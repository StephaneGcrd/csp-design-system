import type { ReactNode } from "react";

type BrandGuideIntroProps = {
  title: string;
  description: ReactNode;
};

export function BrandGuideIntro({ title, description }: BrandGuideIntroProps) {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-20 pb-12 sm:px-8">
      <div className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-blue-primary uppercase">
        <span className="h-px w-8 bg-blue-primary" aria-hidden />
        Guide interne · Brand & Direction Artistique
      </div>
      <h1 className="font-display mb-6 max-w-4xl text-5xl leading-tight tracking-tight text-blue-primary sm:text-6xl">
        {title}
      </h1>
      <p className="max-w-3xl text-lg leading-relaxed text-blue-primary">{description}</p>
    </header>
  );
}
