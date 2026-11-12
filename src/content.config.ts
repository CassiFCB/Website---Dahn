import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Inhalte liegen als Markdown unter src/content/<collection>/<sprache>/<datei>.md
 * Die Reihenfolge steuert das Feld `order` (kleinere Zahl = weiter oben).
 */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    period: z.string(),
    highlights: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(),
    period: z.string(),
    tags: z.array(z.string()),
    situation: z.string(),
    task: z.string(),
    action: z.array(z.string()),
    result: z.string(),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    period: z.string(),
    details: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

export const collections = { experience, projects, education };
