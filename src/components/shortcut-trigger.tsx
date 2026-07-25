'use client';

import { useRef } from 'react';
import { useRender } from '@base-ui/react/use-render';
import { type Keys, type Options, useHotkeys } from 'react-hotkeys-hook';

export type ShortcutTriggerProps = {
  shortcut: Keys;
  children: React.ReactElement;
  options?: Options;
  ref?: React.Ref<HTMLElement>;
};

const ShortcutTrigger: React.FC<ShortcutTriggerProps> = ({
  shortcut,
  children,
  options,
  ref,
  ...props
}) => {
  const triggerRef = useRef<HTMLElement>(null);

  useHotkeys(shortcut, () => triggerRef.current?.click(), {
    preventDefault: true,
    ...options,
  });

  return useRender({
    render: children,
    ref: ref ? [triggerRef, ref] : triggerRef,
    props,
  });
};

export default ShortcutTrigger;
