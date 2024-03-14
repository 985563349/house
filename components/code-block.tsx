import { Code } from 'bright';
import type { Extension } from 'bright';

const title: Extension = {
  name: 'title',
  beforeHighlight: (props, annotations) => {
    if (annotations.length > 0) {
      return { ...props, title: annotations[0].query };
    }
  },
};

const highlight: Extension = {
  name: 'highlight',
  MultilineAnnotation: ({ children }) => {
    return (
      <span className="block border-l-4 border-blue-500 bg-white bg-opacity-5">{children}</span>
    );
  },
};

export type CodeBlockProps = {
  lang?: string;
  value: string;
};

const CodeBlock = (props?: CodeBlockProps) => {
  return (
    <Code
      style={{ borderRadius: '0.375rem' }}
      lang={props?.lang}
      theme="material-palenight"
      extensions={[title, highlight]}
    >
      {props?.value}
    </Code>
  );
};

export { CodeBlock };
