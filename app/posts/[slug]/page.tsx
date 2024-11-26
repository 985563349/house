import { format } from 'date-fns';

import Markdown from '@/components/markdown';
import BackTo from '@/components/back-to';
import { readingTime } from '@/lib/utils';
import client from '@/tina/__generated__/client';

export const revalidate = 3600; // invalidate every hour

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
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

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await client.queries.post({ relativePath: `${slug}.mdx` });

  return (
    <div className="mx-auto max-w-screen-md px-5">
      <BackTo href="/posts">返回文章</BackTo>

      <div className="space-y-3 my-10">
        <div className="flex items-center gap-2 text-sm">
          <time dateTime={data.post.date}>{format(new Date(data.post.date), 'yyyy-MM-dd')}</time>
          &bull;
          <span>阅读时间 {readingTime(JSON.stringify(data.post.body))} 分钟</span>
        </div>

        <h1 className="text-3xl font-semibold text-black dark:text-white">{data.post.title}</h1>
      </div>

      <article className="">
        <Markdown content={data.post.body} />
      </article>
    </div>
  );
}
