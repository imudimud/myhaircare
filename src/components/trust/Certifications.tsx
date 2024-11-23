import React from 'react';
import { Award, Shield, Star, Trophy, Newspaper } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  year: string;
}

interface MediaMention {
  source: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: "ISHRS Certified",
    organization: "International Society of Hair Restoration Surgery",
    description: "Recognized for meeting the highest standards in hair restoration surgery and continuing education.",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    year: "2023"
  },
  {
    title: "JCI Accredited",
    organization: "Joint Commission International",
    description: "Meeting global standards for quality and patient safety in healthcare services.",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    year: "2023"
  },
  {
    title: "Excellence in Hair Restoration",
    organization: "European Medical Association",
    description: "Awarded for outstanding achievements in hair transplantation techniques and patient care.",
    icon: <Trophy className="w-8 h-8 text-blue-600" />,
    year: "2023"
  }
];

const mediaMentions: MediaMention[] = [
  {
    source: "Medical Daily",
    title: "Revolutionary Approaches in Hair Transplantation",
    excerpt: "Estenove's innovative techniques are setting new standards in the field of hair restoration...",
    date: "2024-01-10",
    link: "#"
  },
  {
    source: "Health & Wellness Magazine",
    title: "Leading the Way in Patient Care",
    excerpt: "The clinic's commitment to patient satisfaction and exceptional results has earned them recognition...",
    date: "2023-12-15",
    link: "#"
  },
  {
    source: "Medical Innovation Weekly",
    title: "Advancing Hair Restoration Technology",
    excerpt: "Estenove's adoption of cutting-edge technology demonstrates their dedication to excellence...",
    date: "2023-11-20",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section className="bg-white">
      <div className="bg-blue-600 py-20 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Certifications & Recognition</h2>
            <p className="text-blue-100">
              Our commitment to excellence is recognized by leading organizations in the field
              of hair restoration and healthcare.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{cert.title}</h4>
                    <p className="text-sm text-blue-600 mb-2">{cert.organization}</p>
                    <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                    <span className="text-sm text-gray-500">Certified {cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Media Coverage</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaMentions.map((mention, index) => (
              <a 
                key={index}
                href={mention.link}
                className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Newspaper className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm text-blue-600 mb-1 block">{mention.source}</span>
                    <h4 className="font-bold mb-2">{mention.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{mention.excerpt}</p>
                    <span className="text-sm text-gray-500">
                      {new Date(mention.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
