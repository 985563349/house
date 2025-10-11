import { basename } from 'node:path';

import type { Metadata } from 'next';
import { glob } from 'tinyglobby';
import { compareDesc, format } from 'date-fns';

import PostCard from '@/components/post-card';
import FadeIn from '@/components/fade-in';

export const metadata: Metadata = {
  title: '文章',
};

export default async function Posts() {
  const files = await glob('content/*.mdx');
  const slugs = files.map((file) => basename(file, '.mdx'));

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/${slug}.mdx`);
      return { slug, metadata };
    }),
  );

  const sortedPosts = posts
    .filter((post) => !post.metadata.draft)
    .sort((a, b) => compareDesc(a.metadata.date, b.metadata.date));

  return (
    <div>
      <FadeIn order={1}>
        <div className="space-y-4 mb-8 py-2">
          <h3 className="text-3xl font-semibold tracking-tight text-balance">
            文章
          </h3>

          <p className="text-sm/none font-medium tracking-wider text-muted-foreground">
            写下技术、设计，以及二者之间的灵感与思考
          </p>
        </div>
      </FadeIn>

      <div className="py-4">
        <div className="flex flex-col gap-4">
          {sortedPosts.map((post, index) => (
            <FadeIn key={post.slug} order={index + 2}>
              <PostCard
                title={post.metadata.title}
                href={`/posts/${post.slug}`}
                description={post.metadata.description}
                date={format(post.metadata.date, 'yyyy.MM.dd')}
                categories={post.metadata.categories}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
