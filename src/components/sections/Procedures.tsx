import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';

const procedures = [
  {
    id: 'sapphire-fue',
    image: '/images/procedures/sapphire-fue.jpg',
    icon: '/icons/sapphire.svg',
  },
  {
    id: 'stem-cell',
    image: '/images/procedures/stem-cell.jpg',
    icon: '/icons/stem-cell.svg',
  },
  {
    id: 'dhi',
    image: '/images/procedures/dhi.jpg',
    icon: '/icons/dhi.svg',
  },
];

export default function Procedures() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t('procedures.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('procedures.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((procedure) => (
            <motion.div
              key={procedure.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link to={`/procedures/${procedure.id}`}>
                <div className="relative h-64">
                  <img
                    src={procedure.image}
                    alt={t(`procedures.${procedure.id}.title`)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src={procedure.icon}
                    alt=""
                    className="absolute bottom-4 right-4 w-12 h-12"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {t(`procedures.${procedure.id}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`procedures.${procedure.id}.summary`)}
                  </p>
                  <div className="mt-4 text-blue-600 font-medium">
                    {t('buttons.learnMore')} →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
