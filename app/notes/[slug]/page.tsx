import { unstable_cache } from 'next/cache';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { format } from 'date-fns';

import client from '@/tina/__generated__/client';

import { StackBlitzEmbed } from '@/components/stack-blitz-embed';
import { GitHubGistEmbed } from '@/components/github-gist-embed';
import { CodeBlock } from '@/components/code-block';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const { data } = await client.queries.note({ relativePath: `${params.slug}.mdx` });

  return {
    title: data.note.title,
  };
}

export async function generateStaticParams() {
  const { data } = await client.queries.noteConnection();

  if (!data.noteConnection.edges) {
    return [];
  }

  return data.noteConnection.edges.map((note) => ({
    slug: note?.node?._sys.breadcrumbs.join('/'),
  }));
}

export default async function Note({ params }: Props) {
  const cacheKey = `note-${params.slug}`;

  const { data } = await unstable_cache(
    () => client.queries.note({ relativePath: `${params.slug}.mdx` }),
    [cacheKey],
    { tags: [cacheKey] }
  )();

  return (
    <article className="prose dark:prose-invert prose-p:text-lg">
      <h1 className="mb-3">{data.note.title}</h1>
      <time className="text-text-muted" dateTime={data.note.date}>
        {format(new Date(data.note.date), 'yyyy-MM-dd')}
      </time>

      <TinaMarkdown
        content={data.note.body}
        components={{
          StackBlitzEmbed,
          GitHubGistEmbed,
          code_block: CodeBlock,
        }}
      />
    </article>
  );
}
