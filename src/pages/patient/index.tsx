import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import JourneyTimeline from '../../components/patient/JourneyTimeline';
import PreparationGuide from '../../components/patient/PreparationGuide';
import RecoveryGuide from '../../components/patient/RecoveryGuide';
import { FileText, Download } from 'lucide-react';

const resources = [
  {
    title: "Pre-Procedure Checklist",
    description: "Complete checklist of items to prepare before your procedure",
    downloadUrl: "#"
  },
  {
    title: "Medication Schedule",
    description: "Detailed medication timing and dosage information",
    downloadUrl: "#"
  },
  {
    title: "Recovery Care Guide",
    description: "Comprehensive guide for post-procedure care",
    downloadUrl: "#"
  },
  {
    title: "Emergency Contacts",
    description: "Important contact information for your care team",
    downloadUrl: "#"
  }
];

export default function PatientResourcesPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>Patient Resources - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Access comprehensive patient resources including preparation guides, recovery timeline, and care instructions for your hair restoration journey at Estenove."
        />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">
              Patient Resources & Guidelines
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about your hair restoration journey,
              from preparation to recovery.
            </p>
          </motion.div>
        </div>
      </div>

      <JourneyTimeline />
      <PreparationGuide />
      <RecoveryGuide />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access and download our comprehensive guides and checklists to help
              you prepare for your procedure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold ml-2">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Additional Support?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our patient care team is available 24/7 to answer any questions and
            provide guidance throughout your journey.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/consultation"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
            >
              Schedule Consultation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50"
            >
              Contact Support
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
