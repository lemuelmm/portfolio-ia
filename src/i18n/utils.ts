import { ui, defaultLang, type Lang } from './ui';

/**
 * Descobre o idioma a partir da URL.
 * PT vive na raiz; EN vive sob /en. Tudo que começa com /en é inglês.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

/**
 * Retorna um tradutor para as strings da casca (Nav, Footer, Base).
 * Uso: const t = useTranslations(lang); t('nav.about')
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Mapa de rotas equivalentes entre PT e EN.
 * Chave = caminho PT (na raiz). Valor = caminho EN (sob /en).
 *
 * Decisões fechadas do plano:
 * - Institucionais traduzidos: /sobre -> /en/about, /fora-do-trabalho -> /en/outside-work
 * - Cases mantêm o slug: /work/youse -> /en/work/youse
 */
export const routeMap: Record<string, string> = {
  '/': '/en',
  '/sobre': '/en/about',
  '/fora-do-trabalho': '/en/outside-work',
  '/work/starian': '/en/work/starian',
  '/work/geopark': '/en/work/geopark',
  '/work/youse': '/en/work/youse',
  '/work/paguru': '/en/work/paguru',
  '/work/portfolio': '/en/work/portfolio',
};

/**
 * Caminhos PT cuja contraparte EN JÁ EXISTE (página criada).
 * Enquanto uma página EN não nasce (Fase 3), o seletor e o hreflang caem
 * na home /en em vez de apontar para uma URL que dá 404.
 *
 * AO CRIAR uma página EN na Fase 3, adicione o caminho PT correspondente aqui.
 */
export const enRouteReady = new Set<string>([
  '/',                 // /en
  '/sobre',            // /en/about
  '/fora-do-trabalho', // /en/outside-work
  '/work/starian',     // /en/work/starian
  '/work/geopark',     // /en/work/geopark
  '/work/youse',       // /en/work/youse
  '/work/paguru',      // /en/work/paguru
  '/work/portfolio',   // /en/work/portfolio
]);

/** A contraparte EN deste caminho PT já está pronta? */
export function hasEnCounterpart(ptPath: string): boolean {
  return enRouteReady.has(normalize(ptPath));
}

// Mapa inverso (EN -> PT), derivado do routeMap.
const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([pt, en]) => [en, pt]),
);

/** Normaliza um pathname removendo barra final (exceto raiz). */
function normalize(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * Dado o pathname atual e o idioma de destino, devolve o caminho da
 * contraparte naquele idioma. Usado pelo seletor de idioma e por hreflang.
 *
 * Se a contraparte EN ainda não existe (não está em enRouteReady), cai na
 * home /en. O caminho de volta para PT sempre existe.
 */
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const path = normalize(pathname);
  const currentLang = path === '/en' || path.startsWith('/en/') ? 'en' : defaultLang;

  if (currentLang === targetLang) return path;

  if (targetLang === 'en') {
    // A partir de uma página PT: só aponta para a contraparte EN se ela existe.
    if (enRouteReady.has(path)) {
      return routeMap[path] ?? '/en';
    }
    return '/en';
  }

  // targetLang === pt: o caminho PT sempre existe.
  return reverseRouteMap[path] ?? '/';
}

/**
 * Prefixa um caminho PT com o idioma certo.
 * Ex.: localizedHref('/sobre', 'en') -> '/en/about'
 */
export function localizedHref(ptPath: string, lang: Lang): string {
  if (lang === defaultLang) return ptPath;
  return routeMap[ptPath] ?? ptPath;
}
