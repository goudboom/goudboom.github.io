// Inspiratiebank helpers: sorted items, category usage, plain-text summaries.
import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, categorySlugs, type Category } from '../content/taxonomy';

export type Item = CollectionEntry<'inspiratie'>;

/** All items, newest first, then by title. Fails the build if a slug collides with a category page. */
export async function getItems(): Promise<Item[]> {
  const items = await getCollection('inspiratie');
  for (const item of items) {
    if ((categorySlugs as string[]).includes(item.id)) {
      throw new Error(
        `Inspiratie item "${item.id}" has the same slug as a category page (/inspiratiebank/${item.id}/). Rename the file.`,
      );
    }
  }
  return items.sort(
    (a, b) => b.data.datum.getTime() - a.data.datum.getTime() || a.data.titel.localeCompare(b.data.titel, 'nl'),
  );
}

/** Categories that have at least one item, in taxonomy order. Empty categories get no page and no filter. */
export function usedCategories(items: Item[]): Category[] {
  const used = new Set(items.map((item) => item.data.categorie));
  return categorySlugs.filter((slug) => used.has(slug));
}

export function categoryLabel(slug: Category): string {
  return categories[slug];
}

/** Markdown/MDX body to plain text (for descriptions, llms-full.txt and the random panel). */
export function plainText(body: string | undefined): string {
  if (!body) return '';
  return body
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Description for meta tags: `omschrijving`, else the start of the toelichting, else the start of the text. */
export function itemDescription(item: Item): string {
  if (item.data.omschrijving) return item.data.omschrijving;
  const text = (item.data.toelichting ?? plainText(item.body)).replace(/\s+/g, ' ').trim();
  if (text.length <= 155) return text;
  const cut = text.slice(0, 152);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}

/** The toelichting as paragraphs (split on blank lines). */
export function paragraphs(text: string | undefined): string[] {
  return (text ?? '')
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

export type ServiceKey = 'projectManagement' | 'itConsultancy' | 'agileCoaching';
export type DienstSlug = 'projectmanagement' | 'it-iv-consultancy' | 'agile-coaching';

/** Frontmatter `dienst` slug ↔ service key used in i18n and routes. */
export const dienstToService: Record<DienstSlug, ServiceKey> = {
  projectmanagement: 'projectManagement',
  'it-iv-consultancy': 'itConsultancy',
  'agile-coaching': 'agileCoaching',
};

export function itemsForService(items: Item[], service: ServiceKey): Item[] {
  return items.filter((item) => item.data.dienst && dienstToService[item.data.dienst] === service);
}
