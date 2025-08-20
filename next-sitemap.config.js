/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://walttec.shop', // 替换为你的域名
  generateRobotsTxt: true, // 是否生成 robots.txt 文件
  sitemapSize: 5000, // 每个 sitemap 文件的最大 URL 数量
  changefreq: 'daily', // 页面更新频率，可选: 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
  priority: 0.7, // 默认优先级
  outDir: './public', // sitemap 和 robots.txt 文件的输出目录
  // 单独设置页面优先级
  additionalPaths: async (config) => [
    {
      loc: '/', // 页面路径
      changefreq: 'daily',
      priority: 1.0, // 设置为最高优先级
    },
    {
      loc: '/about-us',
      changefreq: 'weekly',
      priority: 0.9, //
    },
    {
      loc: '/contact-us',
      changefreq: 'weekly',
      priority: 0.9, //
    },
    {
      loc: '/products',
      changefreq: 'weekly',
      priority: 0.9, //
    },
    {
      loc: '/sustainability',
      changefreq: 'weekly',
      priority: 0.8, //
    },
    {
      loc: '/quotation',
      changefreq: 'weekly',
    },
  ],
}
