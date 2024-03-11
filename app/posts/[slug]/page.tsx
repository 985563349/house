import { format } from 'date-fns';

import { Markdown } from '@/components/markdown';
import client from '@/tina/__generated__/client';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const { data } = await client.queries.post({ relativePath: `${params.slug}.mdx` });

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

export const revalidate = 3600;

export default async function Post({ params }: Props) {
  const { data } = await client.queries.post({ relativePath: `${params.slug}.mdx` });

  return (
    <article className="prose max-w-none dark:prose-invert prose-p:text-lg">
      <h1 className="mb-5">{data.post.title}</h1>

      <time className="block text-lg text-text-muted" dateTime={data.post.date}>
        {format(new Date(data.post.date), 'MMM dd, yyyy')}
      </time>

      <Markdown content={data.post.body} />
    </article>
  );
}
