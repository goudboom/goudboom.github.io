// English UI copy. Source of truth: bron/TEKSTEN-EN.md (phase 6, after review).
// Until then this is intentionally empty; missing keys fall back to Dutch.

import type { Dict } from './nl';

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

export const en: DeepPartial<Dict> = {
  meta: {
    locale: 'en_GB',
  },
};
