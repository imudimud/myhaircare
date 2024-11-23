import React from 'react';
import { Helmet } from 'react-helmet-async';
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

const benefits = [
  {
    title: 'Natural-Looking Results',
    description: 'Achieve seamless, natural hairline with precise implantation',
    icon: Star
  },
  {
    title: 'Minimal Scarring',
    description: 'Advanced sapphire blades reduce tissue damage and visible scarring',
    icon: Diamond
  },
  {
    title: 'Faster Recovery',
    description: 'Return to daily activities sooner with reduced healing time',
    icon: Clock
  },
  {
    title: 'High Density',
    description: 'Achieve optimal hair density with precise implantation',
    icon: CheckCircle2
  }
];

const steps = [
  {
    title: 'Follicle Extraction',
    description: 'Precise extraction using sapphire blades for minimal tissue damage',
    duration: '2-3 hours'
  },
  {
    title: 'Site Preparation',
    description: 'Creation of recipient sites with optimal angle and direction',
    duration: '1-2 hours'
  },
  {
    title: 'Follicle Implantation',
    description: 'Careful placement of follicles for natural growth pattern',
    duration: '2-3 hours'
  }
];

const faqs = [
  {
    question: 'How long does the Sapphire FUE procedure take?',
    answer: 'The procedure typically takes 6-8 hours, depending on the number of grafts needed. It\'s performed under local anesthesia in a single session.'
  },
  {
    question: 'When will I see results?',
    answer: 'Initial growth begins around 3-4 months after the procedure, with full results visible between 12-18 months.'
  },
  {
    question: 'Is Sapphire FUE painful?',
    answer: 'The procedure is performed under local anesthesia, ensuring minimal discomfort. Most patients report little to no pain during and after the treatment.'
  },
  {
    question: 'How long is the recovery period?',
    answer: 'Most patients return to work within 3-5 days. The donor area typically heals within 7-10 days, with minimal visible signs of the procedure.'
  }
];

export default function SapphireFue() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <Helmet>
        <title>Sapphire FUE Hair Transplant - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Experience the latest in hair transplant technology with Sapphire FUE at Estenove. Achieve natural-looking results with minimal recovery time."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold sm:text-5xl mb-6"
          >
            Sapphire FUE: Precision, Comfort, and Natural Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Revolutionizing Hair Restoration with Advanced Technology
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="/consultation"
            className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
          >
            Book Free Consultation
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What Is Sapphire FUE Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Sapphire FUE Unique?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sapphire FUE represents the cutting edge of hair transplant technology, using precision-engineered
              sapphire blades for unparalleled accuracy and minimal tissue damage during the procedure.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">Experience the advantages of advanced hair restoration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Procedure Steps */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Procedure</h2>
            <p className="text-xl text-gray-600">Understanding your journey to hair restoration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ideal Candidates */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Sapphire FUE Right for You?</h2>
              <p className="text-xl text-gray-600">
                Ideal candidates for Sapphire FUE include:
              </p>
            </div>
            <ul className="space-y-4">
              {[
                'Men and women experiencing pattern baldness',
                'Individuals with sufficient donor hair availability',
                'Those seeking a minimally invasive hair restoration solution',
                'Patients looking for quick recovery and natural results'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="text-center mt-8">
              <a
                href="/consultation"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Take our free assessment
                <ChevronRight className="h-5 w-5 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about Sapphire FUE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-start mb-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Appearance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards restoring your natural hair with Sapphire FUE.
            Schedule a consultation with our expert team to discuss your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/consultation"
              className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Book Free Consultation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-lg font-medium text-white hover:bg-white/10"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Chat with Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
