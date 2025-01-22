import type { Collection } from 'tinacms';

const page: Collection = {
  name: 'page',
  label: 'Pages',
  path: 'content/pages',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};

export default page;
