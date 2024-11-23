import React from 'react';
import { Book, FileText, GraduationCap, Brain } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, tags }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function EducationalCenter() {
  const resources = [
    {
      title: "Understanding Hair Loss",
      description: "Learn about the different types of hair loss, their causes, and how they affect both men and women.",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      tags: ["Hair Loss", "Medical", "Research"]
    },
    {
      title: "Treatment Guide",
      description: "Comprehensive guide to various hair restoration treatments, from medication to surgical procedures.",
      icon: <Book className="w-6 h-6 text-blue-600" />,
      tags: ["Treatments", "Procedures", "Guide"]
    },
    {
      title: "Research Library",
      description: "Access to scientific papers, clinical studies, and research findings in hair restoration.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      tags: ["Research", "Studies", "Science"]
    },
    {
      title: "Patient Education",
      description: "Educational resources to help you make informed decisions about your hair restoration journey.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      tags: ["Education", "Planning", "Support"]
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Educational Resources</h2>
            <p className="text-blue-100">
              Explore our comprehensive library of educational resources designed to help you
              understand hair restoration and make informed decisions about your treatment.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-blue-600">Featured Publications</h3>
          <div className="space-y-4">
            {[
              {
                title: "Advances in FUE Technology",
                journal: "Journal of Hair Restoration",
                date: "2023"
              },
              {
                title: "Long-term Outcomes of Hair Transplantation",
                journal: "International Medical Review",
                date: "2023"
              },
              {
                title: "Patient Satisfaction in Hair Restoration",
                journal: "Clinical Research Quarterly",
                date: "2023"
              }
            ].map((publication, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{publication.title}</h4>
                  <p className="text-sm text-gray-500">{publication.journal}</p>
                </div>
                <span className="text-sm text-gray-500">{publication.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
