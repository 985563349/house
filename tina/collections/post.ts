import type { Collection } from 'tinacms';

const post: Collection = {
  name: 'post',
  label: 'Posts',
  path: 'content/posts',
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
      type: 'reference',
      name: 'topic',
      label: 'Topic',
      collections: ['topic'],
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'Date Posted',
      ui: {
        dateFormat: 'YYYY-MM-DD',
      },
      required: true,
    },
    {
      type: 'boolean',
      name: 'draft',
      label: 'Draft',
      required: true,
      description: 'If this is checked the post will not be published',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      templates: [
        {
          name: 'CodeSandboxEmbed',
          label: 'CodeSandbox Embed',
          match: {
            start: '{%',
            end: '%}',
            name: 'codesandbox',
          },
          fields: [
            {
              name: 'url',
              label: 'url',
              type: 'string',
              required: true,
            },
          ],
        },
        {
          name: 'StackBlitzEmbed',
          label: 'StackBlitz Embed',
          match: {
            start: '{%',
            end: '%}',
            name: 'stackblitz',
          },
          fields: [
            {
              name: 'url',
              label: 'url',
              type: 'string',
              required: true,
            },
          ],
        },
        {
          name: 'GitHubGistEmbed',
          label: 'GitHub Gist Embed',
          match: {
            start: '{%',
            end: '%}',
            name: 'githubgist',
          },
          fields: [
            {
              name: 'id',
              label: 'id',
              type: 'string',
              required: true,
            },
          ],
        },
        {
          name: 'Heading',
          label: 'Heading',
          fields: [
            {
              name: 'id',
              type: 'string',
            },
            {
              name: 'children',
              type: 'string',
            },
            {
              name: 'variant',
              type: 'string',
            },
            {
              name: 'anchor',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
};

export default post;
