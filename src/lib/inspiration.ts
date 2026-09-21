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

/** Description for meta tags: frontmatter `omschrijving`, else the first ~155 characters of the text. */
export function itemDescription(item: Item): string {
  if (item.data.omschrijving) return item.data.omschrijving;
  const text = plainText(item.body).replace(/\s+/g, ' ');
  if (text.length <= 155) return text;
  const cut = text.slice(0, 152);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}
