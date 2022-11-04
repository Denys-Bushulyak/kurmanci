module.exports = {
  title: 'Курманджи',
  tagline: 'Грамматика языка с примерами',
  url: 'https://kurmanji.online',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'kurmaci', // Usually your repo name.
  themeConfig: {
    siteMap: {
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
        alt: 'Язык курманджи',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/chapter-1/pronouns',
          activeBasePath: 'docs',
          label: 'Грамматика',
          position: 'left',
        },
        {
          to: 'docs/search',
          activeBasePath: 'pages',
          label: 'Поиск',
          position: 'right',
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
      copyright: `Copyright © ${new Date().getFullYear()} Anna Bushuliak. <br /><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Ліцензія Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Твір "<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Грамматика языка Курманджи</span>", створений <a xmlns:cc="http://creativecommons.org/ns#" href="https://denys-bushulyak.github.io/kurmanci" property="cc:attributionName" rel="cc:attributionURL">Бушуляк Анна</a>, ліцензовано на умовах <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Ліцензії Creative Commons Із Зазначенням Авторства — Некомерційна — Поширення На Тих Самих Умовах 4.0 Міжнародна</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Denys-Bushulyak/kurmanci/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
