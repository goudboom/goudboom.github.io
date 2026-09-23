import { nl, type Dict } from './nl';
import { en } from './en';

export type Lang = 'nl' | 'en';
export const langs: Lang[] = ['nl', 'en'];

/** Languages that are live: the language switch and hreflang links only cover these. */
export const liveLangs: Lang[] = ['nl', 'en'];

function merge<T>(base: T, override: unknown): T {
  if (!override || typeof override !== 'object') return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override)) {
    const current = out[key];
    out[key] =
      current && typeof current === 'object' && !Array.isArray(current) ? merge(current, value) : value;
  }
  return out as T;
}

const dicts: Record<Lang, Dict> = { nl, en: merge(nl, en) };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

/**
 * Route map: one key per page, with its URL per language.
 * `null` means the page has no translation (the language switch then goes to that language's home).
 */
export const routes = {
  home: { nl: '/', en: '/en/' },
  services: { nl: '/diensten/', en: '/en/services/' },
  projectManagement: { nl: '/diensten/projectmanagement/', en: '/en/services/project-management/' },
  itConsultancy: { nl: '/diensten/it-iv-consultancy/', en: '/en/services/it-consultancy/' },
  agileCoaching: { nl: '/diensten/agile-coaching/', en: '/en/services/agile-coaching/' },
  // The Inspiratiebank is Dutch only: no English URL, so no English hreflang. The English menu
  // links to the Dutch overview (see Header.astro).
  inspiration: { nl: '/inspiratiebank/', en: null },
  contact: { nl: '/contact/', en: '/en/contact/' },
  privacy: { nl: '/privacy/', en: null },
} as const satisfies Record<string, Record<Lang, string | null>>;

export type RouteKey = keyof typeof routes;

/** URL of a page in a language; falls back to that language's home when untranslated. */
export function href(key: RouteKey, lang: Lang): string {
  return routes[key][lang] ?? routes.home[lang];
}
