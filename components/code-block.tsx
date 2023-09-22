'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeBlockProps = {
  lang?: string;
  value: string;
};

const CodeBlock = (props?: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={props?.lang} style={oneDark}>
      {props?.value ?? ''}
    </SyntaxHighlighter>
  );
};

export { CodeBlock };
