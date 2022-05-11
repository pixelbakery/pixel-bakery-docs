const { remarkMdxFrontmatter } = require('remark-mdx-frontmatter')
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  mdxOptions: {
    remarkPlugins: [[remarkMdxFrontmatter]],
  },
  unstable_flexsearch: true,
  unstable_staticImage: true,
  unstable_stork: true,
})

module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        statusCode: 301,
      },
      {
        source: '/advanced/performance',
        destination: '/docs/advanced/performance',
        statusCode: 301,
      },
      {
        source: '/advanced/cache',
        destination: '/docs/advanced/cache',
        statusCode: 301,
      },
      {
        source: '/docs/cache',
        destination: '/docs/advanced/cache',
        statusCode: 301,
      },
      {
        source: '/change-log',
        destination: '/docs/change-log',
        statusCode: 301,
      },
      {
        source: '/blog/swr-1',
        destination: '/blog/swr-v1',
        statusCode: 301,
      },
      {
        source: '/docs',
        destination: '/docs/getting-started',
        statusCode: 302,
      },
      {
        source: '/examples',
        destination: '/examples/basic',
        statusCode: 302,
      },
    ]
  },
})
