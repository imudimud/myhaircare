import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';

const results = [
  {
    id: 1,
    before: '/images/results/before-1.jpg',
    after: '/images/results/after-1.jpg',
    month: 12,
  },
  {
    id: 2,
    before: '/images/results/before-2.jpg',
    after: '/images/results/after-2.jpg',
    month: 8,
  },
  {
    id: 3,
    before: '/images/results/before-3.jpg',
    after: '/images/results/after-3.jpg',
    month: 10,
  },
];

export default function Results() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t('results.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <motion.div
              key={result.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={result.before}
                      alt={t('results.beforeLabel')}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {t('results.beforeLabel')}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={result.after}
                      alt={t('results.afterLabel')}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {t('results.afterLabel')}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-center text-gray-600">
                    {t('results.monthsAfter', { count: result.month })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/patient/before-after"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            {t('buttons.viewMoreResults')}
          </Link>
        </div>
      </div>
    </section>
  );
}
