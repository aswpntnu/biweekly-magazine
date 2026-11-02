import { defineCollection, z } from 'astro:content';

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issue_number: z.string().optional(),
    publish_date: z.string().optional(),
    cover: z.string().optional(),
    pdf_url: z.string().optional(),
    description: z.string().optional(),
    published: z.boolean().default(false),
  }),
});

export const collections = { issues };
