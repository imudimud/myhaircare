import React from 'react';
import { motion } from 'framer-motion';
import {
  Diamond,
  CheckCircle2,
  Clock,
  Users,
  HeartPulse,
  Star,
  Shield,
  HelpCircle,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Layout from '../../components/layout/Layout';
import { generateMedicalProcedureSchema, generateFAQSchema } from '../../utils/schemaMarkup';
import { TranslationKeys } from '../../types/translationKeys';

const benefits = [
  {
    key: 'naturalResults',
    icon: Star
  },
  {
    key: 'minimalScarring',
    icon: Diamond
  },
  {
    key: 'fasterRecovery',
    icon: Clock
  },
  {
    key: 'highDensity',
    icon: CheckCircle2
  }
];

const steps = [
  {
    key: 'extraction',
  },
  {
    key: 'preparation',
  },
  {
    key: 'implantation',
  },
  {
    key: 'aftercare',
  }
];

const faqs = [
  {
    key: 'procedure',
  },
  {
    key: 'recovery',
  },
  {
    key: 'results',
  },
  {
    key: 'difference',
  }
];

const SapphireFuePage: React.FC = () => {
  const { t } = useTranslation('pages/procedures/sapphire-fue');

  // Generate medical procedure schema
  const procedureSchema = generateMedicalProcedureSchema({
    name: t('title' as TranslationKeys),
    description: t('description' as TranslationKeys),
    benefits: t('benefits' as TranslationKeys, { returnObjects: true }) as string[],
    risks: t('risks' as TranslationKeys, { returnObjects: true }) as string[],
    preparation: t('preparation' as TranslationKeys, { returnObjects: true }) as string[],
    recovery: t('recovery' as TranslationKeys, { returnObjects: true }) as string[],
    image: '/images/procedures/sapphire-fue.jpg',
    performedBy: {
      name: "Dr. John Smith",
      specialty: "Hair Transplant Surgeon",
      certifications: ["ISHRS", "ABHRS"],
      image: "/images/doctors/john-smith.jpg",
      description: "Leading expert in Sapphire FUE with over 15 years of experience."
    },
    cost: {
      currency: "USD",
      value: 4500
    }
  });

  // Generate FAQ schema
  const faqItems = t('faq.items' as TranslationKeys, { returnObjects: true });
  const faqSchema = generateFAQSchema(
    Array.isArray(faqItems) ? faqItems.map(faq => ({
      question: faq.question,
      answer: faq.answer,
    })) : []
  );

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: t('breadcrumbs.home' as TranslationKeys), url: '/' },
    { name: t('breadcrumbs.procedures' as TranslationKeys), url: '/procedures' },
    { name: t('breadcrumbs.sapphireFue' as TranslationKeys), url: '/procedures/sapphire-fue' },
  ];

  return (
    <Layout heroBackground="/images/procedures/sapphire-fue-hero.jpg">
      <SEOHelmet
        titleKey="meta.title"
        descriptionKey="meta.description"
        keywordsKey="meta.keywords"
        image="/images/procedures/sapphire-fue.jpg"
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
          {t('title' as TranslationKeys)}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('description' as TranslationKeys)}
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
                  {t(`benefits.${benefit.key}.title` as TranslationKeys)}
                </h3>
                <p className="text-gray-600">
                  {t(`benefits.${benefit.key}.description` as TranslationKeys)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('process.title' as TranslationKeys)}
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
                  {t(`process.steps.${step.key}.title` as TranslationKeys)}
                </h3>
              </div>
              <p className="text-gray-600">
                {t(`process.steps.${step.key}.description` as TranslationKeys)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('faq.title' as TranslationKeys)}
        </h2>
        <div className="max-w-3xl mx-auto divide-y">
          {faqs.map((faq) => (
            <div key={faq.key} className="py-6">
              <h3 className="text-lg font-medium text-gray-900">
                {t(`faq.items.${faq.key}.question` as TranslationKeys)}
              </h3>
              <p className="mt-2 text-gray-600">
                {t(`faq.items.${faq.key}.answer` as TranslationKeys)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SapphireFuePage;
