import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD;

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
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
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/posts/${document._sys.filename}`,
        },
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
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/notes/${document._sys.filename}`,
        },
      },
    ],
  },
});
