import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { CodeSandboxEmbed } from '@/components/code-sandbox-embed';
import { CodeBlock } from '@/components/code-block';
import { GitHubGistEmbed } from '@/components/github-gist-embed';
import { StackBlitzEmbed } from '@/components/stack-blitz-embed';

export type TinaMarkdownProps = React.ComponentProps<typeof TinaMarkdown>;
export type MarkdownProps = Omit<TinaMarkdownProps, 'components'>;

const components = {
  CodeSandboxEmbed,
  GitHubGistEmbed,
  StackBlitzEmbed,
  code_block: CodeBlock,
  a: (props) => (
    <a href={props?.url} target="_blank">
      {props?.children}
    </a>
  ),
} as TinaMarkdownProps['components'];

const Markdown: React.FC<MarkdownProps> = ({ ...props }) => {
  return <TinaMarkdown {...props} components={components} />;
};

export { Markdown };
