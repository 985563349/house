'use client';

import { useRef } from 'react';

import CopyButton from '@/components/copy-button';

export type CodeBlockProps = {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  copy?: boolean;
  children: string;
};

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const { title, icon, copy, children } = props;

  const ref = useRef<HTMLDivElement>(null);

  const shouldShowHeader = title || icon || copy;

  return (
    <div className="my-5 rounded-md p-1 bg-slate-100 dark:bg-slate-800">
      {shouldShowHeader && (
        <div className="flex items-center gap-0.5 px-2 h-8 text-sm">
          {icon}
          {title}
          {copy && <CopyButton className="ml-auto" text={() => ref.current?.innerText ?? ''} />}
        </div>
      )}
      <div ref={ref} className="[&>pre]:m-0" dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  );
};

export default CodeBlock;
