import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Droplet, Target, Microscope, Shield, Clock, Users, Star, CheckCircle2, HeartPulse, HelpCircle } from 'lucide-react';

const procedures = [
  {
    title: 'FUE Hair Transplant',
    description: 'Follicular Unit Extraction is a minimally invasive technique that harvests individual hair follicles for transplantation.',
    details: [
      'Minimal scarring and quick recovery',
      'Natural-looking results',
      'Up to 4500 grafts per session',
      'Local anesthesia for comfort'
    ],
    icon: Target,
    successRate: '98%',
    recoveryTime: '7-10 days',
    suitableFor: ['Male pattern baldness', 'Receding hairline', 'Crown balding']
  },
  {
    title: 'DHI Technique',
    description: 'Direct Hair Implantation uses specialized tools for precise placement of hair follicles, ensuring maximum density.',
    details: [
      'Maximum density achievement',
      'Custom angle control',
      'Minimal trauma to scalp',
      'Faster healing process'
    ],
    icon: Microscope,
    successRate: '95%',
    recoveryTime: '5-7 days',
    suitableFor: ['Advanced hair loss', 'Facial hair transplant', 'Eyebrow restoration']
  },
  {
    title: 'Stem Cell Therapy',
    description: 'Advanced treatment using stem cells to enhance hair growth and strengthen existing follicles.',
    details: [
      'Natural healing process',
      'Enhanced growth factors',
      'Long-lasting results',
      'Minimal downtime'
    ],
    icon: Droplet,
    successRate: '90%',
    recoveryTime: '3-5 days',
    suitableFor: ['Early stage hair loss', 'Thinning hair', 'Scalp rejuvenation']
  }
];

const features = [
  {
    title: 'Advanced Technology',
    description: 'State-of-the-art equipment and techniques for optimal results',
    icon: Shield
  },
  {
    title: 'Expert Team',
    description: 'Experienced surgeons and medical staff dedicated to your care',
    icon: Users
  },
  {
    title: 'Quick Recovery',
    description: 'Minimally invasive procedures with faster healing time',
    icon: Clock
  }
];

const faqs = [
  {
    question: 'How long does the procedure take?',
    answer: 'The duration varies depending on the procedure and number of grafts. FUE typically takes 6-8 hours, while DHI may take 8-10 hours for optimal results.'
  },
  {
    question: 'When will I see results?',
    answer: 'Initial growth begins around 3-4 months post-procedure, with full results visible between 12-18 months.'
  },
  {
    question: 'Is the procedure painful?',
    answer: 'All procedures are performed under local anesthesia, ensuring minimal discomfort during and after the treatment.'
  },
  {
    question: 'How long is the recovery period?',
    answer: 'Recovery varies by procedure but typically ranges from 3-10 days before returning to normal activities.'
  }
];

export default function ProceduresPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <Helmet>
        <title>Hair Transplant Procedures - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Explore our advanced hair transplant procedures including FUE, DHI, and Stem Cell Therapy. Learn about our cutting-edge techniques and technology at Estenove Hair Clinic."
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
            Advanced Hair Restoration Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of cutting-edge procedures designed to restore your natural hair with lasting results.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="/consultation"
            className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
          >
            Schedule Free Consultation
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Procedures Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Procedures</h2>
            <p className="mt-4 text-xl text-gray-600">Choose the perfect solution for your needs</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <procedure.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{procedure.title}</h3>
                <p className="text-gray-600 mb-6">{procedure.description}</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-700">Success Rate: {procedure.successRate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">Recovery: {procedure.recoveryTime}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {procedure.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Estenove</h2>
            <p className="text-xl text-gray-600">Experience excellence in hair restoration</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Suitability Guide */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Solution</h2>
            <p className="text-xl text-gray-600">Compare our procedures to find the best match for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{procedure.title}</h3>
                <h4 className="text-lg font-medium text-gray-700 mb-3">Best suited for:</h4>
                <ul className="space-y-2">
                  {procedure.suitableFor.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patient-Centered Approach */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <HeartPulse className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Patient-Centered Approach</h2>
            <p className="text-xl text-gray-600 mb-8">
              We prioritize your comfort, safety, and satisfaction throughout your hair restoration journey.
              Our expert team provides personalized care and support from your initial consultation to your
              final results.
            </p>
            <motion.a
              href="/about/team"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Meet Our Expert Team
            </motion.a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our procedures</p>
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
            Take the first step towards restoring your natural hair. Schedule a consultation
            with our expert team to discuss your personalized treatment plan.
          </p>
          <a
            href="/consultation"
            className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
}
