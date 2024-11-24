import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

const awards = [
  {
    id: 1,
    image: '/images/awards/award-1.png',
    year: '2023',
    organization: 'International Hair Restoration Society',
  },
  {
    id: 2,
    image: '/images/awards/award-2.png',
    year: '2022',
    organization: 'European Medical Tourism Awards',
  },
  {
    id: 3,
    image: '/images/awards/award-3.png',
    year: '2021',
    organization: 'Global Healthcare Excellence',
  },
];

export default function Awards() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t('awards.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('awards.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src={award.image}
                alt={`${award.organization} ${award.year}`}
                className="h-32 mx-auto mb-4"
              />
              <div className="text-xl font-semibold mb-2">
                {t(`awards.${award.id}.title`)}
              </div>
              <div className="text-gray-600">
                {award.organization}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {award.year}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('awards.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
