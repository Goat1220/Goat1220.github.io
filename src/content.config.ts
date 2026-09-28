import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_KEYS } from './categories';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(CATEGORY_KEYS),
    tags: z.array(z.string()).default([]),
    // 초안은 개발 서버에서만 보이고 배포되지 않는다.
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { posts };
