export function WebGuidePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8">
      <div className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-blue-primary uppercase">
        <span className="h-px w-8 bg-blue-primary" />
        Guide interne · Equipe Produit
      </div>
      <h1 className="mb-6 text-5xl leading-tight tracking-tight text-blue-primary sm:text-6xl">
        Le design system <em className="italic">web</em>, en construction.
      </h1>
      <p className="max-w-3xl text-lg leading-relaxed text-blue-primary">
        Cet espace accueillera les fondations web (tokens, composants, patterns
        d&apos;interface et accessibilite) pour aligner les experiences digitales
        avec la plateforme newsletter.
      </p>
    </section>
  );
}
