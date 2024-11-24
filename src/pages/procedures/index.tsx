import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, CheckCircle2, Droplet, Target, Microscope, Shield, Users, HelpCircle, HeartPulse } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { SEOHelmet } from '../../components/SEOHelmet';

const procedures = [
  {
    key: 'sapphireFue',
    icon: Target,
    href: '/procedures/sapphire-fue'
  },
  {
    key: 'dhi',
    icon: Microscope,
    href: '/procedures/dhi'
  },
  {
    key: 'stemCell',
    icon: Droplet,
    href: '/procedures/stem-cell'
  }
];

const features = [
  {
    key: 'expertise',
    icon: Shield
  },
  {
    key: 'technology',
    icon: Users
  },
  {
    key: 'results',
    icon: Clock
  },
  {
    key: 'support',
    icon: HeartPulse
  }
];

const faqs = [
  {
    key: 'procedureTime'
  },
  {
    key: 'resultsTime'
  },
  {
    key: 'painLevel'
  },
  {
    key: 'recoveryTime'
  }
];

const ProceduresPage: React.FC = () => {
  const { t } = useTranslation('procedures');

  return (
    <>
      <SEOHelmet
        titleKey="meta.title"
        descriptionKey="meta.description"
        keywordsKey="meta.keywords"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
          <div className="container mx-auto h-full px-4 flex items-center">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
                >
                  {t('common:buttons.bookConsultation')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Procedures Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('types.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('types.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {procedures.map((procedure) => (
                <Link to={procedure.href} key={procedure.key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-sm cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <procedure.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(`types.${procedure.key}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`types.${procedure.key}.description`)}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('features.title')}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('faq.title')}
            </h2>
            <div className="max-w-3xl mx-auto divide-y">
              {faqs.map((faq) => (
                <div key={faq.key} className="py-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t(`faq.${faq.key}.question`)}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {t(`faq.${faq.key}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProceduresPage;
