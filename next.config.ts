import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const chConfig = {
  components: { code: 'Code' },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'metadata' }],
      'remark-gfm',
      ['remark-codehike', chConfig],
    ],
    recmaPlugins: [['recma-codehike', chConfig]],
  },
});

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Accel-Buffering',
            value: 'no',
          },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);
