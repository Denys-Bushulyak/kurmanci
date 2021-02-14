module.exports = {
  title: 'Курманджи',
  tagline: 'Граматика языка с примерами',
  desciption: 'Граматика языка с примерами',
  url: 'https://kurmanci.online',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'kurmaci', // Usually your repo name.
  themeConfig: {
    siteMap:{
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5,
      trailingSlash: false,
    },
    googleAnalytics: {
      trackingID: 'G-6X6GBBP4NE',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: 'G-6X6GBBP4NE',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Язык курманджи',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/chapter-1/pronouns',
          activeBasePath: 'docs',
          label: 'Граматика',
          position: 'left',
        },
        {
          href: 'https://denys-bushulyak.github.io/kurmanci',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Больше',
          items: [
            {
              label: 'GitHub',
              href: 'https://denys-bushulyak.github.io/kurmanci',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anna Bushuliak. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://denys-bushulyak.github.io/kurmanci/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
