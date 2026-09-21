// Inspiratiebank taxonomy — the single place where categories and forms are defined.
// Frontmatter uses the slug; labels are shown on the site. The Inspiratiebank is Dutch-only.
// Source of labels: bron/TEKSTEN.md › Inspiratiebank › filters.

export const categories = {
  leiderschap: 'Leiderschap',
  'teams-en-samenwerking': 'Teams & samenwerking',
  verandering: 'Verandering',
  'mindset-en-groei': 'Mindset & groei',
  werkplezier: 'Werkplezier',
  'regie-en-beheer': 'Regie & beheer',
  'agile-en-lean': 'Agile & Lean',
} as const;

// Order matches the "Vorm" filter in TEKSTEN.md.
export const forms = {
  gedachte: 'Gedachte',
  vraag: 'Vraag',
  model: 'Model',
  quote: 'Quote',
  tip: 'Tip',
} as const;

export type Category = keyof typeof categories;
export type Form = keyof typeof forms;

export const categorySlugs = Object.keys(categories) as [Category, ...Category[]];
export const formSlugs = Object.keys(forms) as [Form, ...Form[]];
