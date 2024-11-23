import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Droplet,
  CheckCircle2,
  Clock,
  Users,
  HeartPulse,
  Star,
  Shield,
  HelpCircle,
  ChevronRight,
  MessageSquare,
  Microscope,
  Leaf,
  Activity,
  Zap
} from 'lucide-react';

const benefits = [
  {
    title: 'Natural Growth Stimulation',
    description: 'Activates and strengthens existing hair follicles naturally',
    icon: Leaf
  },
  {
    title: 'Improved Hair Quality',
    description: 'Enhances thickness and health of existing hair',
    icon: Star
  },
  {
    title: 'Minimal Recovery Time',
    description: 'No downtime, return to daily activities immediately',
    icon: Clock
  },
  {
    title: 'Long-lasting Results',
    description: 'Sustainable improvement in hair growth and density',
    icon: Activity
  }
];

const steps = [
  {
    title: 'Stem Cell Extraction',
    description: 'Gentle extraction of stem cells from your own body',
    duration: '30-45 minutes',
    icon: Microscope
  },
  {
    title: 'Solution Preparation',
    description: 'Processing and concentration of stem cells for maximum efficacy',
    duration: '45-60 minutes',
    icon: Droplet
  },
  {
    title: 'Treatment Application',
    description: 'Precise application to targeted areas of the scalp',
    duration: '30-45 minutes',
    icon: Zap
  }
];

const comparisons = [
  {
    feature: 'Treatment Type',
    stemCell: 'Non-surgical, regenerative',
    fue: 'Surgical transplant',
    dhi: 'Surgical implantation'
  },
  {
    feature: 'Recovery Time',
    stemCell: 'Immediate',
    fue: '7-10 days',
    dhi: '5-7 days'
  },
  {
    feature: 'Best For',
    stemCell: 'Early hair loss, thinning',
    fue: 'Advanced hair loss',
    dhi: 'Specific area treatment'
  },
  {
    feature: 'Results Timeline',
    stemCell: '2-3 months',
    fue: '6-12 months',
    dhi: '6-12 months'
  }
];

const faqs = [
  {
    question: 'Is stem cell treatment safe?',
    answer: 'Yes, stem cell therapy is safe as it uses your body\'s own cells. The procedure is minimally invasive and performed under strict medical protocols.'
  },
  {
    question: 'How many sessions are needed?',
    answer: 'Most patients see significant improvement after 2-3 sessions, spaced 4-6 weeks apart. The exact number depends on your individual condition and goals.'
  },
  {
    question: 'When will I see results?',
    answer: 'Initial improvements can be seen within 2-3 months, with continued enhancement over 6-12 months as new hair growth cycles begin.'
  },
  {
    question: 'Who is an ideal candidate?',
    answer: 'Ideal candidates include those with early-stage hair loss, thinning hair, or weakened follicles. The treatment is effective for both men and women.'
  }
];

export default function StemCell() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <Helmet>
        <title>Stem Cell Therapy for Hair Growth - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Experience revolutionary stem cell therapy for natural hair restoration at Estenove. Advanced regenerative treatment for thicker, healthier hair."
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
            Stem Cell Therapy: Revitalize Your Hair Naturally
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Harnessing the Power of Regenerative Medicine for Hair Restoration
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
        {/* What Is Stem Cell Therapy Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionizing Hair Regrowth with Cutting-Edge Science
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stem cell therapy represents the future of hair restoration, using your body's natural
              regenerative capabilities to stimulate new growth and strengthen existing follicles.
              This innovative treatment harnesses the power of stem cells to revitalize your scalp
              and promote sustainable hair growth.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Understanding the science behind stem cell therapy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
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

        {/* Benefits Section */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Stem Cell Treatment</h2>
            <p className="text-xl text-gray-600">Experience the advantages of regenerative therapy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
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

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Comparison</h2>
            <p className="text-xl text-gray-600">How stem cell therapy compares to other treatments</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-6 py-3 text-left text-gray-600">Feature</th>
                  <th className="px-6 py-3 text-left text-blue-600">Stem Cell Therapy</th>
                  <th className="px-6 py-3 text-left text-gray-600">FUE</th>
                  <th className="px-6 py-3 text-left text-gray-600">DHI</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-blue-600">{row.stemCell}</td>
                    <td className="px-6 py-4 text-gray-600">{row.fue}</td>
                    <td className="px-6 py-4 text-gray-600">{row.dhi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scientific Backing */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <HeartPulse className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scientific Backing</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our stem cell therapy is supported by extensive clinical research and proven results.
              Multiple studies have shown significant improvement in hair density and growth after
              treatment, with success rates exceeding 80% in suitable candidates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-600">Patient satisfaction rate</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <p className="text-gray-600">Improved hair density</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Treatment safety rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about stem cell therapy</p>
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
            Take the First Step Toward Healthier, Fuller Hair
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of regenerative medicine with our advanced stem cell therapy.
            Schedule a consultation with our experts to discover if this treatment is right for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/consultation"
              className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-lg font-medium text-white hover:bg-white/10"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Chat with Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
