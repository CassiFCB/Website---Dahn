import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/routes';

type Name = 'experience' | 'projects' | 'education';

/** Einträge einer Collection in der gewünschten Sprache, sortiert nach `order`. */
export async function getLocalized<N extends Name>(name: N, lang: Lang) {
  const entries = await getCollection(name, (e) => e.id.startsWith(`${lang}/`));
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** "de/incomm-key-account" -> "incomm-key-account" */
export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}
