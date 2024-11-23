import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import SafetyStandards from '../../components/medical/SafetyStandards';
import CareProtocols from '../../components/medical/CareProtocols';
import SafetyAndRisks from '../../components/medical/SafetyAndRisks';
import ProcedureDetails from '../../components/medical/ProcedureDetails';

const medicalSections = [
  {
    key: 'requirements',
  },
  {
    key: 'contraindications',
  },
  {
    key: 'medications',
  },
  {
    key: 'precautions',
  }
];

export default function MedicalInformationPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHelmet
        titleKey="medical.meta.title"
        descriptionKey="medical.meta.description"
        keywordsKey="medical.meta.keywords"
        path="/medical"
      />

      <div className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto h-full px-4 flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t('medical.hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {t('medical.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('medical.sections.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('medical.sections.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {medicalSections.map((section) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {t(`medical.sections.items.${section.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`medical.sections.items.${section.key}.description`)}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <li key={index}>
                      {t(`medical.sections.items.${section.key}.points.${index}`)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SafetyStandards />
      <CareProtocols />
      <SafetyAndRisks />
      <ProcedureDetails />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('medical.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('medical.cta.description')}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/consultation"
              className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              {t('medical.cta.consultationButton')}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-full text-white hover:bg-blue-900"
            >
              {t('medical.cta.contactButton')}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
