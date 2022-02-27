import { Fragment } from 'react';

import Head from 'next/head';

import HeaderSection from '../components/layout/HeaderSection';
import AboutSection from '../components/layout/AboutSection';
import SkillsSection from '../components/layout/SkillsSection';
import ProjectsSection from '../components/layout/ProjectsSection';
import MotivationalSection from '../components/layout/MotivationalSection';
import ServicesSection from '../components/layout/ServicesSection';
import GuaranteeSection from '../components/layout/GuaranteeSection';
import FooterSection from '../components/layout/FooterSection';

import classes from './index.module.css';

const metaData = {
  title: 'Desenvolvedor Frontend - Fábio Guedes',
  description:
    'Olá, meu nome é Fábio Guedes e sou um Desenvolvedor Frontend. Clique para conhecer meu trabalho e também alguns serviços que ofereço',
  url: 'https://fabioguedes.com/',
  image: '/desenvolvedor-frontend-banner.jpg',
};

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <meta name='theme-color' content='#ffffff' />
        {/* Primary Meta Tags */}
        <title>{metaData.title}</title>
        <meta name='title' content={metaData.title} />
        <meta name='description' content={metaData.description} />
        <meta
          name='keywords'
          content='portfolio, dev, frontend, desenvolvedor, desenvolvimento'
        />
        <meta name='author' content='Fabio Guedes' />
        <meta name='copyright' content='© 2022 Fabio Guedes' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={metaData.url} />
        <meta property='og:title' content={metaData.title} />
        <meta property='og:description' content={metaData.description} />
        <meta property='og:image' content={metaData.image} />

        {/* Twitter  */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={metaData.url} />
        <meta property='twitter:title' content={metaData.title} />
        <meta property='twitter:description' content={metaData.description} />
        <meta property='twitter:image' content={metaData.image} />
      </Head>

      <div className={classes['full-card']}>
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <MotivationalSection />
        <ServicesSection />
        <GuaranteeSection />
        <FooterSection />
      </div>
    </Fragment>
  );
};

export default HomePage;
