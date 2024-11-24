import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Hero from '../../components/Hero';
import Procedures from '../../components/sections/Procedures';
import Results from '../../components/sections/Results';
import Awards from '../../components/sections/Awards';
import Contact from '../../components/sections/Contact';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHelmet
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />
      <div className="flex flex-col">
        <Hero variant="video" />
        <Procedures />
        <Results />
        <Awards />
        <Contact />
      </div>
    </>
  );
}
