import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Video } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import ConsultationForm from '../../components/consultation/ConsultationForm';

const consultationTypes = [
  {
    key: 'inPerson',
    icon: Calendar,
  },
  {
    key: 'video',
    icon: Video,
  },
  {
    key: 'chat',
    icon: MessageCircle,
  },
];

export default function ConsultationPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHelmet
        titleKey="consultation.meta.title"
        descriptionKey="consultation.meta.description"
        keywordsKey="consultation.meta.keywords"
        path="/consultation"
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
                {t('consultation.hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {t('consultation.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('consultation.types.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('consultation.types.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {consultationTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold ml-2">
                      {t(`consultation.types.items.${type.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t(`consultation.types.items.${type.key}.description`)}
                  </p>
                  <button
                    onClick={() => {}}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t('consultation.types.bookButton')}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationForm />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('consultation.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('consultation.cta.description')}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-full text-white hover:bg-blue-900"
            >
              {t('consultation.cta.contactButton')}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
