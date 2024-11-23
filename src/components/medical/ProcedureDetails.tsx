import React from 'react';
import { Microscope, Syringe, Clipboard } from 'lucide-react';

interface TechniqueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Technique: React.FC<TechniqueProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function ProcedureDetails() {
  const techniques = [
    {
      title: "Advanced FUE Technique",
      description: "State-of-the-art follicular unit extraction using precision instruments for minimal scarring and natural results.",
      icon: <Microscope className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Local Anesthesia",
      description: "Safe and effective pain management using the latest anesthetic techniques for maximum comfort.",
      icon: <Syringe className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Recovery Protocol",
      description: "Comprehensive post-operative care plan designed to ensure optimal healing and results.",
      icon: <Clipboard className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-blue-600 py-20 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Medical Procedure Details</h2>
            <p className="text-blue-100">
              Understanding the technical aspects of our procedures helps you make
              informed decisions about your treatment journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Medical Procedures</h2>
          <p className="text-gray-600">
            Our procedures combine cutting-edge technology with proven medical expertise
            to deliver exceptional results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techniques.map((technique, index) => (
            <Technique key={index} {...technique} />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-4">Medical Standards & Safety</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3"></span>
              <span>All procedures performed by certified medical professionals</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3"></span>
              <span>State-of-the-art sterilization and safety protocols</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3"></span>
              <span>Comprehensive pre-operative screening</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
