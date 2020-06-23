import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Introduction() {
  return (
    <div className="introduction paddingTop paddingBottom">
      <div className=" container title">
        <h1>Apresentação</h1>
        <span className="itm">
          Você sabia que boa parte das publicações das Minibibliotecas da
          Embrapa estão disponíveis em{' '}
          <span className="bold">formato digital?</span>
        </span>
        <p>
          Conheça a 4<sup>a</sup> Edição revista e atualizada do Manual de Bolso{' '}
          <span className="bold">Tecnologias para a Agricultura Familiar.</span>
        </p>
      </div>

      <div className="text-container">
        <div className="text">
          <p>
            Em 2014, a Embrapa lançou a publicação “Tecnologias para a
            Agricultura Familiar”, a qual reuniu diversas tecnologias voltadas
            ao agricultor familiar, em um formato simples e objetivo. Os
            capítulos continham informações básicas, mas também apresentavam
            sugestões bibliográficas e links de acesso, onde o leitor poderia se
            aprofundar nos temas de interesse.
          </p>
          <p>
            O sucesso da publicação foi tal que, de lá para cá, em função de
            demandas, foram realizadas revisões com incrementos de tecnologias.
            Esta quarta edição, além de ter sido revisada, ampliada e editada em
            forma de e-book, também está disponível por meio de aplicativo,
            fruto de uma parceria com o Instituto Federal de Mato Grosso do Sul
            (IFMS) – Campus de Dourados, o qual, depois de instalado, trabalha
            offline. Assim, informações mais detalhadas poderão ser facilmente
            acessadas por meio dos links disponibilizados pelos autores no final
            de cada capítulo. Aideia é conectar o produtor ao cenário de
            inovação tecnológica, para expandir a disseminação da informação e
            do acesso ao conhecimento.
          </p>
          <p>
            A Embrapa está constantemente trabalhando para viabilizar soluções
            de pesquisa, desenvolvimento e inovação para a sustentabilidade da
            agricultura, em benefício da sociedade brasileira. Entregamos esta
            publicação, junto com nossos parceiros, especialmente para os
            produtores familiares, buscando propiciar cada vez mais o acesso a
            essas soluções, de forma que elas sejam propulsoras de uma
            agricultura pujante, forte e cheia de oportunidades.
          </p>
        </div>

        <div className="autor">
          <img src="./img/harley.png" alt="Foto do Harley" />
          <p className="name">Harley Nonato de Oliveira</p>
          <p className="cargo">Chefe Geral</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            Tecnologias para a
            <p className="second-section-title">Agricultura Familiar</p>
          </h1>
          <p className="hero__subtitle">
            4<sup>a</sup> edição revista e atualizada
          </p>
        </div>
        <div className="button-hero-action">
          <a
            className="button-hero"
            href="/docs/integracao-lavoura-pecuaria-floresta"
          >
            Acessar edição completa
          </a>
        </div>
      </header>
      <main>
        <div className="introductionContainer">
          <Introduction />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
