import { basename } from 'node:path';

import type { MetadataRoute } from 'next';
import { glob } from 'tinyglobby';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const files = await glob('content/*.mdx');
  const slugs = files.map((file) => basename(file, '.mdx'));

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/${slug}.mdx`);
      return { slug, metadata };
    }),
  );

  return [
    {
      url: process.env.NEXT_DOMAIN_URL as string,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_DOMAIN_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_DOMAIN_URL}/icarus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...posts
      .filter((post) => !post.metadata.draft)
      .map((post) => ({
        url: `${process.env.NEXT_DOMAIN_URL}/posts/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
  ];
}
