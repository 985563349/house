import type { Collection } from 'tinacms';

const topic: Collection = {
  name: 'topic',
  label: 'Topics',
  path: 'content/topics',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      required: true,
    },
  ],
};

export default topic;
