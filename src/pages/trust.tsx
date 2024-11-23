import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';
import Certifications from '../components/trust/Certifications';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function TrustPage() {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t('trust.meta.title')}</title>
        <meta
          name="description"
          content={t('trust.meta.description')}
        />
      </Helmet>
      <div className="pt-20">
        <Certifications />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
