import React from 'react';
import { Shield, Award, Building2, Users, Microscope, FileCheck } from 'lucide-react';

const standards = [
  {
    icon: Shield,
    title: "International Safety Protocols",
    description: "We adhere to stringent international safety protocols and guidelines set by leading medical organizations.",
    details: [
      "Joint Commission International (JCI) standards compliance",
      "WHO surgical safety checklist implementation",
      "Regular safety audits and certifications"
    ]
  },
  {
    icon: Building2,
    title: "State-of-the-Art Facility",
    description: "Our clinic maintains the highest standards of cleanliness and medical safety in all procedures.",
    details: [
      "Advanced sterilization systems",
      "HEPA-filtered air purification",
      "Dedicated surgical suites"
    ]
  },
  {
    icon: Users,
    title: "Expert Medical Team",
    description: "Our medical team consists of highly qualified professionals with extensive experience in hair restoration.",
    details: [
      "Board-certified surgeons",
      "Specialized nursing staff",
      "Continuous medical education"
    ]
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "We utilize the latest medical technology and equipment to ensure optimal results and patient safety.",
    details: [
      "High-precision surgical instruments",
      "Advanced imaging systems",
      "Digital treatment planning"
    ]
  },
  {
    icon: FileCheck,
    title: "Quality Management",
    description: "Comprehensive quality management system ensuring consistent, high-quality care.",
    details: [
      "Regular quality assessments",
      "Patient feedback integration",
      "Continuous improvement protocols"
    ]
  }
];

export default function SafetyStandards() {
  return (
    <section className="bg-white">
      <div className="bg-blue-600 py-20 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Safety Standards & Certifications</h2>
            <p className="text-blue-100">
              Our facility maintains the highest safety standards and international certifications
              to ensure the best possible care for our patients.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Safety Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Estenove, patient safety is our top priority. We maintain rigorous safety standards
            and protocols to ensure the best possible care for our patients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, index) => (
            <div
              key={standard.title}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <standard.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-3">{standard.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{standard.description}</p>
              <ul className="space-y-2">
                {standard.details.map((detail, idx) => (
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
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
