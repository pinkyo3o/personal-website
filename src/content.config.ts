/**
 * 博客内容集合配置
 * 定义博客文章的 frontmatter schema（元数据格式）
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      lang: z.enum(['zh', 'en']),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
