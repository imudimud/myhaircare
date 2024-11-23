import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, Globe, Calendar, Clock } from 'lucide-react';

const resources = [
  {
    title: 'Hair Transplant Guide',
    description: 'Comprehensive guide about different hair transplant techniques',
    icon: BookOpen,
    type: 'PDF Guide',
    language: 'Available in 9 languages',
  },
  {
    title: 'Pre-Operation Instructions',
    description: 'Essential preparation steps before your procedure',
    icon: FileText,
    type: 'Instructions',
    language: 'Available in 9 languages',
  },
  {
    title: 'Recovery Process',
    description: 'What to expect during the recovery period',
    icon: Video,
    type: 'Video Guide',
    language: 'Subtitles in 9 languages',
  },
  {
    title: 'Post-Care Manual',
    description: 'Complete guide for post-operation care and maintenance',
    icon: Download,
    type: 'PDF Guide',
    language: 'Available in 9 languages',
  },
];

const articles = [
  {
    title: 'Latest Advancements in Hair Transplantation',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Research',
  },
  {
    title: 'Understanding Hair Loss: Causes and Solutions',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Education',
  },
  {
    title: 'The Role of Stem Cell Therapy in Hair Restoration',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Treatment',
  },
];

export default function EducationalCenter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Educational Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Explore our comprehensive library of resources and stay informed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <resource.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex flex-col space-y-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  {resource.type}
                </span>
                <span className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  {resource.language}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2" />
                  {article.readTime}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {article.category}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
