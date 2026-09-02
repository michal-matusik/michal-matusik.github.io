import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(3),
    subtitle: z.string().min(3).optional(),
    summary: z.string().min(40).max(240),
    type: z.enum(['production', 'research', 'open-source', 'experiment']),
    role: z.string().min(3),
    impact: z.string().min(10).max(180),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    stack: z.array(z.string()).min(1).max(6),
    featured: z.boolean().default(false),
    order: z.number().int().default(999),
    draft: z.boolean().default(false),
    links: z
      .object({
        source: z.url().optional(),
        demo: z.url().optional(),
        paper: z.url().optional(),
      })
      .default({}),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(50).max(220),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1).max(5),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    canonicalUrl: z.url().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { projects, writing };
