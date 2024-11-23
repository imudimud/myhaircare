import React, { useState } from 'react';
import { Calendar, Phone, Stethoscope, Scissors, Heart, Activity, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const timelineSteps = [
  {
    icon: Phone,
    title: "Initial Contact",
    description: "Schedule your free consultation and discuss your needs with our team.",
    duration: "Day 1",
    details: [
      "Online consultation booking",
      "Initial hair loss assessment",
      "Treatment options discussion",
      "Cost and timeline overview"
    ]
  },
  {
    icon: Stethoscope,
    title: "Medical Evaluation",
    description: "Comprehensive medical assessment and treatment planning.",
    duration: "Day 2-3",
    details: [
      "Medical history review",
      "Scalp examination",
      "Blood tests and analysis",
      "Treatment plan customization"
    ]
  },
  {
    icon: Scissors,
    title: "Procedure Day",
    description: "Your hair transplant procedure with our expert medical team.",
    duration: "Day 4",
    details: [
      "Pre-operative preparation",
      "Local anesthesia administration",
      "Hair transplant procedure",
      "Initial aftercare instructions"
    ]
  },
  {
    icon: Heart,
    title: "Initial Recovery",
    description: "Critical healing period with close medical supervision.",
    duration: "Days 5-7",
    details: [
      "Wound care management",
      "Sleep position guidance",
      "Activity restrictions",
      "First wash instructions"
    ]
  },
  {
    icon: Activity,
    title: "Progress Monitoring",
    description: "Regular check-ups to ensure optimal healing and growth.",
    duration: "Weeks 2-4",
    details: [
      "Healing progress assessment",
      "Gradual activity resumption",
      "Hair care routine adjustment",
      "Growth expectations discussion"
    ]
  },
  {
    icon: CheckCircle,
    title: "Final Results",
    description: "Full growth and natural-looking results achievement.",
    duration: "12-18 Months",
    details: [
      "Final results assessment",
      "Long-term care guidelines",
      "Before/after documentation",
      "Maintenance recommendations"
    ]
  }
];

export default function JourneyTimeline() {
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
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Your Hair Restoration Journey
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Understanding each step of your journey helps ensure the best possible
            outcome for your hair restoration procedure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600"
          />

          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:flex`}
              >
                {/* Animated timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg"
                />

                <div className="md:w-1/2 flex md:justify-end">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setActiveStep(index)}
                    onHoverEnd={() => setActiveStep(null)}
                    className={`bg-white rounded-xl shadow-lg p-8 md:w-96 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } transform transition-all duration-300 ${
                      activeStep === index ? 'bg-blue-50 scale-105' : ''
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-blue-100 rounded-lg"
                      >
                        <step.icon className="h-7 w-7 text-blue-600" />
                      </motion.div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-blue-900">
                          {step.title}
                        </h3>
                        <span className="text-blue-600 font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-blue-800 mb-4">{step.description}</p>
                    <motion.ul 
                      initial="hidden"
                      animate={activeStep === index ? "visible" : "hidden"}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      className="space-y-3"
                    >
                      {step.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          className="flex items-start"
                        >
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-blue-700">{detail}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
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
