import type { APIRoute } from 'astro';
import { site } from '../site.config';

// Search engines and AI assistants are explicitly welcome.
const agents = [
  'Googlebot',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
];

export const GET: APIRoute = () => {
  const groups = agents.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n');
  const body = `# ${site.name} — zoekmachines en AI-assistenten zijn welkom.\n\n${groups}\n\nUser-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
