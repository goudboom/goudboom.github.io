import type { APIRoute } from 'astro';
import { buildLlms } from '../lib/llms';

export const GET: APIRoute = () =>
  new Response(buildLlms(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
