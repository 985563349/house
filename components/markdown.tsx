import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { StackBlitzEmbed } from '@/components/stack-blitz-embed';
import { GitHubGistEmbed } from '@/components/github-gist-embed';
import { CodeBlock } from '@/components/code-block';
import { CodeSandboxEmbed } from '@/components/code-sandbox-embed';

export type MarkdownProps = React.ComponentProps<typeof TinaMarkdown>;

const Markdown: React.FC<MarkdownProps> = ({ components, ...props }) => {
  return (
    <TinaMarkdown
      {...props}
      components={{
        CodeSandboxEmbed,
        StackBlitzEmbed,
        GitHubGistEmbed,
        code_block: CodeBlock,
        ...components,
      }}
    />
  );
};

export { Markdown };
