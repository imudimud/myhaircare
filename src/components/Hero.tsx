import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, Shield, MessageCircle, CheckCircle2, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

interface Feature {
  key: string;
  icon: React.FC<{ className?: string }>;
}

interface HeroProps {
  variant?: 'video' | 'image';
  backgroundImage?: string;
  videoSrc?: string;
  showFeatures?: boolean;
  showScrollIndicator?: boolean;
  showCTA?: boolean;
  customContent?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}

const defaultFeatures: Feature[] = [
  { key: 'expertise', icon: Shield },
  { key: 'technology', icon: Star },
  { key: 'ethics', icon: Users },
  { key: 'results', icon: Award }
];

export default function Hero({
  variant = 'image',
  backgroundImage,
  videoSrc = '/videos/hero-background.mp4',
  showFeatures = true,
  showScrollIndicator = true,
  showCTA = true,
  customContent,
  className = '',
  overlayClassName = ''
}: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t, currentLanguage } = useTranslation('home');

  useEffect(() => {
    if (variant === 'image' && backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setImageLoaded(true);
    }
  }, [variant, backgroundImage, currentLanguage]);

  const renderBackground = () => {
    if (variant === 'video') {
      return (
        <>
          <div className={`absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10 ${overlayClassName}`} />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </>
      );
    }

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10 ${overlayClassName}`} />
          <img
            src={backgroundImage || t('hero.backgroundImage')}
            alt=""
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {renderBackground()}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 text-center text-white">
        {customContent ? (
          customContent
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            {showCTA && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {t('buttons.bookConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-lg font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {t('buttons.contactUs')}
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Link>
              </div>
            )}

            {showFeatures && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {defaultFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * (index + 1) }}
                    className="text-center"
                  >
                    <feature.icon className="h-12 w-12 mx-auto text-blue-400" />
                    <h3 className="mt-4 text-xl font-semibold">
                      {t(`hero.features.${feature.key}.title`)}
                    </h3>
                    <p className="mt-2 text-gray-300">
                      {t(`hero.features.${feature.key}.description`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="text-white flex flex-col items-center"
            >
              <span className="text-sm mb-2">{t('buttons.scrollDown')}</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}