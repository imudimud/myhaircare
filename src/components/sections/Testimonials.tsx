import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

const testimonials = [
  {
    id: 'john-smith',
    name: 'John Smith',
    location: 'London, UK',
    image: '/images/testimonials/john-smith.jpg',
    rating: 5,
    procedureType: 'sapphire-fue',
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    location: 'Madrid, Spain',
    image: '/images/testimonials/maria-garcia.jpg',
    rating: 5,
    procedureType: 'dhi',
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    location: 'Singapore',
    image: '/images/testimonials/david-chen.jpg',
    rating: 5,
    procedureType: 'stem-cell',
  },
];

export default function Testimonials() {
  const { t } = useTranslation();

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t('testimonials.section.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.section.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-600">
                  {t(`testimonials.reviews.${testimonial.id}.content`)}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  {t(`procedures.${testimonial.procedureType}.title`)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {t('buttons.startJourney')}
          </a>
        </div>
      </div>
    </section>
  );
}
