import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafetyStandards from '../../components/medical/SafetyStandards';
import CareProtocols from '../../components/medical/CareProtocols';
import { Stethoscope } from 'lucide-react';

const medicalProtocols = [
  {
    title: "Medical Protocol Standards",
    points: [
      "Comprehensive pre-operative screening",
      "Sterile surgical environment",
      "Advanced hair transplant techniques",
      "Continuous vital monitoring",
      "Post-operative care plan"
    ]
  },
  {
    title: "Quality Assurance",
    points: [
      "Regular equipment calibration",
      "Staff training programs",
      "Patient feedback system",
      "Outcome documentation",
      "Continuous improvement process"
    ]
  },
  {
    title: "Patient Safety",
    points: [
      "Emergency response protocols",
      "Infection control measures",
      "Medical team certification",
      "Risk assessment procedures",
      "Patient education program"
    ]
  }
];

export default function MedicalInformationPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>Medical Information - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Learn about our medical protocols, safety standards, and comprehensive pre & post-operative care at Estenove Hair Clinic."
        />
      </Helmet>

      <div className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto h-full px-4 flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Stethoscope className="h-16 w-16 mx-auto mb-6 text-blue-100" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Medical Excellence & Patient Safety
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our commitment to the highest medical standards and patient care
                protocols ensures safe and effective hair restoration procedures.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {medicalProtocols.map((protocol, index) => (
            <motion.div
              key={protocol.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {protocol.title}
              </h3>
              <ul className="space-y-3">
                {protocol.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
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
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <SafetyStandards />
        <CareProtocols />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Have Questions About Our Medical Procedures?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our medical team is here to address any concerns you may have about our
              procedures, safety standards, or care protocols.
            </p>
            <a
              href="/consultation"
              className="inline-flex items-center px-8 py-4 border border-transparent rounded-full text-lg font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
