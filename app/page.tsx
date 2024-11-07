import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '@/tina/__generated__/client';

export const revalidate = 3600; // invalidate every hour

export default async function Home() {
  const { data } = await client.queries.page({ relativePath: 'home.mdx' });

  return (
    <section>
      <h1 className="my-10 font-extrabold text-4xl">{data.page.title}</h1>

      <TinaMarkdown
        content={data.page.body}
        components={{
          p: (props) => <p className="mb-10" {...props} />,
          ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
        }}
      />
    </section>
  );
}
