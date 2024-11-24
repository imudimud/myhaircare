import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Certifications from '../../components/trust/Certifications';
import Testimonials from '../../components/sections/Testimonials';
import Contact from '../../components/sections/Contact';

export default function TrustPage() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHelmet
        title={t('trust.seo.title')}
        description={t('trust.seo.description')}
      />
      <div className="pt-20">
        <Certifications />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
