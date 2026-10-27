// src/utils/paths.ts
// Helper utility to safely resolve assets with Astro's configured base URL for GitHub Pages

export function asset(path: string): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

