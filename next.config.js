/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true, // 添加这一行
  exportPathMap: async function (
    defaultPathMap,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      source: '/sitemap(.*)\\.xml', // 匹配 sitemap.xml 和 sitemap-*.xml
      headers: [
        {
          key: 'Content-Type',
          value: 'application/xml',
        },
      ],
      '/': { page: '/' },
      '/about-us': { page: '/about-us-' },
      '/news-events': { page: '/news-events' },
      '/our-partners': { page: '/our-partners' },
      '/products': { page: '/products' },
      '/sustainability': { page: '/sustainability' },
      '/contact-us': { page: '/contact-us' },
      '/contact-us-quotation': { page: '/contact-us-quotation' },
      '/quotation': { page: '/quotation' },

      // 如果有其他页面，请在这里添加
      // '/about': { page: '/about' },
    }
  },
}

module.exports = nextConfig
