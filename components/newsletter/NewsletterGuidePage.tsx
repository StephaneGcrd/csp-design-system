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
        <div className="hidden gap-8 text-sm font-medium text-ink-soft md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={`#${href}`} className="transition hover:text-blue-primary">
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
        Guide interne · Equipe Marketing
      </div>
      <h1 className="font-display mb-8 max-w-4xl text-5xl leading-[1.02] tracking-tight text-ink sm:text-7xl">
        Le design system des <em className="text-blue-primary">newsletters</em>, en
        un coup d&apos;oeil.
      </h1>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Un langage visuel commun pour tous les emails Comptoir Sud Pacifique.
        Cette page rassemble les regles, les composants et un exemple de mise en
        oeuvre, pour produire des newsletters coherentes desktop comme mobile.
      </p>
      <div className="flex flex-wrap gap-10 border-t border-blue-primary/15 pt-8 text-sm text-ink-soft">
        <div>
          <strong className="mb-1 block text-ink">Brand</strong>
          Comptoir Sud Pacifique
        </div>
        <div>
          <strong className="mb-1 block text-ink">Version</strong>
          1.0 · Avril 2026
        </div>
        <div>
          <strong className="mb-1 block text-ink">Canal</strong>
          Email · Klaviyo
        </div>
        <div>
          <strong className="mb-1 block text-ink">Responsive</strong>
          Desktop + Mobile
        </div>
      </div>
    </header>
  );
}

export function NewsletterGuidePage() {
  return (
    <div className="bg-white text-ink">
      <Nav />
      <Hero />

      <SectionHeader
        id="palette"
        number="01"
        title="Palette chromatique"
        description={
          <>
            Quatre couleurs, pas une de plus. Le <strong>blue-primary</strong>{" "}
            porte toute l&apos;identite, les autres sont la pour respirer.
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
            Une seule famille, <strong>Freight Neo Pro</strong>, declinee en
            trois roles. Cette vitrine utilise Plus Jakarta Sans comme substitut
            web.
          </>
        }
      />
      <section className="mx-auto -mt-16 mb-16 w-full max-w-6xl px-4 sm:px-8">
        <div className="space-y-8 border border-blue-primary/10 bg-white p-8 sm:p-16">
          <div className="grid gap-3 border-b border-dashed border-blue-primary/20 pb-8 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-[0.1em] text-blue-primary uppercase">
              Title 1
              <small className="mt-1 block text-xs font-normal tracking-normal text-ink-soft">
                Freight Neo Pro · Bold · 20px
              </small>
            </div>
            <div className="text-xl font-bold text-ink">
              Nouvelle collection : Vanille Coco
            </div>
          </div>
          <div className="grid gap-3 border-b border-dashed border-blue-primary/20 pb-8 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-[0.1em] text-blue-primary uppercase">
              Title 2
              <small className="mt-1 block text-xs font-normal tracking-normal text-ink-soft">
                Freight Neo Pro · Bold · 18px
              </small>
            </div>
            <div className="text-lg font-bold text-ink">Un souffle d&apos;iles lointaines</div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
            <div className="text-[11px] font-semibold tracking-[0.1em] text-blue-primary uppercase">
              Body
              <small className="mt-1 block text-xs font-normal tracking-normal text-ink-soft">
                Freight Neo Pro · Regular · 16px
              </small>
            </div>
            <div className="text-base leading-relaxed text-ink">
              Depuis 1974, Comptoir Sud Pacifique celebre l&apos;esprit du voyage a
              travers des parfums inspires des confins du monde.
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
        <div className="mb-8 inline-block bg-blue-light px-4 py-3 text-sm text-ink-soft">
          Regle:{" "}
          <code className="bg-white px-1.5 py-0.5 font-mono text-xs text-ink">
            8 → 16 → 32 → 64 → 128 → 256 → 512
          </code>
        </div>
        <div className="space-y-4">
          {spacingScale.map((item) => (
            <div key={item.label} className="grid items-center gap-4 sm:grid-cols-[80px_1fr_160px]">
              <div className="font-mono text-sm font-semibold text-ink">{item.label}</div>
              <div className="h-8 overflow-hidden border border-blue-primary/10 bg-white">
                <div
                  className="h-full bg-blue-primary transition-all"
                  style={{ width: item.widthPercent }}
                />
              </div>
              <div className="hidden text-right text-xs text-ink-soft sm:block">
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
            legers, le <strong>plein</strong> pour les actions principales.
          </>
        }
      />
      <section className="mx-auto -mt-16 mb-16 grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-8">
        <article className="flex flex-col items-center gap-8 border border-blue-primary/10 bg-white px-8 py-16 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-blue-primary uppercase">
            Style 1 · Underlined
          </h3>
          <button type="button" className="text-blue-primary underline underline-offset-4">
            Decouvrir la collection
          </button>
          <p className="text-sm leading-relaxed text-ink-soft">
            Texte <code className="bg-off-white px-1 text-xs">blue-primary</code>,
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
          <p className="text-sm leading-relaxed text-ink-soft">
            Texte blanc, fond{" "}
            <code className="bg-off-white px-1 text-xs">blue-primary</code>,
            padding interne <code className="bg-off-white px-1 text-xs">12px</code>.
          </p>
        </article>
      </section>

      <SectionHeader
        id="anatomie"
        number="05"
        title="Anatomie d'une newsletter"
        description="La structure canonique, de haut en bas. Survolez les blocs pour relier schema et regles."
      />
      <section className="mx-auto -mt-16 mb-16 w-full max-w-6xl px-4 sm:px-8">
        <AnatomyMap />
      </section>

      <SectionHeader
        id="exemple"
        number="06"
        title="Exemple complet"
        description="Tous les composants assembles dans une newsletter fictive. Basculez entre desktop et mobile."
      />
      <section className="mx-auto -mt-16 mb-24 w-full max-w-6xl px-4 sm:px-8">
        <ExampleNewsletter />
      </section>

      <footer className="mx-auto mt-8 grid w-full max-w-6xl gap-8 border-t border-blue-primary/15 px-4 py-16 text-sm text-ink-soft sm:grid-cols-3 sm:px-8">
        <div className="sm:col-span-1">
          <div className="font-display mb-2 text-xl text-ink italic">
            Design System Newsletter v1.0
          </div>
          <p>Document vivant a mettre a jour a chaque evolution.</p>
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
          <p>Equipe Digital &amp; Brand · Comptoir Sud Pacifique</p>
        </div>
      </footer>
    </div>
  );
}
