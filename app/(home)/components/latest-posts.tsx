import Link from 'next/link';

import ArrowCard from '@/components/arrow-card';
import client from '@/tina/__generated__/client';

const LatestPosts: React.FC = async () => {
  const { data } = await client.queries.postConnection({ last: 3, sort: 'date' });

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-black dark:text-white">最近的文章</h3>
        <Link href="/posts" className="link">
          查看所有文章
        </Link>
      </div>

      <ul className="flex flex-col gap-4">
        {data.postConnection.edges?.map((post) => (
          <li key={post?.node?.id}>
            <Link href={`/posts/${post?.node?._sys.breadcrumbs.join('/')}`}>
              <ArrowCard title={post?.node?.title} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestPosts;
