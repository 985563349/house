import { TinaMarkdown } from 'tinacms/dist/rich-text';

import client from '@/tina/__generated__/client';

import { StackBlitzEmbed } from '@/components/stack-blitz-embed';
import { GitHubGistEmbed } from '@/components/github-gist-embed';
import { CodeBlock } from '@/components/code-block';

type Props = {
  params: { slug: string };
};

function fetchPostBySlug(slug: string) {
  return client.queries.post({ relativePath: `${slug}.mdx` });
}

export async function generateMetadata({ params }: Props) {
  const { data } = await fetchPostBySlug(params.slug);

  return {
    title: data.post.title,
  };
}

export default async function Post({ params }: Props) {
  const { data } = await fetchPostBySlug(params.slug);

  return (
    <article className="prose dark:prose-invert prose-p:text-lg">
      <h1>{data.post.title}</h1>

      <TinaMarkdown
        content={data.post.body}
        components={{
          StackBlitzEmbed,
          GitHubGistEmbed,
          code_block: CodeBlock,
        }}
      />
    </article>
  );
}
