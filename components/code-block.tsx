import { Code } from 'bright';
import type { Extension } from 'bright';
import { themeIcons } from 'seti-icons';

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

const getDarkIcon = themeIcons({
  blue: '#519aba',
  grey: '#4d5a5e',
  'grey-light': '#6d8086',
  green: '#8dc149',
  orange: '#e37933',
  pink: '#f55385',
  purple: '#a074c4',
  red: '#cc3e44',
  white: '#d4d7d6',
  yellow: '#cbcb41',
  ignore: '#41535b',
});

const getLightIcon = themeIcons({
  blue: '#498ba7',
  grey: '#455155',
  'grey-light': '#627379',
  green: '#7fae42',
  orange: '#cc6d2e',
  pink: '#dd4b78',
  purple: '#9068b0',
  red: '#b8383d',
  white: '#bfc2c1',
  yellow: '#b7b73b',
  ignore: '#3b4b52',
});

const fileIcons: Extension = {
  name: 'fileIcons',
  TabContent: ({ title = '', colors }) => {
    const { svg, color } =
      colors.colorScheme === 'dark' ? getDarkIcon(title) : getLightIcon(title);
    const __html = svg.replace(/svg/, `svg fill='${color}'`);

    return (
      <div className="flex items-center h-[1.5em] -ml-[8px]">
        <span
          className="inline-block w-[2em] h-[2em] -my-[0.5em]"
          dangerouslySetInnerHTML={{ __html }}
        />
        {title}
      </div>
    );
  },
};

const focus: Extension = {
  name: 'focus',
  MultilineAnnotation: ({ children }) => (
    <div className="contrast-0">{children}</div>
  ),
  beforeHighlight: (props, focusAnnotations) => {
    if (focusAnnotations.length === 0) return props;

    const lineCount = props.code.split('\n').length;
    const ranges = focusAnnotations.flatMap((a) => a.ranges);
    let newRanges = [{ fromLineNumber: 1, toLineNumber: lineCount }];

    for (const range of ranges) {
      if ('fromLineNumber' in range === false) return;

      const { fromLineNumber, toLineNumber } = range;

      newRanges = newRanges.flatMap((r) => {
        if (r.fromLineNumber > toLineNumber || r.toLineNumber < fromLineNumber)
          return [r];

        if (r.fromLineNumber < fromLineNumber && r.toLineNumber > toLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
            { fromLineNumber: toLineNumber + 1, toLineNumber: r.toLineNumber },
          ];

        if (r.fromLineNumber < fromLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
          ];

        if (r.toLineNumber > toLineNumber)
          return [
            { fromLineNumber: toLineNumber + 1, toLineNumber: r.toLineNumber },
          ];

        return [];
      });
    }

    const newAnnotations = props.annotations.filter((a) => a.name !== 'focus');
    newAnnotations.push({ name: 'focus', ranges: newRanges });

    return { ...props, annotations: newAnnotations };
  },
};

export type CodeBlockProps = {
  lang?: string;
  value: string;
};

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  return (
    <div className="code-block">
      <Code
        className="border dark:border-none"
        style={{ borderRadius: '0.375rem' }}
        lang={props.lang}
        theme={{
          dark: 'github-dark',
          light: 'github-light',
          lightSelector: 'html.light',
        }}
        extensions={[title, highlight, fileIcons, focus]}
      >
        {props.value}
      </Code>
    </div>
  );
};

export default CodeBlock;
