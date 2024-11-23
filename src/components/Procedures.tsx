import React, { useState, useEffect } from 'react';
import { Sparkles, Leaf, Droplet, Activity, Check, ArrowRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Procedure {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  details: {
    duration: string;
    recovery: string;
    results: string;
    technique: string;
  };
}

const procedures: Procedure[] = [
  {
    icon: <Sparkles />,
    title: "Sapphire FUE",
    description: "Advanced follicular extraction using precision sapphire blades for minimal scarring and faster healing.",
    features: [
      "No linear scarring",
      "Quick recovery",
      "Natural hairline",
      "Maximum density",
      "Minimal trauma",
      "Faster healing"
    ],
    benefits: [
      "Precision extraction and implantation",
      "Minimal tissue damage",
      "Natural-looking results",
      "Faster recovery time",
      "No visible scarring",
      "Permanent results"
    ],
    image: "/images/sapphire-fue.jpg",
    details: {
      duration: "6-8 hours",
      recovery: "7-10 days",
      results: "12-18 months",
      technique: "Sapphire blade technology"
    }
  },
  {
    icon: <Leaf />,
    title: "DHI Technique",
    description: "Direct hair implantation with specialized tools for maximum density and natural growth direction.",
    features: [
      "Maximum density",
      "Custom angle control",
      "Minimal trauma",
      "No shaving required",
      "Precise placement",
      "Natural direction"
    ],
    benefits: [
      "Higher density possible",
      "More natural appearance",
      "Minimal downtime",
      "No visible scarring",
      "Custom hairline design",
      "Long-lasting results"
    ],
    image: "/images/dhi-technique.jpg",
    details: {
      duration: "6-8 hours",
      recovery: "7-10 days",
      results: "12-18 months",
      technique: "Choi implanter pen"
    }
  },
  {
    icon: <Droplet />,
    title: "Stem Cell Therapy",
    description: "Revolutionary stem cell treatment to enhance growth and strengthen existing hair follicles.",
    features: [
      "Natural healing",
      "Enhanced growth",
      "Combined treatment",
      "No surgery needed",
      "Progressive results",
      "Strengthens existing hair"
    ],
    benefits: [
      "Stimulates natural growth",
      "Strengthens existing hair",
      "Non-surgical solution",
      "No downtime",
      "Progressive improvement",
      "Long-term benefits"
    ],
    image: "/images/stem-cell.jpg",
    details: {
      duration: "1-2 hours",
      recovery: "None",
      results: "3-6 months",
      technique: "PRP with stem cells"
    }
  }
];

export default function Procedures() {
  const { t } = useTranslation();
  const [selectedProcedure, setSelectedProcedure] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedProcedure(index);
      setShowDetails(false);
    }
  };

  useEffect(() => {
    setImageLoaded(false);
  }, [selectedProcedure]);

  return (
    <section id="procedures" className="bg-white" aria-label="Hair Transplant Procedures">
      <div className="bg-blue-600 py-20 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('procedures.title')}</h2>
            <p className="text-blue-100">
              {t('procedures.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6" role="tablist" aria-label="Procedure options">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <button
                  onClick={() => {
                    setSelectedProcedure(index);
                    setShowDetails(false);
                  }}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  role="tab"
                  aria-selected={selectedProcedure === index}
                  aria-controls={`procedure-panel-${index}`}
                  id={`procedure-tab-${index}`}
                  tabIndex={selectedProcedure === index ? 0 : -1}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${
                    selectedProcedure === index
                      ? 'bg-white shadow-lg border-l-4 border-blue-600'
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`p-3 rounded-xl ${
                        selectedProcedure === index ? 'bg-blue-600' : 'bg-gray-100'
                      }`}
                      aria-hidden="true"
                    >
                      {React.cloneElement(procedure.icon as React.ReactElement, {
                        className: `w-6 h-6 ${selectedProcedure === index ? 'text-white' : 'text-gray-600'}`
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">
                        {procedure.title}
                      </h3>
                      <p className="text-gray-600">{procedure.description}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24"
            role="tabpanel"
            id={`procedure-panel-${selectedProcedure}`}
            aria-labelledby={`procedure-tab-${selectedProcedure}`}
          >
            <div className="relative h-64">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={procedures[selectedProcedure].image}
                alt={`${procedures[selectedProcedure].title} procedure visualization`}
                className={`w-full h-64 object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {procedures[selectedProcedure].title}
                  </h3>
                  <p className="text-gray-600">
                    {procedures[selectedProcedure].description}
                  </p>
                </div>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  aria-expanded={showDetails}
                  aria-controls="procedure-details"
                  className={`p-2 rounded-full transition-transform ${
                    showDetails ? 'bg-gray-100 rotate-45' : 'bg-gray-50'
                  }`}
                  aria-label={showDetails ? "Hide procedure details" : "Show procedure details"}
                >
                  <Plus className="w-6 h-6 text-navy-900" aria-hidden="true" />
                </button>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    id="procedure-details"
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4" role="list" aria-label="Procedure details">
                      <div className="bg-gray-50 p-4 rounded-xl" role="listitem">
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-semibold text-navy-900">
                          {procedures[selectedProcedure].details.duration}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl" role="listitem">
                        <p className="text-sm text-gray-500 mb-1">Recovery</p>
                        <p className="font-semibold text-navy-900">
                          {procedures[selectedProcedure].details.recovery}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl" role="listitem">
                        <p className="text-sm text-gray-500 mb-1">Results</p>
                        <p className="font-semibold text-navy-900">
                          {procedures[selectedProcedure].details.results}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl" role="listitem">
                        <p className="text-sm text-gray-500 mb-1">Technique</p>
                        <p className="font-semibold text-navy-900">
                          {procedures[selectedProcedure].details.technique}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">{t('procedures.benefits')}</h4>
                      <ul className="grid grid-cols-1 gap-2" role="list">
                        {procedures[selectedProcedure].benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2" role="listitem">
                            <Check className="w-5 h-5 text-blue-600" aria-hidden="true" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex justify-between items-center">
                <button 
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2"
                  aria-label={`Learn more about ${procedures[selectedProcedure].title}`}
                >
                  {t('buttons.learnMore')} <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <a
                  href="#consultation"
                  className="bg-navy-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-navy-800 transition-colors"
                  aria-label="Book a consultation appointment"
                >
                  {t('buttons.bookConsultation')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}