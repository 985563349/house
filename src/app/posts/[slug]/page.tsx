import { basename } from 'node:path';

import { type Metadata } from 'next';
import Link from 'next/link';
import { glob } from 'tinyglobby';
import { format } from 'date-fns';
import { ArrowLeftIcon, TagIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import BackLink from '@/components/back-link';
import FadeIn from '@/components/fade-in';

export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await glob('content/*.mdx');
  const slugs = files.map((file) => basename(file, '.mdx'));

  return slugs.map((slug) => ({ slug }));
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
  const { default: PostContent, metadata } = await import(
    `@/content/${slug}.mdx`
  );

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
          </div>
        </FadeIn>

        <FadeIn order={2}>
          <div className="flex flex-col gap-4">
            <p className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                {format(metadata.date, 'yyyy.MM.dd')}
              </span>
            </p>

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
