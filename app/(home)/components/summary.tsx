import { TinaMarkdown } from 'tinacms/dist/rich-text';

import client from '@/tina/__generated__/client';

const Summary: React.FC = async () => {
  const { data } = await client.queries.page({ relativePath: 'home.mdx' });

  return (
    <section>
      <h3 className="font-semibold text-black dark:text-white">{data.page.title}</h3>

      <article className="space-y-4">
        <TinaMarkdown
          content={data.page.body}
          components={{
            p: (props) => <p {...props} />,
          }}
        />
      </article>
    </section>
  );
};

export default Summary;
