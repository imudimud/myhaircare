interface LocalBusinessData {
  name: string;
  description: string;
  image: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
}

export const generateLocalBusinessSchema = (data = {}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://estenove.com/#organization",
  name: "Estenove Hair Clinic",
  description: "Harvard-affiliated hair restoration clinic specializing in advanced FUE and DHI techniques with a focus on natural results and ethical practices.",
  image: "/images/clinic-exterior.jpg",
  telephone: "+90 XXX XXX XXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Şişli Medical District",
    addressLocality: "Istanbul",
    addressRegion: "Istanbul",
    postalCode: "34394",
    addressCountry: "Turkey"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0082,
    longitude: 28.9784
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
  priceRange: "€€€",
  medicalSpecialty: "Hair Transplant Surgery",
  ...data
});

interface FAQData {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const generateFAQSchema = ({ questions }: FAQData) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
});

interface ReviewData {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
}

export const generateReviewSchema = (reviews: ReviewData[]) => ({
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://estenove.com/#organization",
  name: "Estenove Hair Clinic",
  review: reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.reviewRating,
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: review.datePublished,
  })),
});
