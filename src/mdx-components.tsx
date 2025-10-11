import type { MDXComponents } from 'mdx/types';

import Code from '@/components/code';
import CodeSandboxEmbed from '@/components/code-sandbox-embed';
import GitHubGistEmbed from '@/components/github-gist-embed';
import StackBlitzEmbed from '@/components/stack-blitz-embed';

const components = {
  Code,
  CodeSandboxEmbed,
  GitHubGistEmbed,
  StackBlitzEmbed,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
