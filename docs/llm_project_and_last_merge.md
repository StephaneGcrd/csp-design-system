# LLM Context — Projet CSP Design System + Dernier Merge

## 1) Vue d'ensemble du projet

### Objectif produit
Ce repository contient une application web interne (Next.js) servant de **plateforme de marque et hub de design systems** pour Comptoir Sud Pacifique.

Le produit est organise autour de guides modulaires enregistres dans un registry unique:
- **Brand** (guides internes): `plateforme-de-marque`, `charte-graphique`,
- **Systems** (canaux / execution): `newsletter` (guide complet), `web` (module en construction),
- extension possible pour de futurs canaux via `components/systems/designSystems.tsx`.

Le guide newsletter centralise:
- les couleurs autorisées,
- la typographie,
- l'echelle d'espacement,
- les styles de boutons,
- l'anatomie d'une newsletter,
- un exemple complet desktop/mobile.

### Stack technique
- Framework: `Next.js 16.2.4` (App Router)
- UI: `React 19.2.4`
- Langage: `TypeScript`
- Styles: `Tailwind CSS v4`
- Lint: `ESLint 9` via `eslint-config-next`

### Structure utile
- `app/page.tsx`: redirection vers `/brand/{slug}` du guide par defaut.
- `app/brand/page.tsx`: redirection vers `/brand/{defaultSlug}`.
- `app/brand/[system]/page.tsx`: **route canonique** — shell + contenu du guide pour le slug resolu.
- `app/systems/[system]/page.tsx`: **redirection** vers `/brand/{slug}` (URLs historiques / liens externes).
- `components/systems/designSystems.tsx`: registry typee (`slug`, `label`, `description`, `iconClass`, `navSection`, `GuidePage`) + resolution de slug.
- `components/systems/DesignSystemShell.tsx`: shell partage (layout + nav desktop/mobile).
- `components/systems/DesignSystemNav.tsx`: navigation laterale groupee (sections **Brand** / **Systems** selon `navSection`).
- `components/brand/*`: pages guide marque (`BrandPlatformGuidePage`, `BrandCharterGuidePage`, `BrandGuideIntro`).
- `components/brand/ManifesteGallery.tsx`: grilles d'images du Manifeste (placeholders si dossier vide); region nommee (`role="region"`, `aria-labelledby`).
- `lib/getManifesteGalleryImages.ts`: lecture **serveur uniquement** des fichiers image sous `public/brands/comptoir-sud-pacifique/manifeste/{section}/` (slug valide requis, pas de traversal).
- `public/brands/comptoir-sud-pacifique/manifeste/*`: assets JPEG/PNG par theme (`minimalisme`, `dessin`, `ligne-chemin`, `postal`, `sensorialite`, `voyage-exotisme`, etc.).
- `components/systems/WebGuidePage.tsx`: placeholder du guide web.
- `components/newsletter/NewsletterGuidePage.tsx`: composition globale de la page guide.
- `components/newsletter/data.ts`: donnees de reference (palette, espacements, anatomie).
- `components/newsletter/PaletteGrid.tsx`: grille palette + interaction de copie hex.
- `components/newsletter/SectionHeader.tsx`: en-tetes de sections.
- `components/newsletter/AnatomyMap.tsx`: schema anatomique de la newsletter.
- `components/newsletter/ExampleNewsletter.tsx`: exemple de newsletter complete.
- `public/logo_vec.svg`: logo de marque.
- `docs/html_newsletter.html`: reference HTML newsletter historique/externe.

### Intention de design
Le systeme vise une coherence editoriale et visuelle entre les emails marketing:
- identite majoritairement porte par `blue-primary`,
- composants simples et reproductibles,
- lisibilite prioritaire (desktop + mobile),
- standardisation des règles pour l'equipe Marketing.

---

## 2) Dernier commit de reference + etat actuel

> Note: pas de merge commit recent dans l'historique local.
> Le commit de reference sur `main` reste celui ci-dessous.

### Metadata
- Commit: `cfb5636ea33247122dbd2eb9767e01fff894f71e`
- Message: `add paragrpa rules and corrections`
- Date: `2026-04-17`
- Scope: `components/newsletter/*`

### Fichiers impactes
- `components/newsletter/NewsletterGuidePage.tsx`
- `components/newsletter/ExampleNewsletter.tsx`
- `components/newsletter/AnatomyMap.tsx`
- `components/newsletter/PaletteGrid.tsx`
- `components/newsletter/SectionHeader.tsx`
- `components/newsletter/data.ts`

### Nature des changements
Le commit est principalement une **normalisation editoriale et visuelle**:
1. **Corrections linguistiques FR**  
   Accents, orthographe et formulations corrigees dans les contenus UI (ex: "Découvrir", "Équipe", "règles", "œil", etc.).
2. **Harmonisation des couleurs de texte**  
   Migration de classes `text-ink` / `text-ink-soft` vers `text-blue-primary` dans plusieurs composants pour alignement strict au design system newsletter.
3. **Ajout de règles de lisibilite typographique**  
   Nouvelle section "Alignement" dans la partie typographie:
   - recommander `text-left` pour paragraphes longs,
   - deconseiller `text-justify`,
   - autoriser centre/droite uniquement sur contenus courts.
4. **Cohérence des labels et microcopies**  
   Ajustements de tokens et textes de donnees dans `data.ts` (anatomie, spacing usage, libelles).

### Statistiques de diff (approximation utile)
- `NewsletterGuidePage.tsx`: +121 / -48
- `ExampleNewsletter.tsx`: +16 / -16
- `AnatomyMap.tsx`: +2 / -2
- `PaletteGrid.tsx`: +3 / -3
- `SectionHeader.tsx`: +2 / -2
- `data.ts`: +9 / -9

### Impact fonctionnel
- Pas de nouvelle feature technique complexe (pas d'API, pas de logique metier).
- Impact principal: rendu visuel, qualite editoriale FR, et clarté des regles de mise en page.
- Le guide devient plus fiable comme source de reference pour generer de nouveaux templates newsletter.

### Etat actuel du projet (architecture shell + brand)
- Hub **multi-guides** avec shell partage: route canonique **`/brand/[system]`**, registry dans `designSystems.tsx`.
- Chaque entree du registry a un champ **`navSection`: `"brand"` | `"systems"`** (source de verite pour le groupement dans la side nav).
- `app/page.tsx` et `/systems/...` redirigent vers `/brand/...` (slug canonique, fallback sur le defaut si inconnu).
- Metadata racine (`app/layout.tsx`): titre oriente **Brand Platform** (plus « Design Systems » seul).
- Navigation laterale responsive, avec renforts d'accessibilite mobile:
  - `aria-expanded` / `aria-controls` sur le bouton menu,
  - panneau mobile (`role="dialog"`, `aria-modal`, libelle aligne sur la nav),
  - fermeture au clavier (`Escape`),
  - verrouillage du scroll de fond pendant ouverture.
- Les icones ne sont plus affichees dans les items de la side nav (navigation texte uniquement); `iconClass` reste dans le registry pour usage futur.
- **Plateforme de marque — Manifeste**: la page `plateforme-de-marque` inclut le texte long du manifeste et des **galeries** par theme. Les URLs d'images sont derivees du disque au rendu (Server Component); ajouter des fichiers dans le sous-dossier `public/.../manifeste/{slug}/` les affiche automatiquement (tri naturel sur le nom de fichier). Le prop `section` de `ManifesteGallery` doit etre un **slug seul** (`a-z`, `0-9`, tirets), aligne sur le nom du dossier.

### Risques/points d'attention
- Le passage systematique vers `text-blue-primary` reduit la variation de contraste; verifier accessibilite/hiérarchie visuelle sur certains blocs.
- Les exemples "A eviter / A privilegier" sont pedagogiques mais ASCII-only; a harmoniser si la strategie contenu impose UTF-8 complet partout.
- Le commit est majoritairement presentational: regression tests visuels recommandés plutôt que tests unitaires.

---

## 3) Consignes pour un LLM qui intervient sur ce projet

### Ce qu'il faut preserver
- Respecter l'architecture modulaire (shell + route dynamique + registry) et le role de documentation interne.
- Garder la coherence du tone-of-voice FR.
- Prioriser les tokens/couleurs definis dans `data.ts` et les classes deja standardisees.
- Maintenir l'approche "simple, reproductible, orientee marketing ops".
- Ne pas importer `getManifesteSectionImageUrls` dans un Client Component (`"use client"`): la lecture `fs` est reservee au rendu serveur.

### Ce qu'il faut eviter
- Reintroduire des classes legacy (`text-ink`, `text-ink-soft`) sans raison validee.
- Casser les conventions de navigation: **liens internes sous `/brand/[slug]`**, redirection depuis `/systems/...`, fallback vers le systeme par defaut via `resolveDesignSystemSlug`.
- Ajouter des variantes de composants non documentees.
- Mélanger des règles contradictoires sur l'alignement des textes longs.
- Ajouter de la complexite technique non necessaire (state, abstractions, config) pour un besoin purement editorial.
- Passer a `ManifesteGallery` un `section` arbitraire ou avec separateurs de chemin: le helper refuse les slugs non conformes et retourne une liste vide.

### Prompt de contexte recommande (copier-coller)
```
Tu travailles sur le repository csp-design-system (Next.js 16 + React 19 + Tailwind v4).
Le produit est une plateforme de marque + hub de guides: routing canonique /brand/[system], redirect depuis /systems/[system], shell partage et registry typee (navSection brand vs systems).
Le coeur contenu reste le guide newsletter dans components/newsletter; les guides marque vivent dans components/brand.
Priorites: fiabilite de navigation, coherence visuelle, lisibilite FR, et respect des règles de design documentees.
Le dernier commit (cfb5636) a harmonise les textes FR, les accents, et les classes de couleur vers text-blue-primary, et a ajoute des règles d'alignement typographique.
La plateforme de marque inclut le Manifeste avec galeries (`ManifesteGallery` + `getManifesteSectionImageUrls`); images sous public/brands/comptoir-sud-pacifique/manifeste/{slug}/, slug alphanumerique avec tirets uniquement.
Ne reintroduis pas text-ink/text-ink-soft sauf validation explicite.
Propose des modifications minimales, compatibles desktop/mobile, et explique l'impact UX/editorial.
```

## 4) Commandes utiles pour mettre a jour ce document

```bash
git log --oneline --decorate -n 12
git log --merges --oneline -n 5
git show --numstat --format=fuller HEAD
git show --unified=0 --no-color HEAD -- components/newsletter
git show --unified=0 --no-color HEAD -- components/brand lib/getManifesteGalleryImages.ts
```

