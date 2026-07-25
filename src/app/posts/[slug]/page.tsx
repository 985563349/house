import { basename } from 'node:path';

import { type Metadata } from 'next';
import Link from 'next/link';
import { glob } from 'tinyglobby';
import { compareDesc, format } from 'date-fns';
import { readingTime } from 'reading-time-estimator';
import {
  AlarmClockIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TagIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import BackLink from '@/components/back-link';
import FadeIn from '@/components/fade-in';
import ShortcutTrigger from '@/components/shortcut-trigger';

export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await glob('content/*.mdx');
  const slugs = files.map((file) => basename(file, '.mdx'));
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/${slug}.mdx`);
      return { slug, metadata };
    }),
  );

  return posts
    .filter((post) => !post.metadata.draft)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/${slug}.mdx`);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const files = await glob('content/*.mdx');
  const slugs = files.map((file) => basename(file, '.mdx'));

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { default: PostContent, ...other } = await import(
        `@/content/${slug}.mdx`
      );

      return { PostContent, slug, ...other };
    }),
  );

  const sortedPosts = posts
    .filter((post) => !post.metadata.draft)
    .sort((a, b) => compareDesc(a.metadata.date, b.metadata.date));

  const index = sortedPosts.findIndex((post) => post.slug === slug);

  const previous = sortedPosts[index - 1];
  const current = sortedPosts[index];
  const next = sortedPosts[index + 1];

  const { PostContent, metadata, raw } = current;
  const { minutes } = readingTime(raw);

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <FadeIn order={1}>
          <div className="flex items-center justify-between py-2">
            <Link
              href="/posts"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'px-0 text-muted-foreground hover:text-foreground hover:no-underline',
              )}
            >
              <ArrowLeftIcon />
              文章
            </Link>

            <div className="flex items-center gap-2">
              {previous && (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <ShortcutTrigger shortcut="left">
                        <Link
                          href={`/posts/${previous.slug}`}
                          className={buttonVariants({
                            variant: 'secondary',
                            size: 'icon-sm',
                          })}
                        >
                          <ArrowLeftIcon />
                        </Link>
                      </ShortcutTrigger>
                    }
                  />
                  <TooltipContent>
                    {previous?.metadata.title}
                    <Kbd>
                      <ArrowLeftIcon />
                    </Kbd>
                  </TooltipContent>
                </Tooltip>
              )}

              {next && (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <ShortcutTrigger shortcut="right">
                        <Link
                          href={`/posts/${next.slug}`}
                          className={buttonVariants({
                            variant: 'secondary',
                            size: 'icon-sm',
                          })}
                        >
                          <ArrowRightIcon />
                        </Link>
                      </ShortcutTrigger>
                    }
                  />
                  <TooltipContent>
                    {next?.metadata.title}
                    <Kbd>
                      <ArrowRightIcon />
                    </Kbd>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn order={2}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="">{format(metadata.date, 'yyyy.MM.dd')}</span>

              <div className="flex items-center gap-1.5">
                <AlarmClockIcon className="size-3.5" />
                <span>{minutes} 分钟</span>
              </div>
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-balance">
              {metadata.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {metadata.description}
            </p>

            <div className="flex items-center flex-wrap gap-1.5">
              <TagIcon className="size-3.5 text-muted-foreground" />
              {metadata.categories.map((category: string) => (
                <span
                  key={category}
                  className="inline-flex items-center border border-dashed rounded-md px-1.5 py-0.5 font-geist-mono text-xs text-muted-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn order={3}>
          <hr className="border-dashed border-border/60" />
        </FadeIn>

        <FadeIn order={4}>
          <div className="prose dark:prose-invert">
            <PostContent />
          </div>
        </FadeIn>
      </div>

      <FadeIn order={5}>
        <BackLink />
      </FadeIn>
    </div>
  );
}
