import Image from "next/image";
import { AnatomyMap } from "./AnatomyMap";
import { ExampleNewsletter } from "./ExampleNewsletter";
import { PaletteGrid } from "./PaletteGrid";
import { SectionHeader } from "./SectionHeader";
import { spacingScale } from "./data";

function Nav() {
  const links = [
    ["palette", "Palette"],
    ["typo", "Typographie"],
    ["spacing", "Espacement"],
    ["boutons", "Boutons"],
    ["anatomie", "Anatomie"],
    ["exemple", "Exemple"],
  ] as const;

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-primary/10 bg-off-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo_vec.svg"
            alt="Comptoir Sud Pacifique"
            width={144}
            height={28}
            className="h-7 w-auto"
            priority
          />
          <span className="text-sm font-medium text-blue-primary">
            Design System Newsletter
          </span>
        </div>
        <div className="hidden gap-8 text-sm font-medium text-blue-primary md:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={`#${href}`}
              className="transition hover:text-blue-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-8">
      <div className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-blue-primary uppercase">
        <span className="h-px w-8 bg-blue-primary" />
        Guide interne · Équipe Marketing
      </div>
      <h1 className="font-display mb-8 max-w-4xl text-5xl leading-[1.02] tracking-tight text-blue-primary sm:text-7xl">
        Le design system des <em className="text-blue-primary">newsletters</em>,
        en un coup d&apos;œil.
      </h1>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-blue-primary">
        Un langage visuel commun pour tous les emails Comptoir Sud Pacifique.
        Cette page rassemble les règles, les composants et un exemple de mise en
        œuvre, pour produire des newsletters cohérentes desktop comme mobile.
      </p>
      <div className="flex flex-wrap gap-10 border-t border-blue-primary/15 pt-8 text-sm text-blue-primary">
        <div>
          <strong className="mb-1 block text-blue-primary">Brand</strong>
          Comptoir Sud Pacifique
        </div>
        <div>
          <strong className="mb-1 block text-blue-primary">Version</strong>
          1.0 · Avril 2026
        </div>
        <div>
          <strong className="mb-1 block text-blue-primary">Canal</strong>
          Email · Klaviyo
        </div>
        <div>
          <strong className="mb-1 block text-blue-primary">Responsive</strong>
          Desktop + Mobile
        </div>
      </div>
    </header>
  );
}

export function NewsletterGuidePage() {
  return (
    <div className="bg-white text-blue-primary">
      <Nav />
      <Hero />

      <SectionHeader
        id="palette"
        number="01"
        title="Palette chromatique"
        description={
          <>
            Quatre couleurs, pas une de plus. Le <strong>blue-primary</strong>{" "}
            porte toute l&apos;identité, les autres sont là pour respirer.
            Cliquez pour copier le hex.
          </>
        }
      />
      <section className="mx-auto -mt-16 mb-16 w-full max-w-6xl px-4 sm:px-8">
        <PaletteGrid />
      </section>

      <SectionHeader
        id="typo"
        number="02"
        title="Typographie"
        description={
          <>
            Une seule famille, <strong>Freight Neo Pro</strong>, déclinée en
            trois rôles.
          </>
        }
      />
      <section className="mx-auto -mt-16 mb-16 w-full max-w-6xl px-4 sm:px-8">
        <div className="space-y-8 border border-blue-primary/10 bg-white p-8 sm:p-16">
          <div className="grid gap-3 border-b border-dashed border-blue-primary/20 pb-8 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-widest text-blue-primary uppercase">
              Title 1
              <small className="mt-1 block text-xs font-normal tracking-normal text-blue-primary">
                Freight Neo Pro · Bold · 20px
              </small>
            </div>
            <div className="text-xl font-bold text-blue-primary">
              Nouvelle collection : Vanille Coco
            </div>
          </div>
          <div className="grid gap-3 border-b border-dashed border-blue-primary/20 pb-8 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-widest text-blue-primary uppercase">
              Title 2
              <small className="mt-1 block text-xs font-normal tracking-normal text-blue-primary">
                Freight Neo Pro · Bold · 18px
              </small>
            </div>
            <div className="text-lg font-bold text-blue-primary">
              Un souffle d&apos;iles lointaines
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-widest text-blue-primary uppercase">
              Body
              <small className="mt-1 block text-xs font-normal tracking-normal text-blue-primary">
                Freight Neo Pro · Regular · 16px
              </small>
            </div>
            <div className="text-base leading-relaxed text-blue-primary">
              Depuis 1974, Comptoir Sud Pacifique célèbre l&apos;esprit du
              voyage à travers des parfums inspirés des confins du monde.
            </div>
          </div>
          <div className="grid gap-3 border-t border-dashed border-blue-primary/20 pt-8 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-widest text-blue-primary uppercase">
              Alignement
              <small className="mt-1 block text-xs font-normal tracking-normal text-blue-primary">
                Lisibilite digitale
              </small>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-blue-primary">
              <p>
                Pour les <strong>longs paragraphes</strong>, privilégier
                l&apos;alignement à gauche (début de ligne constant). Ne pas
                justifier le texte: la justification crée des espacements
                irréguliers entre les mots, ce qui dégrade la lecture à l&apos;écran
                et l&apos;accessibilité.
              </p>
              <p>
                L&apos;alignement centré ou à droite reste possible sur des textes
                courts (titres, citations, labels), selon le contexte visuel.
                Comme le rappelle Mandy K. Yu:{" "}
                <em>&quot;Don&apos;t center everything&quot;</em>. En pratique, c&apos;est
                du cas par cas selon la longueur du contenu.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-blue-primary/15 bg-off-white p-4">
                  <p className="mb-2 text-xs font-semibold tracking-wider uppercase">
                    A privilegier · Long texte
                  </p>
                  <p className="text-left">
                    La nouvelle collection vous emmène dans un voyage olfactif
                    inspiré des lagons, des fleurs blanches et des accords
                    solaires. Ce bloc long reste fluide et facile à parcourir.
                  </p>
                </div>
                <div className="border border-blue-primary/15 bg-off-white p-4">
                  <p className="mb-2 text-xs font-semibold tracking-wider uppercase">
                    A eviter · Justifie
                  </p>
                  <p className="text-justify">
                    La nouvelle collection vous emmène dans un voyage olfactif
                    inspire des lagons, des fleurs blanches et des accords
                    solaires. Le rythme de lecture devient plus irregulier.
                  </p>
                </div>
                <div className="border border-blue-primary/15 bg-off-white p-4">
                  <p className="mb-2 text-xs font-semibold tracking-wider uppercase">
                    Cas court · Centre
                  </p>
                  <p className="text-center">Edition limitee - Vanille Coco</p>
                </div>
                <div className="border border-blue-primary/15 bg-off-white p-4">
                  <p className="mb-2 text-xs font-semibold tracking-wider uppercase">
                    Cas court · Droite
                  </p>
                  <p className="text-right">Offre valable jusqu&apos;au 30 avril</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionHeader
        id="spacing"
        number="03"
        title="Echelle d'espacement"
        description={
          <>
            Toutes les marges et paddings suivent une echelle en{" "}
            <strong>puissances de 2</strong>. En secours: rester sur un multiple
            de 2.
          </>
        }
      />
      <section className="mx-auto -mt-16 mb-16 w-full max-w-6xl px-4 sm:px-8">
        <div className="mb-8 inline-block bg-blue-light px-4 py-3 text-sm text-blue-primary">
          Regle:{" "}
          <code className="bg-white px-1.5 py-0.5 font-mono text-xs text-blue-primary">
            8 → 16 → 32 → 64 → 128 → 256 → 512
          </code>
        </div>
        <div className="space-y-4">
          {spacingScale.map((item) => (
            <div
              key={item.label}
              className="grid items-center gap-4 sm:grid-cols-[80px_1fr_160px]"
            >
              <div className="font-mono text-sm font-semibold text-blue-primary">
                {item.label}
              </div>
              <div className="h-8 overflow-hidden border border-blue-primary/10 bg-white">
                <div
                  className="h-full bg-blue-primary transition-all"
                  style={{ width: item.widthPercent }}
                />
              </div>
              <div className="hidden text-right text-xs text-blue-primary sm:block">
                {item.usage}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionHeader
        id="boutons"
        number="04"
        title="Boutons"
        description={
          <>
            Deux styles seulement: le <strong>souligne</strong> pour les CTA
            légers, le <strong>plein</strong> pour les actions principales.
          </>
        }
      />
      <section className="mx-auto -mt-16 mb-16 grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-8">
        <article className="flex flex-col items-center gap-8 border border-blue-primary/10 bg-white px-8 py-16 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-blue-primary uppercase">
            Style 1 · Underlined
          </h3>
          <button
            type="button"
            className="text-blue-primary underline underline-offset-4"
          >
            Découvrir la collection
          </button>
          <p className="text-sm leading-relaxed text-blue-primary">
            Texte{" "}
            <code className="bg-off-white px-1 text-xs">blue-primary</code>,
            souligne, sans fond.
          </p>
        </article>
        <article className="flex flex-col items-center gap-8 border border-blue-primary/10 bg-white px-8 py-16 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-blue-primary uppercase">
            Style 2 · Filled
          </h3>
          <button
            type="button"
            className="bg-blue-primary px-6 py-3 text-base font-medium text-white"
          >
            Acheter maintenant
          </button>
          <p className="text-sm leading-relaxed text-blue-primary">
            Texte blanc, fond{" "}
            <code className="bg-off-white px-1 text-xs">blue-primary</code>,
            padding interne{" "}
            <code className="bg-off-white px-1 text-xs">12px</code>.
          </p>
        </article>
      </section>

      <SectionHeader
        id="anatomie"
        number="05"
        title="Anatomie d'une newsletter"
        description="La structure canonique, de haut en bas. Survolez les blocs pour relier schéma et règles."
      />
      <section className="mx-auto -mt-16 mb-16 w-full max-w-6xl px-4 sm:px-8">
        <AnatomyMap />
      </section>

      <SectionHeader
        id="exemple"
        number="06"
        title="Exemple complet"
        description="Tous les composants assemblés dans une newsletter fictive. Basculez entre desktop et mobile."
      />
      <section className="mx-auto -mt-16 mb-24 w-full max-w-6xl px-4 sm:px-8">
        <ExampleNewsletter />
      </section>

      <footer className="mx-auto mt-8 grid w-full max-w-6xl gap-8 border-t border-blue-primary/15 px-4 py-16 text-sm text-blue-primary sm:grid-cols-3 sm:px-8">
        <div className="sm:col-span-1">
          <div className="font-display mb-2 text-xl text-blue-primary italic">
            Design System Newsletter v1.0
          </div>
          <p>Document vivant à mettre à jour à chaque évolution.</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-wider text-blue-primary uppercase">
            Source
          </h4>
          <p>Notion · Guide Newsletter</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-wider text-blue-primary uppercase">
            Maintainer
          </h4>
          <p>Équipe Digital &amp; Brand · Comptoir Sud Pacifique</p>
        </div>
      </footer>
    </div>
  );
}
