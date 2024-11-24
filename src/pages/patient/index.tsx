import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import JourneyTimeline from '../../components/patient/JourneyTimeline';
import PreparationGuide from '../../components/patient/PreparationGuide';
import RecoveryGuide from '../../components/patient/RecoveryGuide';
import { Link } from 'react-router-dom';
import { SEOHelmet } from '../../components/SEOHelmet';

const resources = [
  {
    key: 'preOperation',
  },
  {
    key: 'postOperation',
  },
  {
    key: 'medications',
  },
  {
    key: 'lifestyle',
  }
];

const PatientResourcesPage: React.FC = () => {
  const { t } = useTranslation('patient');

  return (
    <>
      <SEOHelmet
        titleKey="patient.meta.title"
        descriptionKey="patient.meta.description"
        keywordsKey="patient.meta.keywords"
      />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
          <div className="container mx-auto h-full px-4 flex items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {t('patient.hero.title')}
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  {t('patient.hero.subtitle')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <JourneyTimeline />
        <PreparationGuide />
        <RecoveryGuide />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('patient.resources.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('patient.resources.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <motion.div
                  key={resource.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold ml-2">
                      {t(`patient.resources.items.${resource.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t(`patient.resources.items.${resource.key}.description`)}
                  </p>
                  <Link
                    to={t(`patient.resources.items.${resource.key}.downloadUrl`)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    {t('patient.resources.downloadLabel')}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('patient.support.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('patient.support.description')}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
              >
                {t('patient.support.consultationButton')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-full text-white hover:bg-blue-900"
              >
                {t('patient.support.contactButton')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PatientResourcesPage;
