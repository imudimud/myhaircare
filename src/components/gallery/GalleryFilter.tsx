import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface GalleryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: {
    [key: string]: string;
  };
}

export default function GalleryFilter({
  selectedCategory,
  onCategoryChange,
  categories
}: GalleryFilterProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8" role="tablist">
      {Object.entries(categories).map(([key, label]) => (
        <motion.button
          key={key}
          onClick={() => onCategoryChange(key)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === key
              ? 'bg-gold-400 text-navy-900 shadow-lg'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          role="tab"
          aria-selected={selectedCategory === key}
          aria-controls={`gallery-${key}`}
          id={`tab-${key}`}
        >
          {t(`gallery.categories.${key.toLowerCase()}`)}
        </motion.button>
      ))}
    </div>
  );
}
