import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categorySlugs, formSlugs } from './content/taxonomy';

// One file per item in src/content/inspiratie/. The file name is the slug (/inspiratiebank/{slug}/).
// Files starting with "_" (such as _voorbeeld.md) are ignored.
const inspiratie = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}', '!**/_*'], base: './src/content/inspiratie' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string().min(1).max(60),
      categorie: z.enum(categorySlugs),
      vorm: z.enum(formSlugs),
      bron: z.string().optional(),
      afbeelding: image().optional(),
      afbeeldingAlt: z.string().optional(),
      datum: z.coerce.date(),
      gewijzigd: z.coerce.date().optional(),
      omschrijving: z.string().max(155).optional(),
      // Yuri's own explanation (plain text, paragraphs separated by a blank line). Shown on the item page,
      // not on the card. This is what makes an item findable.
      toelichting: z.string().optional(),
      // Related service: the item page shows its card and the service page lists the item.
      dienst: z.enum(['projectmanagement', 'it-iv-consultancy', 'agile-coaching']).optional(),
    }),
});

export const collections = { inspiratie };
