import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Testimonials from '../../components/Testimonials';

export default function PatientTestimonials() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHelmet
        titleKey="patient.testimonials.meta.title"
        descriptionKey="patient.testimonials.meta.description"
        keywordsKey="patient.testimonials.meta.keywords"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            {t('patient.testimonials.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('patient.testimonials.subtitle')}
          </motion.p>
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
