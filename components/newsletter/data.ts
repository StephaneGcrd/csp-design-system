export type PaletteColor = {
  name: string;
  hex: string;
  textColor: string;
  extraClassName?: string;
};

export type SpacingItem = {
  label: string;
  widthPercent: string;
  usage: string;
};

export type AnatomyItem = {
  id: string;
  label: string;
  className: string;
  title: string;
  rules: string[];
};

export const paletteColors: PaletteColor[] = [
  { name: "blue-primary", hex: "#067290", textColor: "text-white" },
  { name: "blue-light", hex: "#E7F4F7", textColor: "text-blue-primary" },
  { name: "off-white", hex: "#F7F6F1", textColor: "text-ink" },
  {
    name: "white",
    hex: "#FFFFFF",
    textColor: "text-ink",
    extraClassName: "border-b border-blue-primary/10",
  },
];

export const spacingScale: SpacingItem[] = [
  { label: "8px", widthPercent: "1.56%", usage: "icone · gap serre" },
  { label: "16px", widthPercent: "3.12%", usage: "padding composant" },
  { label: "32px", widthPercent: "6.25%", usage: "padding bloc" },
  { label: "64px", widthPercent: "12.5%", usage: "entre sections" },
  { label: "128px", widthPercent: "25%", usage: "logo max-height" },
  { label: "256px", widthPercent: "50%", usage: "hero height mobile" },
  { label: "512px", widthPercent: "100%", usage: "hero height desktop" },
];

export const anatomyItems: AnatomyItem[] = [
  {
    id: "n-header",
    label: "Header · Logo + Navbar",
    className: "bg-blue-primary text-white py-8",
    title: "Header",
    rules: [
      "Logo + navbar, fond blue-primary ou blanc",
      "Logo max-height: 128px",
      "Hauteur respectant l'echelle d'espacement",
    ],
  },
  {
    id: "n-hero-img",
    label: "Hero image (cliquable)",
    className:
      "bg-linear-to-br from-blue-primary to-cyan-400 text-white py-16",
    title: "Hero image",
    rules: [
      "Toujours cliquable",
      "Avec ou sans accroche textuelle",
      "Fleche ou indice UI pour signaler la clickabilite",
    ],
  },
  {
    id: "n-hero-text",
    label: "Hero text + CTA",
    className: "bg-blue-light text-blue-primary py-8",
    title: "Hero text & CTA",
    rules: [
      "Phrase principale + courte description",
      "CTA link: le plus haut possible",
      "CTA au-dessus de la ligne de flottaison",
    ],
  },
  {
    id: "n-modules",
    label: "Modules (wildcards, texte/image)",
    className: "bg-blue-light text-blue-primary py-8",
    title: "Modules produits",
    rules: [
      "Wildcards: nom seul, pas de prix",
      "Chaque wildcard renvoie vers une fiche produit",
      "Preferer fonds clairs + packshots",
      "Combinaisons texte/image autorisees avec CTA",
    ],
  },
  {
    id: "n-reassurance",
    label: "Bloc reassurance",
    className: "bg-blue-light text-blue-primary py-8",
    title: "Bloc reassurance",
    rules: [
      "Comme sur le site (livraison offerte, etc.)",
      "Icones: max-height 96px",
      "Typographie conforme au DS",
    ],
  },
  {
    id: "n-brand",
    label: "Paragraphe marque",
    className: "bg-blue-light text-blue-primary py-8",
    title: "Paragraphe marque",
    rules: [
      "Logo + texte institutionnel (Depuis 1974...)",
      "Placement avant le footer",
    ],
  },
  {
    id: "n-footer",
    label: "Footer (2 colonnes)",
    className: "bg-blue-primary text-white py-8",
    title: "Footer",
    rules: [
      "Deux colonnes desktop, une sur mobile",
      "Texte blanc sur fond blue-primary",
      "Gauche: logo, adresse, reseaux",
      "Droite: contact + boutique + copyright",
    ],
  },
];
