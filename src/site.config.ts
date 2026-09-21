// Fixed business facts. Single place; every page, the footer, JSON-LD and llms.txt read from here.
// These are data, not UI copy: they are identical in every language.

export const site = {
  url: 'https://goudboom.nl',
  name: 'Goudboom Adviesbureau',
  owner: 'Yuri van der Putten',
  kvk: '93556888',
  email: 'info@goudboom.nl',
  phoneDisplay: '+31 6 508 74 235',
  phoneHref: 'tel:+31650874235',
  linkedin: 'https://www.linkedin.com/in/yuri-vander-putten/',
  city: 'Woerden',
  slogan: 'Slagkracht. Transformatie. Impact.',
  /** IndexNow key; the matching file public/<key>.txt proves ownership to Bing/IndexNow. */
  indexNowKey: '8ccbc3c9a385cc2da9948e83a7f7b453',
} as const;

/** Builds the "Plan een kennismakingslunch" mailto link from localized subject and body. */
export function lunchMailto(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const emailHref = `mailto:${site.email}`;
