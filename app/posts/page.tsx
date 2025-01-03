import type { Metadata } from 'next';
import Link from 'next/link';

import ArrowCard from '@/components/arrow-card';
import client from '@/tina/__generated__/client';
import type { PostConnectionQuery } from '@/tina/__generated__/types';

export const revalidate = 3600; // invalidate every hour

export const metadata: Metadata = {
  title: '文章',
};

export default async function Posts() {
  const { data } = await client.queries.postConnection({
    last: -1,
    sort: 'date',
    filter: { draft: { eq: false } },
  });

  const posts = data.postConnection.edges?.reduce((acc, post) => {
    const year = new Date(post?.node?.date!).getFullYear().toString();

    acc[year] ??= [];
    acc[year]?.push(post);

    return acc;
  }, {} as Record<string, PostConnectionQuery['postConnection']['edges']>);

  const years = Object.keys(posts ?? {}).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="mx-auto max-w-screen-md px-5">
      <div className="space-y-10">
        <div className="font-semibold text-black dark:text-white">文章</div>

        <div className="space-y-8">
          {years.map((year) => (
            <section className="space-y-4" key={year}>
              <div className="font-semibold text-black dark:text-white">{year}</div>

              <ul className="flex flex-col gap-4">
                {posts?.[year]?.map((post) => (
                  <li key={post?.node?.id}>
                    <Link href={`/posts/${post?.node?._sys.breadcrumbs.join('/')}`}>
                      <ArrowCard title={post?.node?.title} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
