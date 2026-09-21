// Schema.org JSON-LD nodes, linked via @id. Pages combine these into one @graph (see Seo.astro).
// Facts come from site.config.ts and the Dutch dictionary, so they are identical on every page.
import { site } from '../site.config';
import { nl } from '../i18n/nl';

export const ids = {
  organization: `${site.url}/#organization`,
  person: `${site.url}/#yuri`,
  website: `${site.url}/#website`,
} as const;

export function organizationNode() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ids.organization,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/favicon.svg`,
    email: site.email,
    telephone: site.phoneDisplay.replace(/\s/g, ''),
    slogan: site.slogan,
    founder: { '@id': ids.person },
    areaServed: { '@type': 'Country', name: 'NL' },
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'NL' },
    identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: site.kvk },
    sameAs: [site.linkedin],
  };
}

export function personNode() {
  const about = nl.contact.about;
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: site.owner,
    jobTitle: ['Interim projectmanager', 'IT/IV-consultant', 'Agile coach'],
    worksFor: { '@id': ids.organization },
    workLocation: { '@type': 'Place', name: site.city },
    knowsAbout: [
      'Projectmanagement',
      'IT/IV-consultancy',
      'Functioneel beheer',
      'Servicemanagement',
      'Informatiemanagement',
      'Agile coaching',
      'Product ownership',
      'Scrum',
      'SAFe',
      'Lean',
    ],
    alumniOf: [...new Set(about.credentials.education.map((e) => e.school))].map((name) => ({
      '@type': 'EducationalOrganization',
      name,
    })),
    hasCredential: about.credentials.groups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'EducationalOccupationalCredential',
        name: item.replace(/\s*\(\d{4}\)$/, ''),
        credentialCategory: 'certification',
      })),
    ),
    sameAs: [site.linkedin],
  };
}

export function websiteNode(lang: 'nl' | 'en') {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: lang,
    publisher: { '@id': ids.organization },
  };
}

export function faqNode(items: { q: string; a: string }[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function serviceNode(name: string, description: string, url: string) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType: name,
    provider: { '@id': ids.organization },
    areaServed: { '@type': 'Country', name: 'NL' },
  };
}

export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
