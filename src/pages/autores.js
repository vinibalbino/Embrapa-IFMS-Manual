import React from 'react';

import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';
import { users } from '../../static/js/autores';
// 
function Autores() {
  const showcase =users.map( user => (
      <div className="card">
        <div className={styles.container}> 
          <img src={user.image} alt="" />
          <p className="bold">{user.name}</p>
        </div>
        <div className={styles.cardContainer}>
          <p>{user.description}</p>         
        </div>
        <div className={styles.cardAction}>
          <a target="_blank" href={user.lattes}>Curriculo Lattes</a>
        </div>
      </div>
    ));
    
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className="mainContainer">
        <div className="showcaseSection">
          <div className="headerTitle">
            <h1>Autores da edição de 2020</h1>
          </div>
          <div className="main-container-cards" >
            {showcase}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Autores;
