import { BrandGuideIntro } from "@/components/brand/BrandGuideIntro";

function CharterPrinciples() {
  return (
    <section className="mx-auto mb-24 w-full max-w-6xl px-4 sm:px-8">
      <article className="border border-blue-primary/10 bg-white p-8 sm:p-12">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-blue-primary sm:text-4xl">
          Fondations visuelles
        </h2>
        <p className="mb-6 max-w-3xl text-base leading-relaxed text-blue-primary">
          Cette page consolide les standards graphiques pour assurer une
          exécution cohérente de l&apos;identité de marque dans tous les contextes.
        </p>
        <ul className="grid gap-4 text-sm text-blue-primary sm:grid-cols-2">
          <li className="border border-blue-primary/10 bg-off-white p-4">
            Palette chromatique et hiérarchie des couleurs
          </li>
          <li className="border border-blue-primary/10 bg-off-white p-4">
            Règles typographiques (styles, tailles, rythmes)
          </li>
          <li className="border border-blue-primary/10 bg-off-white p-4">
            Grille, espacements et composition éditoriale
          </li>
          <li className="border border-blue-primary/10 bg-off-white p-4">
            Iconographie, imagery et principes d&apos;usage
          </li>
        </ul>
      </article>
    </section>
  );
}

export function BrandCharterGuidePage() {
  return (
    <div className="bg-white text-blue-primary">
      <BrandGuideIntro
        title="Charte graphique"
        description={
          <>
            Référence opérationnelle des règles visuelles de la marque : couleurs,
            typographies, composition, iconographie et principes
            d&apos;application sur l&apos;ensemble des supports.
          </>
        }
      />
      <CharterPrinciples />
    </div>
  );
}
