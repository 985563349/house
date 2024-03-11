import client from '@/tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const revalidate = 3600;

export default async function Home() {
  const { data } = await client.queries.page({ relativePath: 'home.mdx' });

  return (
    <section>
      <h1 className="my-10 font-extrabold text-6xl text-center">{data.page.title}</h1>

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
