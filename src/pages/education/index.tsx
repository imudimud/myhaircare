import React from 'react';
import { Helmet } from 'react-helmet-async';
import EducationalCenter from '../../components/education/EducationalCenter';
import { motion } from 'framer-motion';
import { BookOpen, Video, Download, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Guides',
    description: 'Access detailed guides about hair transplant procedures and aftercare',
  },
  {
    icon: Video,
    title: 'Video Resources',
    description: 'Watch informative videos about procedures and recovery process',
  },
  {
    icon: Download,
    title: 'Downloadable Materials',
    description: 'Get access to preparation guides and post-operation instructions',
  },
  {
    icon: MessageCircle,
    title: 'Expert Insights',
    description: 'Read articles and insights from our experienced medical team',
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <Helmet>
        <title>Educational Resources - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Access our comprehensive library of educational resources about hair transplantation. Learn about procedures, recovery, and aftercare at Estenove Hair Clinic."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Educational Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Empowering you with knowledge for informed decisions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <EducationalCenter />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our medical team is here to help. Schedule a free consultation to discuss your specific case.
          </p>
          <a
            href="/consultation"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
}
