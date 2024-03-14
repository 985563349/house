import { Code } from 'bright';
import type { Extension } from 'bright';

const highlight: Extension = {
  name: 'highlight',
  MultilineAnnotation: ({ children }) => {
    return <span className="block bg-white bg-opacity-5">{children}</span>;
  },
};

export type CodeBlockProps = {
  lang?: string;
  value: string;
};

const CodeBlock = (props?: CodeBlockProps) => {
  return (
    <Code lang={props?.lang} theme="material-palenight" extensions={[highlight]}>
      {props?.value}
    </Code>
  );
};

export { CodeBlock };
