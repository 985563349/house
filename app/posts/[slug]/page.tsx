import { TinaMarkdown } from 'tinacms/dist/rich-text';

import client from '@/tina/__generated__/client';

import { StackBlitzEmbed } from '@/components/stack-blitz-embed';
import { GitHubGistEmbed } from '@/components/github-gist-embed';
import { CodeBlock } from '@/components/code-block';

export default async function Post({ params }: { params: { slug: string } }) {
  const { data } = await client.queries.post({ relativePath: `${params.slug}.mdx` });

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
