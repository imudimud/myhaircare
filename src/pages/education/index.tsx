import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { EducationalCenter } from '../../components/education/EducationalCenter';
import { BookOpen, Video, Download, MessageCircle } from 'lucide-react';
import { SEOHelmet } from '../../components/SEOHelmet';

const features = [
  {
    key: 'research',
    icon: BookOpen,
  },
  {
    key: 'techniques',
    icon: Video,
  },
  {
    key: 'guidance',
    icon: Download,
  },
  {
    key: 'resources',
    icon: MessageCircle,
  }
];

export default function EducationPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEOHelmet
        titleKey="education.meta.title"
        descriptionKey="education.meta.description"
        keywordsKey="education.meta.keywords"
      />
      <div className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl"
            >
              {t('education.hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {t('education.hero.subtitle')}
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold ml-3">
                    {t(`education.features.${feature.key}.title`)}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {t(`education.features.${feature.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Educational Center Component */}
          <EducationalCenter />
        </div>
      </div>
    </div>
  );
}
