const path = require('path');

module.exports = {
  title: 'Embrapa',
  tagline: 'Agropecuaria Oeste',
  //Desenvolvimento
  //url: 'https://www.cpao.embrapa.br/cartilha/',
  //baseUrl: '/',
  //Produção
  url: 'https://www.cpao.embrapa.br/cartilha/',
  baseUrl: 'https://www.cpao.embrapa.br/cartilha/',
  favicon: 'img/logo.svg',
  organizationName: 'IFMS - campus Dourados / Embrapa', // Usually your GitHub org/user name.
  projectName: 'Tecnologias para a Agricultura Familiar Digital', // Usually your repo name.
  plugins: [path.resolve(__dirname, './node_modules/docusaurus-lunr-search/')],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt:
          'logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/integracao-lavoura-pecuaria-floresta',
          label: 'Revista Completa',
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
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
