import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { CodeSandboxEmbed } from '@/components/code-sandbox-embed';
import { CodeBlock } from '@/components/code-block';
import { GitHubGistEmbed } from '@/components/github-gist-embed';
import { Heading } from '@/components/heading';
import { StackBlitzEmbed } from '@/components/stack-blitz-embed';

export type TinaMarkdownProps = React.ComponentProps<typeof TinaMarkdown>;
export type MarkdownProps = Omit<TinaMarkdownProps, 'components'>;

const components = {
  CodeSandboxEmbed,
  GitHubGistEmbed,
  Heading,
  StackBlitzEmbed,
  code_block: CodeBlock,
  a: ({ url, children }: any) => (
    <a href={url} target={url.startsWith('#') ? '_self' : '_blank'}>
      {children}
    </a>
  ),
} as TinaMarkdownProps['components'];

const Markdown: React.FC<MarkdownProps> = ({ ...props }) => {
  return <TinaMarkdown {...props} components={components} />;
};

export { Markdown };
