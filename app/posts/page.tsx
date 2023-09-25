import Link from 'next/link';

import client from '@/tina/__generated__/client';

export default async function Posts() {
  const { data } = await client.queries.postConnection({ sort: 'date', last: -1 });

  return (
    <div>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {data.postConnection.edges?.map((post) => (
          <li key={post?.node?.id}>
            <Link href={`/posts/${post?.node?._sys.breadcrumbs.join('/')}`}>
              {post?.node?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
