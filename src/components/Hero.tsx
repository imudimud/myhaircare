import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, Shield, MessageCircle, CheckCircle2, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { preloadTranslations } from '../utils/i18n';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { t } = useTranslation(['home', 'common']);

  useEffect(() => {
    // Preload home translations when component mounts
    preloadTranslations(['home', 'common']);
  }, []);

  const features = [
    {
      icon: Shield,
      title: t('home:hero.features.expertise.title'),
      description: t('home:hero.features.expertise.description')
    },
    {
      icon: Star,
      title: t('home:hero.features.technology.title'),
      description: t('home:hero.features.technology.description')
    },
    {
      icon: Users,
      title: t('home:hero.features.ethics.title'),
      description: t('home:hero.features.ethics.description')
    },
    {
      icon: Award,
      title: t('home:hero.features.results.title'),
      description: t('home:hero.features.results.description')
    }
  ];

  useEffect(() => {
    const img = new Image();
    img.src = t('home:hero.backgroundImage');
    img.onload = () => setImageLoaded(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${t('home:hero.backgroundImage')})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          {t('home:hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          {t('home:hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/consultation"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold"
          >
            {t('common:buttons.bookConsultation')} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/10 rounded-lg p-6"
            >
              <feature.icon className="w-8 h-8 mb-4 mx-auto text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-white flex flex-col items-center"
          >
            <span className="text-sm mb-2">{t('common:buttons.scrollDown')}</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}