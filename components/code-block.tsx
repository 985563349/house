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
      <span className="block border-l-2 border-blue-500 bg-black bg-opacity-5 dark:bg-opacity-50">
        {children}
      </span>
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
      className="border dark:border-none"
      style={{ borderRadius: '0.375rem' }}
      lang={props?.lang}
      theme={{
        dark: 'material-palenight',
        light: 'material-lighter',
        lightSelector: 'html.light',
      }}
      extensions={[title, highlight]}
    >
      {props?.value}
    </Code>
  );
};

export { CodeBlock };
