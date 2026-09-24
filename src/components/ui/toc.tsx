'use client';

import {
  useCallback,
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
  type ReactNode,
  type Ref,
  type RefCallback,
  type RefObject,
  type ComponentProps,
  type HTMLAttributes,
} from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { cn } from 'cn';

export interface TOCItemType {
  title: ReactNode;
  id: string;
  depth: number;
}

export type TableOfContents = TOCItemType[];

const ActiveAnchorContext = createContext<string[]>([]);
const ScrollContext = createContext<RefObject<HTMLElement | null>>({
  current: null,
});
const TOCContext = createContext<TOCItemType[]>([]);

function useActiveAnchors(): string[] {
  return useContext(ActiveAnchorContext);
}

function useTOCItems(): TOCItemType[] {
  return useContext(TOCContext);
}

function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as RefObject<T | null>).current = value;
      }
    });
  };
}

function useAnchorObserver(watch: string[]): string[] {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeAnchor, setActiveAnchor] = useState<string[]>([]);
  const stateRef = useRef<{ visible: Set<string> } | null>(null);

  const onChange = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      stateRef.current ??= { visible: new Set() };
      const state = stateRef.current;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          state.visible.add(entry.target.id);
        } else {
          state.visible.delete(entry.target.id);
        }
      }

      if (state.visible.size === 0) {
        const viewTop = entries[0]?.rootBounds?.top ?? 0;
        let fallback: Element | undefined;
        let min = -1;

        for (const id of watch) {
          const element = document.getElementById(id);
          if (!element) continue;

          const d = Math.abs(viewTop - element.getBoundingClientRect().top);
          if (min === -1 || d < min) {
            fallback = element;
            min = d;
          }
        }

        setActiveAnchor(fallback ? [fallback.id] : []);
      } else {
        const items = watch.filter((item) => state.visible.has(item));
        setActiveAnchor(items);
      }
    },
    [watch],
  );

  useEffect(() => {
    if (observerRef.current) return;
    observerRef.current = new IntersectionObserver(onChange, {
      rootMargin: '0px',
      threshold: 0.98,
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [onChange]);

  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;
    const elements = watch.flatMap(
      (heading) => document.getElementById(heading) ?? [],
    );

    for (const element of elements) observer.observe(element);
    return () => {
      for (const element of elements) observer.unobserve(element);
    };
  }, [watch]);

  return activeAnchor;
}

export interface TOCProviderProps {
  toc: TableOfContents;
  children?: ReactNode;
}

export function TOCProvider({ toc, children }: TOCProviderProps) {
  const headings = useMemo(() => {
    return toc.map((item) => item.id);
  }, [toc]);

  const activeAnchors = useAnchorObserver(headings);

  return (
    <TOCContext.Provider value={toc}>
      <ActiveAnchorContext.Provider value={activeAnchors}>
        {children}
      </ActiveAnchorContext.Provider>
    </TOCContext.Provider>
  );
}

function TOCScrollArea({ ref, className, ...props }: ComponentProps<'div'>) {
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={mergeRefs(viewRef, ref)}
      className={cn(
        'relative min-h-0 text-sm ms-px overflow-auto scrollbar-none mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3',
        className,
      )}
      {...props}
    >
      <ScrollContext.Provider value={viewRef}>
        {props.children}
      </ScrollContext.Provider>
    </div>
  );
}

interface TocThumbProps extends HTMLAttributes<HTMLDivElement> {
  containerRef: RefObject<HTMLElement | null>;
}

function updateThumb(
  thumb: HTMLElement,
  container: HTMLElement,
  active: string[],
): void {
  let upper = Number.MAX_VALUE;
  let lower = 0;
  let startOffset = 0;
  let endOffset = 0;

  const visibleItems = container.clientHeight === 0 ? [] : active;

  for (const item of visibleItems) {
    const element = container.querySelector<HTMLElement>(`a[href="#${item}"]`);
    if (!element) continue;

    const styles = getComputedStyle(element);
    const top = element.offsetTop + parseFloat(styles.paddingTop);
    const bottom =
      element.offsetTop +
      element.clientHeight -
      parseFloat(styles.paddingBottom);
    const lineOffset = Number(element.dataset.lineOffset ?? 0);

    if (top < upper) {
      upper = top;
      startOffset = lineOffset;
    }
    if (bottom > lower) {
      lower = bottom;
      endOffset = lineOffset;
    }
  }

  const top = upper === Number.MAX_VALUE ? 0 : upper;
  const height = upper === Number.MAX_VALUE ? 0 : lower - upper;

  thumb.dataset.active = String(height > 0);
  thumb.style.setProperty('--toc-top', `${top}px`);
  thumb.style.setProperty('--toc-height', `${height}px`);
  thumb.style.setProperty('--toc-start-offset', `${startOffset}px`);
  thumb.style.setProperty('--toc-end-offset', `${endOffset}px`);
}

function TocThumb({ containerRef, ...props }: TocThumbProps) {
  const thumbRef = useRef<HTMLDivElement>(null);
  const active = useActiveAnchors();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined || current === previous || !thumbRef.current) {
      return;
    }

    thumbRef.current.dataset.scrollDirection =
      current > previous ? 'down' : 'up';
  });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const onUpdate = () => {
      if (!thumbRef.current) return;
      updateThumb(thumbRef.current, container, active);
    };

    const observer = new ResizeObserver(onUpdate);
    observer.observe(container);
    onUpdate();

    return () => {
      observer.disconnect();
    };
  }, [containerRef, active]);

  return (
    <div
      ref={thumbRef}
      role="none"
      data-active="false"
      data-scroll-direction="down"
      {...props}
    />
  );
}

interface TOCItemProps extends Omit<ComponentProps<'a'>, 'href'> {
  href: string;
}

function TOCItem({ ref, ...props }: TOCItemProps) {
  const containerRef = useContext(ScrollContext);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const activeAnchors = useActiveAnchors();
  const activeOrder = activeAnchors.indexOf(props.href.slice(1));
  const isActive = activeOrder !== -1;
  const shouldScroll = activeOrder === 0;

  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const container = containerRef.current;

    if (!container || !anchor || !shouldScroll || !anchor.isConnected) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();

    const isAbove = anchorRect.top < containerRect.top;
    const isBelow = anchorRect.bottom > containerRect.bottom;

    if (isAbove || isBelow) {
      const anchorCenter =
        anchor.offsetTop - container.offsetTop + anchor.offsetHeight / 2;
      const containerCenter = container.clientHeight / 2;
      const scrollTop = anchorCenter - containerCenter;

      container.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: 'smooth',
      });
    }
  }, [containerRef, shouldScroll]);

  return (
    <a ref={mergeRefs(anchorRef, ref)} data-active={isActive} {...props}>
      {props.children}
    </a>
  );
}

function getItemOffset(depth: number): number {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
}

function getLineOffset(depth: number): number {
  return depth >= 3 ? 13 : 3;
}

export interface PageTOCItemsProps extends ComponentProps<'div'> {
  emptyText?: string;
}

function TOCItems({
  ref,
  className,
  emptyText = 'No Headings',
  ...props
}: PageTOCItemsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = useTOCItems();

  const [svg, setSvg] = useState<{
    path: string;
    width: number;
    height: number;
  }>();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function onResize(): void {
      if (container.clientHeight === 0) return;
      let w = 0;
      let h = 0;
      const d: string[] = [];
      let previousOffset = 0;
      let previousBottom = 0;

      for (let i = 0; i < items.length; i++) {
        const element: HTMLElement | null = container.querySelector(
          `a[href="#${items[i].id}"]`,
        );
        if (!element) continue;

        const styles = getComputedStyle(element);
        const offset = getLineOffset(items[i].depth) + 1;
        const top = element.offsetTop + parseFloat(styles.paddingTop);
        const bottom =
          element.offsetTop +
          element.clientHeight -
          parseFloat(styles.paddingBottom);

        w = Math.max(offset, w);
        h = Math.max(h, bottom);

        if (d.length === 0) {
          d.push(`M${offset} ${top}`);
        } else if (offset === previousOffset) {
          d.push(`L${offset} ${top}`);
        } else {
          const middle = previousBottom + (top - previousBottom) / 2;
          d.push(
            `C${previousOffset} ${middle} ${offset} ${middle} ${offset} ${top}`,
          );
        }
        d.push(`L${offset} ${bottom}`);
        previousOffset = offset;
        previousBottom = bottom;
      }

      setSvg({
        path: d.join(' '),
        width: w + 1,
        height: h,
      });
    }

    const observer = new ResizeObserver(onResize);
    onResize();

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (items.length === 0) {
    return (
      <div className="rounded-lg border bg-card p-3 text-xs text-muted-foreground">
        {emptyText}
      </div>
    );
  }

  return (
    <>
      {svg ? (
        <TocThumb
          containerRef={containerRef}
          className="group absolute inset-s-0 top-0 rtl:-scale-x-100"
          style={{ width: svg.width, height: svg.height }}
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
              )}")`,
            }}
          >
            <div className="mt-(--toc-top) h-(--toc-height) bg-primary transition-all" />
          </div>
          <span className="absolute inset-s-(--toc-start-offset) top-(--toc-top) hidden size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-all group-data-[active=true]:block group-data-[scroll-direction=up]:opacity-100" />
          <span className="absolute inset-s-(--toc-end-offset) top-[calc(var(--toc-top)+var(--toc-height))] hidden size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-all group-data-[active=true]:block group-data-[scroll-direction=down]:opacity-100" />
        </TocThumb>
      ) : null}
      <div
        ref={mergeRefs(containerRef, ref)}
        className={cn('flex flex-col', className)}
        {...props}
      >
        {items.map((item, i) => (
          <TOCItemElement
            key={item.id}
            item={item}
            upper={items[i - 1]?.depth}
            lower={items[i + 1]?.depth}
          />
        ))}
      </div>
    </>
  );
}

function TOCItemElement({
  item,
  upper = item.depth,
  lower = item.depth,
}: {
  item: TOCItemType;
  upper?: number;
  lower?: number;
}) {
  const offset = getLineOffset(item.depth);
  const upperOffset = getLineOffset(upper);
  const lowerOffset = getLineOffset(lower);

  return (
    <TOCItem
      href={`#${item.id}`}
      data-line-offset={offset + 1}
      style={{
        paddingInlineStart: getItemOffset(item.depth),
      }}
      className="prose relative py-1.5 text-sm text-muted-foreground hover:text-accent-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-primary"
    >
      {offset !== upperOffset ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="absolute -top-1.5 inset-s-0 size-4 rtl:-scale-x-100"
        >
          <path
            d={`M${upperOffset} 0 C${upperOffset} 6 ${offset} 6 ${offset} 12`}
            fill="none"
            className="stroke-foreground/10"
            strokeWidth="1"
          />
        </svg>
      ) : null}
      <div
        className={cn(
          'absolute inset-y-0 w-px bg-foreground/10',
          offset !== upperOffset && 'top-1.5',
          offset !== lowerOffset && 'bottom-1.5',
        )}
        style={{
          insetInlineStart: offset,
        }}
      />
      {item.title}
    </TOCItem>
  );
}

export type PageTOCProps = ComponentProps<'div'>;

export function PageTOC({ className, children, ...props }: PageTOCProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      {children}
    </div>
  );
}

export function PageTOCItems({ emptyText, ...props }: PageTOCItemsProps) {
  return (
    <TOCScrollArea>
      <TOCItems emptyText={emptyText} {...props} />
    </TOCScrollArea>
  );
}
