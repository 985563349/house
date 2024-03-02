import { format } from 'date-fns';

import client from '@/tina/__generated__/client';
import { Markdown } from '@/components/markdown';

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
    <article className="prose dark:prose-invert prose-p:text-lg">
      <h1 className="mb-3">{data.post.title}</h1>
      <time className="text-text-muted" dateTime={data.post.date}>
        {format(new Date(data.post.date), 'yyyy-MM-dd')}
      </time>

      <Markdown content={data.post.body} />
    </article>
  );
}
