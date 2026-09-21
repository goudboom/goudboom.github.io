// Writes a small redirect page for every old URL after the build.
// Runs after Astro so it can detect case-insensitive file systems (Windows, macOS): there /Diensten/
// would overwrite the real /diensten/ page, so those entries are skipped locally and only written
// on case-sensitive systems (the Linux GitHub Actions runner that deploys the site).
// The 404 page also redirects these paths with a small script, as a safety net.
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { oldUrls } from '../src/redirects';
import { site } from '../src/site.config';
import { nl } from '../src/i18n/nl';

const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function page(target: string): string {
  const url = new URL(target, site.url).href;
  const link = `<a href="${target}">${escape(url)}</a>`;
  const text = escape(nl.redirect.text).replace(escape('{link}'), link);
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>${escape(site.name)}</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${target}">
</head>
<body>
<p>${text}</p>
</body>
</html>
`;
}

/** True when a directory entry with exactly this name (case included) exists. */
function existsExact(path: string): boolean {
  const parent = dirname(path);
  return existsSync(parent) && readdirSync(parent).includes(basename(path));
}

export default function oldUrlsIntegration(): AstroIntegration {
  return {
    name: 'goudboom-old-urls',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const skipped: string[] = [];
        for (const [from, to] of Object.entries(oldUrls)) {
          const folder = join(out, from);
          // Case-insensitive FS: the folder "exists" but under another spelling → would clobber a real page.
          if (existsSync(folder) && !existsExact(folder)) {
            skipped.push(from);
            continue;
          }
          mkdirSync(folder, { recursive: true });
          writeFileSync(join(folder, 'index.html'), page(to));
        }
        const written = Object.keys(oldUrls).length - skipped.length;
        logger.info(`${written} redirect pages written.`);
        if (skipped.length) {
          logger.info(`Case-insensitive file system: ${skipped.join(', ')} left to the deploy build (Linux).`);
        }
      },
    },
  };
}
