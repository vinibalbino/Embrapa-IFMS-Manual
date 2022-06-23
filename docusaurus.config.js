const path = require('path');

module.exports = {
  title: 'Embrapa',
  tagline: 'Agropecuaria Oeste',
  url: 'https://www.cpao.embrapa.br/tecnofamapp',
  //Desenvolvimento
  baseUrl: '/cartilha/',
  //Produção
  favicon: '/cartilha/logo.svg',
  organizationName: 'IFMS - campus Dourados / Embrapa', // Usually your GitHub org/user name.
  projectName: 'Tecnologias para a Agricultura Familiar Digital', // Usually your repo name.
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt'],
  },
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        reloadPopup: '@theme/PwaReloadPopup',
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/cartilha/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/cartilha/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ]
  ],
  themeConfig: {
    colorMode:{
      disableSwitch: true,
      defaultMode: 'light'
    },
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt:
          'logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Edição Completa',
          position: 'right',
        },
        { to: '/autores', label: 'Autores', position: 'right' },
      ],
    },
    footer: {
      links: [{}],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/vinibalbino/Embrapa-IFMS-Manual',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/vinibalbino/Embrapa-IFMS-Manual',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
