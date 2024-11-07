import { format } from 'date-fns';

import { Markdown } from '@/components/markdown';
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
    <article className="prose dark:prose-invert prose-pre:rounded-none prose-a:underline-offset-4 prose-a:decoration-text-link hover:prose-a:text-text-link">
      <h1 className="mb-5">{data.post.title}</h1>

      <time className="block text-text-muted" dateTime={data.post.date}>
        {format(new Date(data.post.date), 'MMM dd, yyyy')}
      </time>

      <Markdown content={data.post.body} />
    </article>
  );
}
