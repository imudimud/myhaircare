import { SUPPORTED_LANGUAGES } from '../i18n';

interface Doctor {
  name: string;
  specialty: string;
  certifications: string[];
  image: string;
  description: string;
  reviews?: {
    reviewRating: number;
    reviewBody: string;
    author: string;
  }[];
}

interface MedicalProcedure {
  name: string;
  description: string;
  benefits: string[] | { [key: string]: string };
  risks: string[];
  preparation: string[];
  recovery: string[];
  image?: string;
  performedBy?: Doctor;
  cost?: {
    currency: string;
    value: number;
  };
}

interface FAQ {
  question: string;
  answer: string;
}

export const generateDoctorSchema = (doctor: Doctor) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: doctor.name,
  medicalSpecialty: doctor.specialty,
  image: doctor.image,
  description: doctor.description,
  hasCredential: doctor.certifications,
  ...(doctor.reviews && {
    review: doctor.reviews.map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating,
      },
      reviewBody: review.reviewBody,
      author: {
        '@type': 'Person',
        name: review.author,
      },
    })),
  }),
});

export const generateMedicalProcedureSchema = (procedure: MedicalProcedure) => {
  // Helper function to ensure array or convert object values to array
  const ensureArray = (value: string[] | { [key: string]: string } | undefined): string[] => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return Object.values(value);
  };

  // Helper function to safely join array elements
  const safeJoin = (arr: string[]): string => {
    return arr.filter(Boolean).join(', ');
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: procedure.name,
    description: procedure.description,
    image: procedure.image,
    preparation: safeJoin(ensureArray(procedure.preparation)),
    followup: safeJoin(ensureArray(procedure.recovery)),
    howPerformed: safeJoin(ensureArray(procedure.benefits)),
    risk: safeJoin(ensureArray(procedure.risks)),
    ...(procedure.performedBy && {
      performedBy: generateDoctorSchema(procedure.performedBy),
    }),
    ...(procedure.cost && {
      offers: {
        '@type': 'Offer',
        price: procedure.cost.value,
        priceCurrency: procedure.cost.currency,
      },
    }),
  };
};

export const generateFAQSchema = (faqs: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateHealthFacilitySchema = (siteUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': siteUrl,
  name: 'MyHairCare',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/clinic.jpg`,
  description: 'Leading hair transplant and restoration clinic',
  medicalSpecialty: ['Hair Transplant', 'Hair Restoration', 'Trichology'],
  availableService: [
    'Sapphire FUE Hair Transplant',
    'DHI Hair Transplant',
    'Stem Cell Hair Treatment',
  ],
  hasCredential: [
    'JCI Accreditation',
    'ISO 9001:2015',
    'International Society of Hair Restoration Surgery (ISHRS)',
  ],
  award: [
    'Best Hair Transplant Clinic 2023',
    'Excellence in Patient Care Award',
  ],
  sameAs: [
    'https://www.facebook.com/myhaircare',
    'https://www.instagram.com/myhaircare',
    'https://www.linkedin.com/company/myhaircare',
  ],
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
