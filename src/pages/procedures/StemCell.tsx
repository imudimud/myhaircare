import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, CheckCircle2, Clock, Microscope, Leaf, Activity, Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Layout from '../../components/layout/Layout';
import { generateMedicalProcedureSchema, generateFAQSchema } from '../../utils/schemaMarkup';

const benefits = [
  {
    key: 'naturalGrowth',
    icon: Leaf
  },
  {
    key: 'noSurgery',
    icon: CheckCircle2
  },
  {
    key: 'quickRecovery',
    icon: Clock
  },
  {
    key: 'longLasting',
    icon: Activity
  }
];

const steps = [
  {
    key: 'extraction',
  },
  {
    key: 'processing',
  },
  {
    key: 'injection',
  },
  {
    key: 'aftercare',
  }
];

const faqs = [
  {
    key: 'effectiveness',
  },
  {
    key: 'duration',
  },
  {
    key: 'sessions',
  }
];

const StemCellPage: React.FC = () => {
  const { t } = useTranslation('procedures');

  // Generate medical procedure schema
  const procedureSchema = generateMedicalProcedureSchema({
    name: t('stemCell.title'),
    description: t('stemCell.description'),
    benefits: t('stemCell.benefits', { returnObjects: true }),
    risks: t('stemCell.risks', { returnObjects: true }),
    preparation: t('stemCell.preparation', { returnObjects: true }),
    recovery: t('stemCell.recovery', { returnObjects: true }),
    image: '/images/procedures/stem-cell.jpg',
    performedBy: {
      name: 'Dr. Sarah Wilson',
      specialty: 'Regenerative Medicine Specialist',
      certifications: [
        'American Board of Hair Restoration Surgery',
        'International Society of Regenerative Medicine',
      ],
      image: '/images/doctors/dr-wilson.jpg',
      description: 'Pioneer in stem cell therapy for hair restoration',
    },
    cost: {
      currency: 'USD',
      value: 6500,
    },
  });

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(
    t('stemCell.faq.items', { returnObjects: true }).map(faq => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: t('common:navigation.home'), url: '/' },
    { name: t('procedures:navigation.procedures'), url: '/procedures' },
    { name: t('procedures:stemCell.title'), url: '/procedures/stem-cell-therapy' },
  ];

  return (
    <Layout heroBackground="/images/procedures/stem-cell-hero.jpg">
      <SEOHelmet
        titleKey="procedures:stemCell.meta.title"
        descriptionKey="procedures:stemCell.meta.description"
        keywordsKey="procedures:stemCell.meta.keywords"
        image="/images/procedures/stem-cell.jpg"
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
          {t('stemCell.title')}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('stemCell.description')}
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
                  {t(`stemCell.benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`stemCell.benefits.${benefit.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('stemCell.process.title')}
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
                  {t(`stemCell.process.steps.${step.key}.title`)}
                </h3>
              </div>
              <p className="text-gray-600">
                {t(`stemCell.process.steps.${step.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('stemCell.results.title')}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t('stemCell.results.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={`/images/procedures/stem-cell-result-${index}.jpg`}
                  alt={`Stem cell treatment result ${index}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">
                  {t(`stemCell.results.cases.${index}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`stemCell.results.cases.${index}.description`)}
                </p>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>{t(`stemCell.results.cases.${index}.time`)}</span>
                  <span>{t(`stemCell.results.cases.${index}.sessions`)} sessions</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('stemCell.science.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('stemCell.science.howItWorks.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('stemCell.science.howItWorks.description')}
              </p>
              <ul className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Microscope className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      {t(`stemCell.science.howItWorks.points.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('stemCell.science.research.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('stemCell.science.research.description')}
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                  <h4 className="font-semibold">
                    {t('stemCell.science.research.stats.title')}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {t(`stemCell.science.research.stats.${index}.value`)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t(`stemCell.science.research.stats.${index}.label`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('stemCell.cost.title')}
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t('stemCell.cost.pricing.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('stemCell.cost.pricing.description')}
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {t('stemCell.cost.pricing.value')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('stemCell.cost.pricing.note')}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t('stemCell.cost.insurance.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('stemCell.cost.insurance.description')}
                </p>
                <ul className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-600">
                        {t(`stemCell.cost.insurance.points.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('stemCell.faq.title')}
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
                {t(`stemCell.faq.items.${faq.key}.question`)}
              </h3>
              <p className="mt-2 text-gray-600">
                {t(`stemCell.faq.items.${faq.key}.answer`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default StemCellPage;
