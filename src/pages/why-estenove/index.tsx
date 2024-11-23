import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Award, Users, Star, ChevronDown, Microscope, Heart, Clock, Shield, ArrowRight, GraduationCap, Building } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import GlobalReach from '../../components/map/GlobalReach';
import { GradientSection } from '../../components/ui/GradientSection';

const stats = [
  {
    key: 'experience',
    value: '20+',
    icon: Clock
  },
  {
    key: 'successRate',
    value: '97%',
    icon: Star
  },
  {
    key: 'patients',
    value: '15,000+',
    icon: Users
  },
  {
    key: 'countries',
    value: '50+',
    icon: MapPin
  }
];

const features = [
  {
    key: 'harvard',
    icon: Shield
  },
  {
    key: 'technology',
    icon: Microscope
  },
  {
    key: 'excellence',
    icon: Award
  },
  {
    key: 'ethics',
    icon: Heart
  },
  {
    key: 'support',
    icon: Clock
  },
  {
    key: 'expertise',
    icon: Users
  }
];

const certifications = [
  {
    key: 'iso',
    icon: Shield
  },
  {
    key: 'jci',
    icon: Award
  },
  {
    key: 'harvard',
    icon: GraduationCap
  },
  {
    key: 'medical',
    icon: Building
  }
];

export default function WhyEstenovePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('whyEstenove.meta.title')}</title>
        <meta
          name="description"
          content={t('whyEstenove.meta.description')}
        />
        <meta
          name="keywords"
          content={t('whyEstenove.meta.keywords')}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto h-full px-4 flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {t('whyEstenove.hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              {t('whyEstenove.hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
              >
                {t('buttons.bookConsultation')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('whyEstenove.stats.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('whyEstenove.stats.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">
                  {t(`whyEstenove.stats.items.${stat.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('whyEstenove.features.title')}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(`whyEstenove.features.items.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`whyEstenove.features.items.${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Reach Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('whyEstenove.globalReach.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('whyEstenove.globalReach.subtitle')}
            </p>
          </div>
          <GlobalReach />
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('whyEstenove.certifications.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('whyEstenove.certifications.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <cert.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`whyEstenove.certifications.items.${cert.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`whyEstenove.certifications.items.${cert.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
