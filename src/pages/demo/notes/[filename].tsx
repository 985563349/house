// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import Head from 'next/head';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '@/tina/__generated__/client';
import type { NoteQuery } from '@/tina/__generated__/types';

const NotePage = (props: {
  data: NoteQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        {/* Tailwind CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
          integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1
            className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            data-tina-field={tinaField(data.note, 'title')}
          >
            {data.note.title}
          </h1>

          <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
              <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true"></div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div
                data-tina-field={tinaField(data.note, 'body')}
                className="text-lg max-w-prose mx-auto"
              >
                <TinaMarkdown content={data.note.body} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-100 text-center">
          Lost and looking for a place to start?
          <a
            href="https://tina.io/guides/tina-cloud/getting-started/overview/"
            className="text-blue-500 underline"
          >
            {' '}
            Check out this guide
          </a>{' '}
          to see how add TinaCMS to an existing Next.js site.
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }: { params: { filename: string } }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.mdx` };
  try {
    const res = await client.queries.note(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const notesListData = await client.queries.noteConnection();

  return {
    paths: notesListData.data.noteConnection.edges?.map((note) => ({
      params: { filename: note?.node?._sys.filename },
    })),
    fallback: false,
  };
};

export default NotePage;
