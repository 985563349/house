import { notFound } from 'next/navigation';
import { format } from 'date-fns';

import Markdown from '@/components/markdown';
import BackLink from '@/components/back-link';
import { readingTime } from '@/lib/utils';
import client from '@/tina/__generated__/client';

export const revalidate = 3600; // invalidate every hour

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await client.queries.post({ relativePath: `${slug}.mdx` });

  return {
    title: data.post.title,
  };
}

export async function generateStaticParams() {
  const { data } = await client.queries.postConnection();

  if (!data.postConnection.edges) {
    return [];
  }

  return data.postConnection.edges.map((post) => ({
    slug: post?.node?._sys.breadcrumbs.join('/'),
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await client.queries.post({
    relativePath: `${slug}.mdx`,
  });

  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-4 text-3xl font-semibold">{data.post.title}</h1>

        <div className="flex items-center gap-2 text-sm">
          <time dateTime={data.post.date}>
            {format(new Date(data.post.date), 'yyyy 年 MM 月 dd')}
          </time>
          &bull;
          <span>
            阅读时间 {readingTime(JSON.stringify(data.post.body))} 分钟
          </span>
        </div>
      </div>

      <section className="slide-enter-content prose dark:prose-invert">
        <Markdown content={data.post.body} />
      </section>

      <p className="my-10 text-gray-500 dark:text-gray-400">
        # {data.post.topic?.name}
      </p>

      <BackLink />
    </div>
  );
}
