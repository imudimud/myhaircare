import React, { useState } from 'react';
import { Calendar, Phone, Stethoscope, Scissors, Heart, Activity, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

const timelineSteps = [
  {
    icon: Phone,
    key: 'initialContact'
  },
  {
    icon: Stethoscope,
    key: 'medicalEvaluation'
  },
  {
    icon: Scissors,
    key: 'procedureDay'
  },
  {
    icon: Heart,
    key: 'initialRecovery'
  },
  {
    icon: Activity,
    key: 'progressMonitoring'
  },
  {
    icon: CheckCircle,
    key: 'finalResults'
  }
];

export default function JourneyTimeline() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 100);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('patient.journey.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('patient.journey.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex-1">
                  <div
                    className={`p-6 bg-white rounded-xl shadow-sm border border-gray-100 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`patient.journey.steps.${step.key}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t(`patient.journey.steps.${step.key}.description`)}
                    </p>
                    <div className="text-sm text-blue-600 font-medium">
                      {t(`patient.journey.steps.${step.key}.duration`)}
                    </div>
                    {activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 space-y-2"
                      >
                        {t(`patient.journey.steps.${step.key}.details`, { returnObjects: true }).map(
                          (detail: string, i: number) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                              {detail}
                            </div>
                          )
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                  <step.icon className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => window.location.href = '/consultation'}
          >
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
