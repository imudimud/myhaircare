import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, Shield, MessageCircle, CheckCircle2, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const backgroundImage = '/images/hospital.jpg';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('hero.features.expertise.title'),
      description: t('hero.features.expertise.description')
    },
    {
      icon: Star,
      title: t('hero.features.technology.title'),
      description: t('hero.features.technology.description')
    },
    {
      icon: Users,
      title: t('hero.features.ethics.title'),
      description: t('hero.features.ethics.description')
    },
    {
      icon: Award,
      title: t('hero.features.results.title'),
      description: t('hero.features.results.description')
    }
  ];

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('features-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-navy-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={backgroundImage}
            alt="Hospital background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/70" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-navy-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              {t('hero.cta')} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              {React.createElement(feature.icon, {
                className: "w-10 h-10 text-gold-400 mb-4"
              })}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Down Button */}
        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm font-medium">{t('buttons.scrollDown')}</span>
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}