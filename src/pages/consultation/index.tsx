import React from 'react';
import { Helmet } from 'react-helmet-async';
import ConsultationForm from '../../components/consultation/ConsultationForm';
import { motion } from 'framer-motion';
import { Clock, Calendar, MessageCircle, Video } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get a response within 24 hours',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Choose a time that works best for you',
  },
  {
    icon: MessageCircle,
    title: 'Multi-Language Support',
    description: 'Consult in your preferred language',
  },
  {
    icon: Video,
    title: 'Virtual Consultation',
    description: 'Online video consultation available',
  },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <Helmet>
        <title>Book a Consultation - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Schedule a free consultation with our expert medical team at Estenove Hair Clinic. Get personalized treatment plans and discuss your hair restoration options."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Book Your Free Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Take the first step towards your hair restoration journey
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <ConsultationForm />
      </div>
    </div>
  );
}
