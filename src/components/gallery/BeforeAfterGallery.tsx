import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ImageComparison from './ImageComparison';
import GalleryFilter from './GalleryFilter';

interface Result {
  id: number;
  patientAge: number;
  procedureType: string;
  category: string;
  grafts: number;
  monthsAfter: number;
  beforeImage: string;
  afterImage: string;
  description: string;
  details: string;
}

type ResultModalProps = {
  result: Result;
  onClose: () => void;
};

function ResultModal({ result, onClose }: ResultModalProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-navy-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-navy-900">{t('gallery.before')}</h4>
            <img
              src={result.beforeImage}
              alt={t('gallery.beforeAlt', { procedure: result.procedureType })}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-navy-900">{t('gallery.after')}</h4>
            <img
              src={result.afterImage}
              alt={t('gallery.afterAlt', { procedure: result.procedureType })}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('gallery.patientDetails')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">{t('gallery.details.age')}</p>
              <p className="font-semibold text-navy-900">{result.patientAge} {t('gallery.years')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t('gallery.details.procedure')}</p>
              <p className="font-semibold text-navy-900">{t(`procedures.types.${result.category.toLowerCase()}`)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t('gallery.details.grafts')}</p>
              <p className="font-semibold text-navy-900">{result.grafts} {t('gallery.grafts')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t('gallery.details.monthsAfter')}</p>
              <p className="font-semibold text-navy-900">{result.monthsAfter} {t('gallery.months')}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">{t('gallery.details.description')}</p>
            <p className="mt-1 text-navy-900">{result.description}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">{t('gallery.details.additionalInfo')}</p>
            <p className="mt-1 text-navy-900">{result.details}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BeforeAfterGallery() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);

  const categories = {
    All: t('gallery.categories.all'),
    FUE: t('gallery.categories.fue'),
    DHI: t('gallery.categories.dhi'),
    Combined: t('gallery.categories.combined'),
  };

  const results: Result[] = [
    {
      id: 1,
      patientAge: 35,
      procedureType: t('procedures.types.fue'),
      category: 'FUE',
      grafts: 4400,
      monthsAfter: 12,
      beforeImage: "https://www.estenove.com/wp-content/uploads/2024/02/man-fue-4400-grafts-hair-transplant-before-and-after.jpg",
      afterImage: "https://www.estenove.com/wp-content/uploads/2024/02/man-4200-grafts-hair-transplant-before-and-after.jpg",
      description: t('gallery.results.fue1.description'),
      details: t('gallery.results.fue1.details')
    },
    {
      id: 2,
      patientAge: 42,
      procedureType: t('procedures.types.dhi'),
      category: 'DHI',
      grafts: 4000,
      monthsAfter: 10,
      beforeImage: "https://www.estenove.com/wp-content/uploads/2024/02/man-fue-4000-grafts-hair-transplant-before-and-after.jpg",
      afterImage: "https://www.estenove.com/wp-content/uploads/2024/02/man-3700-graft-dhi-hair-transplant-before-after.jpg",
      description: t('gallery.results.dhi1.description'),
      details: t('gallery.results.dhi1.details')
    },
    {
      id: 3,
      patientAge: 38,
      procedureType: t('procedures.types.combined'),
      category: 'Combined',
      grafts: 3500,
      monthsAfter: 14,
      beforeImage: "https://www.estenove.com/wp-content/uploads/2024/02/dhi-3500-grafts-before-after.jpg",
      afterImage: "https://www.estenove.com/wp-content/uploads/2024/03/beforeafterhairtransplant3.jpg",
      description: t('gallery.results.combined1.description'),
      details: t('gallery.results.combined1.details')
    }
  ];

  const filteredResults = useMemo(() => {
    if (selectedCategory === 'All') return results;
    return results.filter(result => result.category === selectedCategory);
  }, [selectedCategory, results]);

  return (
    <div className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            {t('gallery.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
        </div>

        <GalleryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <ImageComparison
                beforeImage={result.beforeImage}
                afterImage={result.afterImage}
                beforeLabel={t('gallery.before')}
                afterLabel={t('gallery.after')}
                beforeAlt={t('gallery.beforeAlt', { procedure: result.procedureType })}
                afterAlt={t('gallery.afterAlt', { procedure: result.procedureType })}
                category={result.category}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedResult(result)}
                className="absolute bottom-4 right-4 bg-navy-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ZoomIn className="w-4 h-4" />
                {t('buttons.viewDetails')}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedResult && (
            <ResultModal
              result={selectedResult}
              onClose={() => setSelectedResult(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
