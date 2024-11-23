import React from 'react';
import { Award, Shield, Star, Trophy, Newspaper } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface Certification {
  key: string;
  icon: React.ReactNode;
  year: string;
}

interface MediaMention {
  key: string;
  date: string;
  link: string;
}

const certifications: Certification[] = [
  {
    key: "ishrs",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    year: "2023"
  },
  {
    key: "jci",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    year: "2023"
  },
  {
    key: "ema",
    icon: <Trophy className="w-8 h-8 text-blue-600" />,
    year: "2023"
  }
];

const mediaMentions: MediaMention[] = [
  {
    key: "medicalDaily",
    date: "2024-01-10",
    link: "#"
  },
  {
    key: "healthWellnessMagazine",
    date: "2023-12-15",
    link: "#"
  },
  {
    key: "medicalInnovationWeekly",
    date: "2023-11-20",
    link: "#"
  }
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('trust.certifications.title')}</h2>
          <p className="text-gray-600">{t('trust.certifications.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <div key={cert.key} className="p-6 bg-white rounded-lg shadow-lg">
              {cert.icon}
              <h3 className="text-xl font-semibold mt-4">
                {t(`trust.certifications.items.${cert.key}.title`)}
              </h3>
              <p className="text-gray-600 mt-2">
                {t(`trust.certifications.items.${cert.key}.organization`)}
              </p>
              <p className="mt-2">
                {t(`trust.certifications.items.${cert.key}.description`)}
              </p>
              <p className="text-sm text-gray-500 mt-2">{cert.year}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('trust.mediaMentions.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mediaMentions.map((mention) => (
              <a
                key={mention.key}
                href={mention.link}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-semibold">
                  {t(`trust.mediaMentions.items.${mention.key}.source`)}
                </h4>
                <p className="text-lg font-medium mt-2">
                  {t(`trust.mediaMentions.items.${mention.key}.title`)}
                </p>
                <p className="text-gray-600 mt-2">
                  {t(`trust.mediaMentions.items.${mention.key}.excerpt`)}
                </p>
                <p className="text-sm text-gray-500 mt-2">{mention.date}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
