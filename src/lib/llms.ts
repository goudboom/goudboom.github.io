// Builds /llms.txt (short, factual summary) and /llms-full.txt (all core content as plain text)
// from the same copy and content collection as the pages, so they never drift apart.
import { site } from '../site.config';
import { nl } from '../i18n/nl';
import { href } from '../i18n';
import { categories, forms } from '../content/taxonomy';
import { getItems, plainText, paragraphs } from './inspiration';

const abs = (path: string) => new URL(path, site.url).href;
const clean = (text: string) => text.replace(/\u00AD/g, '');
const serviceKeys = ['projectManagement', 'itConsultancy', 'agileCoaching'] as const;

export function buildLlms(): string {
  const faq = nl.home.faq.items;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${faq[0].a}`,
    '',
    `${site.slogan} ${clean(nl.home.hero.text)}`,
    '',
    '## Feiten',
    `- Eigenaar: ${site.owner}`,
    `- Vestigingsplaats: ${site.city}`,
    `- KvK: ${site.kvk}`,
    `- E-mail: ${site.email}`,
    `- Telefoon: ${site.phoneDisplay}`,
    `- LinkedIn: ${site.linkedin}`,
    '',
    `## ${faq[1].q}`,
    faq[1].a,
    '',
    `## ${faq[2].q}`,
    faq[2].a,
    '',
    `## ${nl.nav.services}`,
    ...serviceKeys.map(
      (key) => `- [${nl.services.items[key].title}](${abs(href(key, 'nl'))}): ${nl.services.items[key].line}`,
    ),
    '',
    `## ${faq[6].q}`,
    faq[6].a,
    '',
    "## Pagina's",
    `- [${nl.nav.home}](${abs('/')})`,
    `- [${nl.nav.services}](${abs(href('services', 'nl'))})`,
    `- [${nl.nav.contact}](${abs(href('contact', 'nl'))})`,
    `- [${nl.nav.inspiration}](${abs(href('inspiration', 'nl'))}): ${nl.inspiration.intro}`,
    `- [English version](${abs('/en/')})`,
    `- [Volledige inhoud als platte tekst](${abs('/llms-full.txt')})`,
    '',
  ];
  return lines.join('\n');
}

export async function buildLlmsFull(): Promise<string> {
  const out: string[] = [];
  const h = (level: number, text: string) => out.push('', `${'#'.repeat(level)} ${clean(text)}`, '');
  const p = (...texts: string[]) => texts.forEach((text) => out.push(clean(text), ''));
  const list = (items: string[]) => out.push(...items.map((item) => `- ${clean(item)}`), '');

  out.push(`# ${site.name} — volledige inhoud`, '');
  p(`Bron: ${site.url}/ · ${site.owner} · ${site.city} · KvK ${site.kvk} · ${site.email} · ${site.phoneDisplay}`);

  // Home
  const home = nl.home;
  h(2, `${nl.nav.home} (${abs('/')})`);
  p(home.hero.eyebrow, home.hero.title, home.hero.text, home.hero.proof.join(' · '));
  h(3, home.recognize.title);
  list(home.recognize.items);
  p(home.recognize.closing);
  h(3, home.services.title);
  list(serviceKeys.map((key) => `${nl.services.items[key].problem}: ${nl.services.items[key].problemLine}`));
  h(3, home.approach.title);
  list(home.approach.steps.map((step) => `${step.title} ${step.text}`));
  h(3, home.vision.title);
  list(home.vision.items.map((item) => `${item.term}: ${item.text}`));
  h(3, home.faq.title);
  home.faq.items.forEach((item) => p(`${item.q}`, item.a));

  // Services
  const overview = nl.servicesOverview;
  h(2, `${overview.title} (${abs(href('services', 'nl'))})`);
  p(...overview.intro, overview.pairsIntro);
  list(overview.pairs.map(([a, b]) => `${a} // ${b}`));
  p(overview.outro);

  const labels = nl.serviceLabels;
  for (const key of serviceKeys) {
    const page = nl.servicePages[key];
    h(2, `${page.title} (${abs(href(key, 'nl'))})`);
    if (page.subtitle) p(page.subtitle);
    p(...page.positioning);
    h(3, labels.forWhom);
    p(page.forWhom);
    h(3, labels.helpWith);
    list(page.helpWith.map((item) => (item.label ? `${item.label} ${item.text}` : item.text)));
    if ('model' in page) {
      h(3, page.model.title);
      p(page.model.caption);
      list(page.model.rows.map((row) => `${row.level}: ${row.cells.join(' · ')}`));
    }
    h(3, labels.practice);
    for (const item of page.cases) {
      h(4, item.title);
      p(`${labels.situation}: ${item.situation}`, `${labels.approach}: ${item.approach}`, `${labels.result}: ${item.result}`);
    }
    p(`${labels.relevant} ${page.relevant}`);
  }

  // About & contact
  const contact = nl.contact;
  const about = contact.about;
  h(2, `${nl.nav.contact} (${abs(href('contact', 'nl'))})`);
  p(contact.hero.title, contact.hero.text);
  h(3, contact.when.title);
  list(contact.when.items);
  h(3, about.title);
  p(about.intro);
  h(4, about.fresh.title);
  p(...about.fresh.text);
  h(4, about.colleague.title);
  p(...about.colleague.text, about.colleague.listIntro);
  list(about.colleague.items);
  h(4, about.teaching.title);
  p(about.teaching.text);
  h(4, about.why.title);
  p(about.why.text);
  h(4, about.slogan.title);
  list(about.slogan.items.map((item) => `${item.term} ${item.text}`));
  h(4, about.facts.title);
  list([about.facts.experience, `${about.facts.sectorsLabel}: ${about.facts.sectors.join(', ')}`, about.facts.location]);
  h(4, about.credentials.title);
  list(about.credentials.education.map((e) => `${e.name} — ${e.school} (${e.years})`));
  list(about.credentials.groups.map((g) => `${g.field}: ${g.items.join(' · ')}`));

  // Inspiratiebank
  const items = await getItems();
  h(2, `${nl.inspiration.title} (${abs(href('inspiration', 'nl'))})`);
  p(nl.inspiration.intro);
  for (const item of items) {
    h(3, item.data.titel);
    p(
      `${forms[item.data.vorm]} · ${categories[item.data.categorie]} · ${abs(`/inspiratiebank/${item.id}/`)}`,
      plainText(item.body),
    );
    if (item.data.bron) p(`— ${item.data.bron}`);
    if (item.data.toelichting) p(...paragraphs(item.data.toelichting));
  }

  // Privacy
  h(2, `${nl.privacy.title} (${abs(href('privacy', 'nl'))})`);
  p(...nl.privacy.text);

  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}
