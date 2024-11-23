import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, HeartHandshake, Star, Shield, GraduationCap, Building } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';

const achievements = [
  {
    key: 'experience',
    icon: Award
  },
  {
    key: 'patients',
    icon: Users
  },
  {
    key: 'countries',
    icon: Globe
  },
  {
    key: 'satisfaction',
    icon: Star
  }
];

const values = [
  {
    key: 'expertise',
    icon: GraduationCap
  },
  {
    key: 'trust',
    icon: Shield
  },
  {
    key: 'care',
    icon: HeartHandshake
  },
  {
    key: 'innovation',
    icon: Building
  }
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEOHelmet
        titleKey="about.meta.title"
        descriptionKey="about.meta.description"
        keywordsKey="about.meta.keywords"
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto h-full px-4 flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {t('about.hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              {t('about.hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.achievements.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.achievements.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <achievement.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(`about.achievements.items.${achievement.key}.value`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.achievements.items.${achievement.key}.label`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('about.story.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.story.content')}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('about.values.title')}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`about.values.items.${value.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.values.items.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-48 h-48 bg-gray-200 rounded-full mb-4 mx-auto">
                  {/* Add team member image here */}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {t(`about.team.members.member${member}.name`)}
                </h3>
                <p className="text-blue-600 mb-2">
                  {t(`about.team.members.member${member}.role`)}
                </p>
                <p className="text-gray-600">
                  {t(`about.team.members.member${member}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
