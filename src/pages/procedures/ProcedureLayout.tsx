import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

interface ProcedureLayoutProps {
  namespace: string;
  title: string;
  description: string;
  benefits: Array<{
    key: string;
    icon: React.ElementType;
  }>;
  steps: Array<{
    key: string;
  }>;
  faqs: Array<{
    key: string;
  }>;
  children?: React.ReactNode;
}

export default function ProcedureLayout({
  namespace,
  title,
  description,
  benefits,
  steps,
  faqs,
  children
}: ProcedureLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl text-blue-100">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t(`${namespace}.benefits.title`)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`${namespace}.benefits.${benefit.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`${namespace}.benefits.${benefit.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t(`${namespace}.steps.title`)}
          </h2>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`${namespace}.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`${namespace}.steps.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Content */}
      {children}

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t(`${namespace}.faqs.title`)}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {t(`${namespace}.faqs.${faq.key}.question`)}
                </h3>
                <p className="text-gray-600">
                  {t(`${namespace}.faqs.${faq.key}.answer`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
