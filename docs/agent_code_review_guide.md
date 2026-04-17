# Guide Agent - Code Review (CSP Design System)

## Objectif

Ce document standardise la revue de code pour les agents (dont les agents de code review) afin d'obtenir des retours:

- fiables (appuyes sur des preuves),
- actionnables (corrections claires),
- prioritises (du plus critique au moins critique).

## Contexte projet

- Stack principale: Next.js (App Router), React, TypeScript, Tailwind.
- Surface applicative: shell + guides dynamiques sous **`/brand/[system]`**; **`/systems/[system]`** ne fait que rediriger vers `/brand/...`. Registry et groupement nav: `components/systems/designSystems.tsx` (`navSection` brand vs systems).
- Important: la version de Next.js peut diverger des pratiques historiques.
- Reference obligatoire pour Next.js: `node_modules/next/dist/docs/`.

## Resultat attendu d'une review

Une review doit:

1. Identifier les regressions comportementales et risques de production.
2. Verifier la coherence avec l'architecture et les conventions du repo.
3. Signaler les trous de tests et de verification.
4. Proposer des fixes concrets et minimaux.

## Grille de severite

Utiliser exactement ces niveaux:

- `critical`: bug bloquant, faille securite, corruption de donnees, crash probable.
- `high`: regression fonctionnelle majeure, non-respect d'une contrainte importante.
- `medium`: probleme de maintenabilite ou edge case impactant.
- `low`: qualite, lisibilite, dette technique faible impact.

## Workflow de review

1. **Comprendre l'intention**
   - Lire le scope de la tache (spec, plan, demande utilisateur).
2. **Inspecter les changements**
   - Verifier les deltas dans les fichiers modifies.
   - Prioriser chemins critiques (rendering, data flow, interactions utilisateur).
3. **Verifier l'execution**
   - Lint/type/build/tests (au minimum les commandes disponibles du projet).
4. **Valider les risques**
   - Accessibilite, responsive, performance de base, erreurs runtime, UX de fallback.
5. **Produire un rapport structure**
   - Findings par severite avec references de fichiers.

## Checklist de verification

### Fonctionnel

- Les comportements demandes sont bien implementes.
- Aucun cas nominal n'est casse.
- Les interactions UI restent coherentes (hover/click/focus, etats, responsive).

### Qualite

- Pas de duplication inutile ou logique difficile a maintenir.
- Nommage clair, structure de composants lisible.
- Pas de code mort manifeste.

### Technique

- Pas d'erreur lint/type sur les fichiers modifies.
- Build passe.
- Pas d'API obsoletes ou incompatibles avec la version de Next.js.

### Produit/UX

- Texte, labels, liens, CTA coherents.
- Accessibilite minimale (roles, focus visible, alt texte des images).
- Experience mobile et desktop verifiee.

## Format de sortie standard (obligatoire)

Utiliser cette structure dans la reponse de review:

1. `Findings` (du plus severe au moins severe)
   - `[{severity}]` Resume court
   - Pourquoi c'est un probleme
   - Ou: `path/to/file`
   - Correction proposee
2. `Questions / Hypotheses`
   - Points ambigus qui peuvent changer la conclusion.
3. `Resume secondaire`
   - 2-4 bullets max avec etat global et niveau de risque residuel.

Si aucun probleme:

- Ecrire explicitement: `Aucun probleme bloquant detecte.`
- Lister les risques residuels et manques de tests eventuels.

## Regles de preuve

- Ne jamais affirmer sans evidence (code, logs, sortie de commande).
- Eviter les remarques vagues ("a ameliorer") sans proposition concrete.
- Citer les chemins exacts de fichiers dans chaque finding.

## Anti-patterns de review (a eviter)

- Se focaliser sur le style avant les risques produit.
- Proposer des refactors larges hors scope sans justification.
- Ignorer un echec de build/lint/tests.
- Marquer "OK" sans verification minimale.

## Commandes de verification recommandees

Adapter selon le contexte, mais commencer par:

- `npm run lint`
- `npm run build`

Puis commandes ciblees si disponibles (tests unitaires/integration/e2e).

## Definition of Done - Review

Une review est terminee quand:

- Tous les findings critiques/hauts sont documentes.
- Les preuves sont suffisantes.
- Les commandes de verification pertinentes ont ete executees (ou clairement marquees comme non executables).
- Le rapport est lisible et actionnable par un developpeur sans contexte additionnel.
