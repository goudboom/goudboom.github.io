// Build reminder: lists inspiration items that still have no `toelichting` (they show a placeholder).
import { readdirSync, readFileSync } from 'node:fs';
import type { AstroIntegration } from 'astro';

export default function missingExplanations(): AstroIntegration {
  return {
    name: 'goudboom-toelichting-todo',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const dir = 'src/content/inspiratie';
        const missing = readdirSync(dir)
          .filter((file) => /\.(md|mdx)$/.test(file) && !file.startsWith('_'))
          .filter((file) => !/^toelichting:/m.test(readFileSync(`${dir}/${file}`, 'utf8').split(/^---$/m)[1] ?? ''))
          .map((file) => file.replace(/\.mdx?$/, ''));
        if (missing.length) logger.info(`Nog geen toelichting (${missing.length}): ${missing.join(', ')}`);
      },
    },
  };
}
