import { basename } from 'node:path';

import Link from 'next/link';
import { compareDesc, format } from 'date-fns';
import { ArrowRightIcon } from 'lucide-react';
import { glob } from 'tinyglobby';

import { buttonVariants } from '@/components/ui/button';
import PostCard from '@/components/post-card';

const Post: React.FC = async () => {
  const files = await glob('content/*.mdx');
  const slugs = files.map((file) => basename(file, '.mdx'));

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/${slug}.mdx`);
      return { slug, metadata };
    }),
  );

  const recentPosts = posts
    .filter((post) => !post.metadata.draft)
    .sort((a, b) => compareDesc(a.metadata.date, b.metadata.date))
    .slice(0, 2);

  return (
    <div className="space-y-6">
      <p className="text-3xl font-semibold tracking-tight">文章</p>

      <div className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.metadata.title}
            href={`/posts/${post.slug}`}
            description={post.metadata.description}
            date={format(post.metadata.date, 'yyyy.MM.dd')}
            categories={post.metadata.categories}
          />
        ))}
      </div>

      <div className="flex justify-center items-center py-2">
        <Link
          href="/posts"
          className={buttonVariants({ variant: 'secondary' })}
        >
          全部文章
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default Post;
