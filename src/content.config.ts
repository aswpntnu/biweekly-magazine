import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const issues = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './content/issues',
  }),
  schema: z.object({
    title: z.string(),
    issue_number: z.string().optional(),
    publish_date: z.coerce.string().optional(),
    cover: z.string().optional(),
    pdf_url: z.string().optional(),
    description: z.string().optional(),
    published: z.boolean().default(false),
  }),
});

export const collections = { issues };
