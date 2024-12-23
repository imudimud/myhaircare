import React from 'react';
import BeforeAfterGallery from '../../components/gallery/BeforeAfterGallery';
import { motion } from 'framer-motion';
import { SEOHelmet } from '../../components/SEOHelmet';
import SchemaMarkup from '../../components/seo/SchemaMarkup';
import { generateLocalBusinessSchema } from '../../utils/structuredData';
import { useTranslation } from 'react-i18next';

export default function GalleryPage() {
  const { t } = useTranslation();
  const businessSchema = generateLocalBusinessSchema({
    name: "Estenove Hair Clinic",
    description: t('gallery.meta.description'),
    image: "https://estenove.com/images/clinic-exterior.jpg",
    telephone: "+90 XXX XXX XXXX",
    address: {
      streetAddress: "Your Clinic Address",
      addressLocality: "Istanbul",
      addressRegion: "Istanbul",
      postalCode: "XXXXX",
      addressCountry: "Turkey"
    },
    geo: {
      latitude: 41.0082,
      longitude: 28.9784
    },
    openingHours: [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00"
    ],
  });

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <SEOHelmet
        titleKey="gallery.meta.title"
        descriptionKey="gallery.meta.description"
        keywordsKey="gallery.meta.keywords"
        path="/gallery"
      />
      <SchemaMarkup data={businessSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t('gallery.title', 'Before & After Gallery')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            {t('gallery.subtitle', 'Real Results from Real Patients')}
          </motion.p>
        </div>

        <BeforeAfterGallery />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('gallery.callToAction.title', 'Ready to Start Your Transformation?')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('gallery.callToAction.text', 'Book a free consultation with our expert medical team to discuss your options.')}
          </p>
          <a
            href="/consultation"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {t('gallery.callToAction.button', 'Book Free Consultation')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
