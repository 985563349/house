import { Code } from 'bright';

export type CodeBlockProps = {
  lang?: string;
  value: string;
};

const CodeBlock = (props?: CodeBlockProps) => {
  return <Code lang={props?.lang}>{props?.value ?? ''}</Code>;
};

export { CodeBlock };
