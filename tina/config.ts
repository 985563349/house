import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
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
      },
      {
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
      },
      {
        name: 'note',
        label: 'Notes',
        path: 'content/notes',
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
      },
      {
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
      },
    ],
  },
});
