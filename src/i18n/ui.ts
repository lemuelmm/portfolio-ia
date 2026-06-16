// Dicionário de strings da "casca" do site (Nav, Footer, Base).
// O conteúdo longo de cada página vive na própria página (PT) ou na sua
// contraparte em src/pages/en/ (EN). Aqui ficam só os textos compartilhados.

export const languages = {
  'pt-br': 'PT',
  en: 'EN',
} as const;

export const defaultLang = 'pt-br';

export type Lang = keyof typeof languages;

export const ui = {
  'pt-br': {
    'site.description': 'Product Designer baseado em Juazeiro do Norte, Ceará.',
    'nav.works': 'Trabalhos',
    'nav.about': 'Sobre',
    'nav.outsideWork': 'Fora do trabalho',
    'nav.brandAria': 'Lemuel Monteiro — Início',
    'footer.location': 'Juazeiro do Norte · CE',
    'impact.label': 'Impacto',
    'lang.pt': 'PT',
    'lang.en': 'EN',
    'lang.switchAria': 'Mudar idioma',
  },
  en: {
    'site.description': 'Product Designer based in Juazeiro do Norte, Ceará, Brazil.',
    'nav.works': 'Work',
    'nav.about': 'About',
    'nav.outsideWork': 'Outside work',
    'nav.brandAria': 'Lemuel Monteiro — Home',
    'footer.location': 'Juazeiro do Norte · Brazil',
    'impact.label': 'Impact',
    'lang.pt': 'PT',
    'lang.en': 'EN',
    'lang.switchAria': 'Switch language',
  },
} as const;
