import {
  AnnotationHandler,
  BlockAnnotation,
  InnerLine,
  Pre,
  highlight,
  type RawCode,
} from 'codehike/code';

import CopyButton from '@/components/copy-button';
import FileIcon from '@/components/file-icon';

const mark: AnnotationHandler = {
  name: 'mark',
  Line: ({ annotation, ...props }) => {
    const color = annotation?.query || 'rgb(14 165 233)';
    return (
      <div
        className="flex"
        style={{
          borderLeft: 'solid 2px transparent',
          borderLeftColor: annotation && color,
          backgroundColor: annotation && `rgb(from ${color} r g b / 0.1)`,
        }}
      >
        <InnerLine merge={props} className="px-4 flex-1" />
      </div>
    );
  },
  Inline: ({ annotation, children }) => {
    const color = annotation?.query || 'rgb(14 165 233)';
    return (
      <span
        className="rounded px-0.5 py-0 -mx-0.5"
        style={{
          outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
          background: `rgb(from ${color} r g b / 0.13)`,
        }}
      >
        {children}
      </span>
    );
  },
};

const diff: AnnotationHandler = {
  name: 'diff',
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query === '-' ? '#f85149' : '#3fb950';
    return [annotation, { ...annotation, name: 'mark', query: color }];
  },
  Line: ({ annotation, ...props }) => (
    <>
      <div className="min-w-[1ch] box-content opacity-70 pl-2 select-none">
        {annotation?.query}
      </div>
      <InnerLine merge={props} />
    </>
  ),
};

const focus: AnnotationHandler = {
  name: 'focus',
  onlyIfAnnotated: true,
  Line: (props) => (
    <InnerLine
      merge={props}
      className="px-2 blur-xs transition-[filter] duration-300 ease-in-out hover:blur-none group-hover:blur-none data-focus:blur-none"
    />
  ),
  AnnotatedLine: ({ annotation, ...props }) => (
    <InnerLine merge={props} data-focus={true} />
  ),
};

export type CodeProps = {
  codeblock: RawCode;
};

const Code: React.FC<CodeProps> = async ({ codeblock }) => {
  const highlighted = await highlight(codeblock, 'github-from-css');

  const filename = highlighted.meta;

  return (
    <div className="my-5 border border-border/80 rounded-xl p-1 bg-active-background overflow-hidden">
      <div className="flex items-center">
        {filename && (
          <div className="flex items-center gap-1 px-2 pt-1 pb-2 text-sm">
            <FileIcon className="shrink-0 text-2xl" name={filename} />
            <span>{filename}</span>
          </div>
        )}
        <CopyButton className="ml-auto" text={highlighted.code} />
      </div>

      <div className="border border-border/80 rounded-[9px] bg-background">
        <Pre
          code={highlighted}
          handlers={[mark, diff, focus]}
          className="not-prose overflow-x-auto py-4 text-sm bg-transparent overscroll-x-contain scrollbar-none"
        />
      </div>
    </div>
  );
};

export default Code;
