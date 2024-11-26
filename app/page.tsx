import { TinaMarkdown } from 'tinacms/dist/rich-text';

import Link from '@/components/link';
import ArrowCard from '@/components/arrow-card';
import client from '@/tina/__generated__/client';

export const revalidate = 3600; // invalidate every hour

async function getPageData() {
  const response = await client.queries.page({ relativePath: 'home.mdx' });

  if (response.errors) {
    throw new Error('Failed to fetch page data');
  }

  return response.data.page;
}

async function getLatestPosts() {
  const response = await client.queries.postConnection({ last: 3, sort: 'date' });

  if (response.errors) {
    throw new Error('Failed to fetch latest posts');
  }

  return response.data.postConnection.edges;
}

export default async function Home() {
  const [page, posts] = await Promise.all([getPageData(), getLatestPosts()]);

  return (
    <div className="mx-auto max-w-screen-md px-5">
      <h3 className="font-semibold text-black dark:text-white">{page.title}</h3>

      <div className="space-y-16">
        <section>
          <article className="space-y-4">
            <TinaMarkdown
              content={page.body}
              components={{
                p: (props) => <p {...props} />,
                bold: (props) => <b className="font-black" {...props} />,
              }}
            />
          </article>
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-black dark:text-white">最近的文章</h3>
            <Link href="/posts" underline>
              查看所有文章
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {posts?.map((post) => (
              <li key={post?.node?.id}>
                <Link href={`/posts/${post?.node?._sys.breadcrumbs.join('/')}`} className="block">
                  <ArrowCard title={post?.node?.title} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
