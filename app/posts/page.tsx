import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';

import client from '@/tina/__generated__/client';

export const metadata: Metadata = {
  title: 'Blog',
};

export const revalidate = 3600;

export default async function Posts() {
  const { data } = await client.queries.postConnection({
    last: -1,
    sort: 'date',
    filter: { draft: { eq: false } },
  });

  return (
    <div>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {data.postConnection.edges?.map((post) => (
          <li key={post?.node?.id}>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <div className="flex-1">
                <Link
                  href={`/posts/${post?.node?._sys.breadcrumbs.join('/')}`}
                  className="transition-[background-size] duration-300 
                        bg-gradient-to-r bg-left-bottom bg-no-repeat
                        bg-[length:0%_55%] hover:bg-[length:100%_55%] dark:bg-[length:0%_2px] hover:dark:bg-[length:100%_2px]
                        from-primary-blue to-primary-blue dark:from-primary-blue dark:to-primary-blue"
                >
                  {post?.node?.title}
                </Link>
              </div>

              <div className="pt-1 italic text-sm text-text-muted">
                <time dateTime={post?.node?.date}>
                  {format(new Date(post?.node?.date!), 'MMM dd, yyyy')}
                </time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
