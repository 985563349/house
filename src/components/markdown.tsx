import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { codeToHtml } from 'shiki';
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from '@shikijs/transformers';

import { range } from '@/lib/utils';

import CodeSandboxEmbed from '@/components/code-sandbox-embed';
import CodeBlock from '@/components/code-block';
import FileIcon from '@/components/file-icon';
import GitHubGistEmbed from '@/components/github-gist-embed';
import Video from '@/components/video';
import Heading from '@/components/heading';
import StackBlitzEmbed from '@/components/stack-blitz-embed';

export type TinaMarkdownProps = React.ComponentProps<typeof TinaMarkdown>;
export type MarkdownProps = Omit<TinaMarkdownProps, 'components'>;

const highlight = async (code: string, lang: string) => {
  const chunks = code.split('\n');

  const meta: Record<string, string> = {};
  const raws: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const [, match] = /\[!meta\s+(.+)\]$/.exec(chunks[i]) ?? [];

    if (!match) {
      continue;
    }

    match
      .trim()
      .split(/\s+/)
      .forEach((item) => {
        const [key, value] = item.split(':');

        meta[key] = value ?? key;
        raws.push(value ?? key);
      });

    chunks.splice(i, 1);
    i--;
  }

  const html = await codeToHtml(chunks.join('\n'), {
    lang,
    themes: {
      light: 'github-light-default',
      dark: 'github-dark-default',
    },
    defaultColor: 'light-dark()',
    transformers: [
      {
        preprocess(_, options) {
          const raw = raws.join(' ');

          const diff = raws.reduce<Record<number, string>>((acc, raw) => {
            const [, operator, segment] = raw.match(/(\+\+|--)\((.*?)\)/) ?? [];

            if (operator && segment) {
              range(segment).forEach((line) => {
                acc[line] = operator;
              });
            }

            return acc;
          }, {});

          options.meta ??= {};
          options.meta.__raw = raw;
          options.meta.__diff = diff;
        },
        line(node, line) {
          const diff = this.options.meta?.__diff ?? {};

          if (!Object.keys(diff).length) {
            return;
          }

          const classMap: Record<string, string> = {
            '++': 'diff add',
            '--': 'diff remove',
          };

          if (diff?.[line]) {
            this.addClassToHast(node, classMap[diff[line]]);
          }

          this.addClassToHast(this.pre, 'has-diff');
        },
      },
      transformerNotationDiff(),
      transformerNotationErrorLevel(),
      transformerNotationFocus(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerMetaHighlight(),
      transformerMetaWordHighlight(),
    ],
  });

  return { meta, html };
};

const components = {
  CodeSandboxEmbed,
  GitHubGistEmbed,
  Video,
  Heading,
  StackBlitzEmbed,
  code_block: async ({ lang, value }: any) => {
    const { meta, html } = await highlight(value, lang);
    const { title, copy } = meta;

    const icon = title ? <FileIcon className="text-2xl" filename={title} /> : null;

    return (
      <CodeBlock title={title} icon={icon} copy={!!copy}>
        {html}
      </CodeBlock>
    );
  },
  a: ({ url, children }: any) => (
    <a href={url} target={url.startsWith('#') ? '_self' : '_blank'}>
      {children}
    </a>
  ),
} as TinaMarkdownProps['components'];

const Markdown: React.FC<MarkdownProps> = ({ ...props }) => {
  return <TinaMarkdown {...props} components={components} />;
};

export default Markdown;
