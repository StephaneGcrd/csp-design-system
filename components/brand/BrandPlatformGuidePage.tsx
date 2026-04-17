import { BrandGuideIntro } from "@/components/brand/BrandGuideIntro";

function ManifesteSection() {
  return (
    <section className="mx-auto mb-24 w-full max-w-6xl px-4 sm:px-8">
      <article className="border border-blue-primary/10 bg-off-white p-8 sm:p-12">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-blue-primary sm:text-4xl">
          Manifeste de marque
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-blue-primary">
          Cadre narratif et artistique qui formalise la vision, la posture et le
          ton de la marque. Cette page aligne les choix de direction artistique
          avec l&apos;identité, l&apos;héritage et l&apos;ambition éditoriale.
        </p>
      </article>
    </section>
  );
}

export function BrandPlatformGuidePage() {
  return (
    <div className="bg-white text-blue-primary">
      <BrandGuideIntro
        title="Plateforme de marque"
        description={
          <>
            Cette page présente la vision de marque et le cadre de direction
            artistique de Comptoir Sud Pacifique. Elle formalise
            l&apos;intention, la posture et les principes qui orientent les choix
            créatifs.
          </>
        }
      />
      <ManifesteSection />
    </div>
  );
}
