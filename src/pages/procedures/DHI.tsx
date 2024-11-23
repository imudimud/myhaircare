import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Users, Clock, Target, Sparkles } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Layout from '../../components/layout/Layout';
import { generateMedicalProcedureSchema, generateFAQSchema } from '../../utils/schemaMarkup';

const benefits = [
  {
    key: 'precision',
    icon: Target
  },
  {
    key: 'density',
    icon: Sparkles
  },
  {
    key: 'recovery',
    icon: Clock
  },
  {
    key: 'scarless',
    icon: CheckCircle2
  }
];

const steps = [
  {
    key: 'planning',
  },
  {
    key: 'extraction',
  },
  {
    key: 'implantation',
  },
  {
    key: 'recovery',
  }
];

const faqs = [
  {
    key: 'difference',
  },
  {
    key: 'healing',
  },
  {
    key: 'results',
  }
];

const DHIPage: React.FC = () => {
  const { t } = useTranslation('procedures');

  // Generate medical procedure schema
  const procedureSchema = generateMedicalProcedureSchema({
    name: t('dhi.title'),
    description: t('dhi.description'),
    benefits: t('dhi.benefits', { returnObjects: true }),
    risks: t('dhi.risks', { returnObjects: true }),
    preparation: t('dhi.preparation', { returnObjects: true }),
    recovery: t('dhi.recovery', { returnObjects: true }),
    image: '/images/procedures/dhi.jpg',
    performedBy: {
      name: 'Dr. Jane Doe',
      specialty: 'Hair Transplant Specialist',
      certifications: [
        'American Board of Hair Restoration Surgery',
        'European Society of Hair Restoration Surgery',
      ],
      image: '/images/doctors/dr-doe.jpg',
      description: 'Expert in DHI hair transplant procedures with over 15 years of experience',
    },
    cost: {
      currency: 'USD',
      value: 8500,
    },
  });

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(
    t('dhi.faq.items', { returnObjects: true }).map(faq => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: t('common:navigation.home'), url: '/' },
    { name: t('procedures:navigation.procedures'), url: '/procedures' },
    { name: t('procedures:dhi.title'), url: '/procedures/dhi-transplant' },
  ];

  return (
    <Layout heroBackground="/images/procedures/dhi-hero.jpg">
      <SEOHelmet
        titleKey="procedures:dhi.meta.title"
        descriptionKey="procedures:dhi.meta.description"
        keywordsKey="procedures:dhi.meta.keywords"
        image="/images/procedures/dhi.jpg"
        breadcrumbs={breadcrumbs}
        structuredData={[procedureSchema, faqSchema]}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-white">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('dhi.title')}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('dhi.description')}
        </motion.p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white rounded-t-3xl -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                className="flex flex-col items-center text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`dhi.benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`dhi.benefits.${benefit.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('dhi.process.title')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold ml-3">
                  {t(`dhi.process.steps.${step.key}.title`)}
                </h3>
              </div>
              <p className="text-gray-600">
                {t(`dhi.process.steps.${step.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('dhi.faq.title')}
        </h2>
        <div className="max-w-3xl mx-auto divide-y bg-white rounded-xl shadow-sm">
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.key} 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {t(`dhi.faq.items.${faq.key}.question`)}
              </h3>
              <p className="mt-2 text-gray-600">
                {t(`dhi.faq.items.${faq.key}.answer`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default DHIPage;
