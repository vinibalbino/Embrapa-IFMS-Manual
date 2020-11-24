import React from 'react';

import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ServiceWorker from '../components/ServiceWorker';
import Head from '@docusaurus/Head';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <ServiceWorker />

      <Head>
        <meta property="og:description" content="Embrapa" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#218c74" />
        <link rel="canonical" href="https://www.cpao.embrapa.br/cartilha/" />
        <link rel="manifest" href="/manifest.json"></link>
        <title>Embrapa</title>

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Embrapa" />
        <link rel="icon" sizes="192x192" href="img/1x/logo-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#218c74" />
        <meta name="apple-mobile-web-app-title" content="Embrapa" />
        <link rel="apple-touch-icon" href="img/1x/logo-256x256.png" />
        <meta name="msapplication-TileColor" content="#218c74" />
        <meta name="msapplication-TileImage" content="%PUBLIC_URL%./img/1x/logo-192x192.png" />
      </Head>

      <main>
        <div className="hero">
          <div className="mensagem">
            <h1>Tecnologias para a Agricultura Familiar</h1>
            <p>
              4<sup>a</sup> Edição revista e atualizada
            </p>
          </div>

          <a href="docs/integracao-lavoura-pecuaria-floresta" className="btn">
            Acessar edição completa
          </a>
        </div>

        <div className="apresentacao">
          <div className="titulo">
            <h1>Apresentação</h1>
            <p>
              Você sabia que boa parte das publicações das Minibibliotecas da
              Embrapa estão disponíveis em formato digital? Conheça a 4a Edição
              revista e atualizada do Manual de Bolso Tecnologias para a
              Agricultura Familiar.
            </p>
          </div>

          <div className="texto-container">
            <div className="texto">
              <p>
                Em 2014, a Embrapa lançou a publicação “Tecnologias para a
                Agricultura Familiar”, a qual reuniu diversas tecnologias
                voltadas ao agricultor familiar, em um formato simples e
                objetivo. Os capítulos continham informações básicas, mas também
                apresentavam sugestões bibliográficas e links de acesso, onde o
                leitor poderia se aprofundar nos temas de interesse.
              </p>
              <p>
                O sucesso da publicação foi tal que, de lá para cá, em função de
                demandas, foram realizadas revisões com incrementos de
                tecnologias. Esta quarta edição, além de ter sido revisada,
                ampliada e editada em forma de e-book, também está disponível
                por meio de aplicativo, fruto de uma parceria com o Instituto
                Federal de Mato Grosso do Sul (IFMS) – Campus de Dourados, o
                qual, depois de instalado, trabalha offline. Assim, informações
                mais detalhadas poderão ser facilmente acessadas por meio dos
                links disponibilizados pelos autores no final de cada capítulo.
                Aideia é conectar o produtor ao cenário de inovação tecnológica,
                para expandir a disseminação da informação e do acesso ao
                conhecimento.
              </p>
              <p>
                A Embrapa está constantemente trabalhando para viabilizar
                soluções de pesquisa, desenvolvimento e inovação para a
                sustentabilidade da agricultura, em benefício da sociedade
                brasileira. Entregamos esta publicação, junto com nossos
                parceiros, especialmente para os produtores familiares, buscando
                propiciar cada vez mais o acesso a essas soluções, de forma que
                elas sejam propulsoras de uma agricultura pujante, forte e cheia
                de oportunidades.
              </p>
            </div>

            <div className="autor">
              <img src="img/harley.png" alt="Foto do Harley" />
              <p className="nome">Harley Nonato de Oliveira</p>
              <p className="cargo">Chefe Geral</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
