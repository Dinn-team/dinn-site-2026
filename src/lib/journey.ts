// Jornada da pessoa até o /contato: de onde ela chegou ao site e por onde passou antes
// do formulário. Alimenta o gráfico "De onde vêm os leads" do Orion (aba Monitor do
// funil N1) e o campo de origem do HubSpot.
//
// Regras de privacidade (LGPD):
//  - Guardar entre páginas só com o aceite do banner de cookies (`dinn-consent`, chave
//    `analytics`). Sem aceite, nada é gravado no navegador.
//  - Guarda só caminho de página (sem query, sem e-mail, sem texto), o domínio de quem
//    indicou e os parâmetros de campanha (utm_*, gclid, fbclid). Fica em sessionStorage:
//    some quando a aba fecha.
//  - Sem aceite, o envio ainda leva o que o próprio navegador informa no momento: a página
//    anterior (document.referrer) e os parâmetros da URL atual. Isso não é gravado.
// Funções puras recebem tudo por argumento, para testar sem navegador.

export const JOURNEY_KEY = 'dinn-journey';
export const CONSENT_KEY = 'dinn-consent';
const MAX_PAGES = 6;
const MAX_PATH = 100;

export interface Campaign {
  source: string;
  medium: string;
  campaign: string;
  content: string;
}

export interface Journey {
  /** Primeiro toque da sessão: onde entrou e de onde veio. */
  first: { path: string; referrerHost: string; campaign: Campaign };
  /** Últimas páginas vistas, da mais antiga para a mais nova. */
  pages: string[];
}

export interface Visit {
  /** `location.pathname` */
  path: string;
  /** `location.search` */
  search: string;
  /** `document.referrer` */
  referrer: string;
  /** `location.host` */
  host: string;
}

/** Caminho limpo: sem query, sem barra no fim, no máximo 100 caracteres. */
export function cleanPath(path: string): string {
  const p = (path || '/').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  return p.slice(0, MAX_PATH);
}

/** Domínio de quem indicou, só quando é outro site. Vazio para o próprio site ou sem referrer. */
export function externalReferrerHost(referrer: string, host: string): string {
  if (!referrer) return '';
  try {
    const r = new URL(referrer);
    const clean = (h: string) => h.replace(/^www\./, '').toLowerCase();
    return clean(r.host) === clean(host) ? '' : clean(r.host).slice(0, 80);
  } catch {
    return '';
  }
}

/** Caminho da página anterior no próprio site (vazio se veio de fora ou do mesmo caminho). */
export function previousSitePath(referrer: string, host: string, currentPath: string): string {
  if (!referrer) return '';
  try {
    const r = new URL(referrer);
    const clean = (h: string) => h.replace(/^www\./, '').toLowerCase();
    if (clean(r.host) !== clean(host)) return '';
    const path = cleanPath(r.pathname);
    return path === cleanPath(currentPath) ? '' : path;
  } catch {
    return '';
  }
}

/** UTM da URL e, quando não há `utm_source`, o que os identificadores de clique dizem. */
export function campaignFromSearch(search: string): Campaign {
  const p = new URLSearchParams(search);
  const get = (k: string) => (p.get(k) ?? '').trim().slice(0, 120);
  const c: Campaign = {
    source: get('utm_source'),
    medium: get('utm_medium'),
    campaign: get('utm_campaign'),
    content: get('utm_content') || get('origem'),
  };
  if (!c.source) {
    // gclid é o anúncio do Google (rastreio automático). fbclid e li_fat_id também vêm de
    // cliques orgânicos, então só dizem a rede, não que foi anúncio.
    if (p.get('gclid')) {
      c.source = 'google';
      c.medium = c.medium || 'cpc';
    } else if (p.get('fbclid')) {
      c.source = 'facebook';
      c.medium = c.medium || 'social';
    } else if (p.get('li_fat_id')) {
      c.source = 'linkedin';
      c.medium = c.medium || 'social';
    }
  }
  return c;
}

export const hasCampaign = (c: Campaign) => Boolean(c.source || c.medium || c.campaign);

/** Próximo estado da jornada depois de ver uma página. */
export function nextJourney(prev: Journey | null, visit: Visit): Journey {
  const path = cleanPath(visit.path);
  if (!prev) {
    return {
      first: { path, referrerHost: externalReferrerHost(visit.referrer, visit.host), campaign: campaignFromSearch(visit.search) },
      pages: [path],
    };
  }
  const pages = prev.pages[prev.pages.length - 1] === path ? prev.pages : [...prev.pages, path];
  return { first: prev.first, pages: pages.slice(-MAX_PAGES) };
}

export interface OriginFields {
  /** UTM final: o da URL atual; se não tem, o do primeiro toque da sessão. */
  campaign: Campaign;
  firstPage: string;
  previousPage: string;
  referrerHost: string;
}

/** O que vai junto do envio. `journey` é null sem aceite de cookies ou sem visita anterior. */
export function originFields(journey: Journey | null, now: Visit): OriginFields {
  const current = campaignFromSearch(now.search);
  const here = cleanPath(now.path);
  const fromJourney = journey ? [...journey.pages].reverse().find((p) => p !== here) ?? '' : '';
  return {
    campaign: hasCampaign(current) ? current : (journey?.first.campaign ?? current),
    firstPage: journey?.first.path ?? '',
    previousPage: previousSitePath(now.referrer, now.host, now.path) || fromJourney,
    referrerHost: journey?.first.referrerHost || externalReferrerHost(now.referrer, now.host),
  };
}

// --- navegador -----------------------------------------------------------------------

/** Aceite do banner de cookies de análise (mesma chave e validade do CookieConsent). */
export function analyticsConsent(): boolean {
  try {
    const v = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
    return Boolean(v && v.analytics === true && Date.now() - v.ts < 365 * 24 * 60 * 60 * 1000);
  } catch {
    return false;
  }
}

export function readJourney(): Journey | null {
  try {
    const v = JSON.parse(sessionStorage.getItem(JOURNEY_KEY) || 'null');
    return v && v.first && Array.isArray(v.pages) ? (v as Journey) : null;
  } catch {
    return null;
  }
}

/** Anota a página atual. Sem aceite de cookies, não grava nada. */
export function recordVisit(): void {
  if (typeof window === 'undefined' || !analyticsConsent()) return;
  try {
    const next = nextJourney(readJourney(), {
      path: window.location.pathname,
      search: window.location.search,
      referrer: document.referrer,
      host: window.location.host,
    });
    sessionStorage.setItem(JOURNEY_KEY, JSON.stringify(next));
  } catch {
    /* navegador sem sessionStorage: segue sem jornada */
  }
}
