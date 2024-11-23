import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  // Organization and Local Business Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalOrganization"],
    "name": "Estenove Hair Clinic",
    "image": "/images/hospital.jpg",
    "logo": "/images/logo.png",
    "description": "Harvard-affiliated hair restoration clinic specializing in advanced FUE and DHI techniques with a focus on natural results and ethical practices.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Şişli Medical District",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul",
      "postalCode": "34394",
      "addressCountry": "Turkey"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "url": "https://estenove.com",
    "telephone": "+902123456789",
    "email": "contact@estenove.com",
    "priceRange": "€€€",
    "openingHours": "Mo-Sa 09:00-18:00",
    "medicalSpecialty": ["Hair Transplantation", "Trichology"],
    "accreditation": [
      {
        "@type": "Credential",
        "credentialCategory": "Medical License",
        "recognizedBy": "Turkish Ministry of Health"
      },
      {
        "@type": "Credential",
        "credentialCategory": "Certification",
        "recognizedBy": "Joint Commission International (JCI)"
      }
    ],
    "hasCredential": "Harvard Medical School Affiliation",
    "award": [
      {
        "@type": "Award",
        "name": "Best Hair Transplant Clinic 2023",
        "description": "Awarded by International Medical Tourism Journal"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/estenoveclinic",
      "https://www.instagram.com/estenoveclinic",
      "https://www.linkedin.com/company/estenove"
    ]
  };

  // Medical Procedures Schema with Enhanced Entity Information
  const proceduresSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Hair Transplantation Procedures",
      "procedureType": [
        {
          "@type": "MedicalProcedure",
          "name": "Sapphire FUE",
          "description": "Advanced FUE technique using sapphire blades for precise incisions"
        },
        {
          "@type": "MedicalProcedure",
          "name": "DHI Technique",
          "description": "Direct hair implantation using specialized Choi pen technology"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Stem Cell Therapy",
          "description": "Innovative treatment using stem cells for hair regeneration"
        }
      ],
      "howPerformed": "Using advanced FUE and DHI techniques with sapphire blades for minimal scarring and maximum natural results",
      "preparation": "Initial consultation, medical evaluation, and personalized treatment planning",
      "followup": "12-month comprehensive aftercare program with regular check-ups",
      "status": "Available",
      "study": [
        {
          "@type": "MedicalStudy",
          "studyLocation": "Harvard Medical School",
          "description": "Research on advanced hair restoration techniques and outcomes",
          "studySubject": {
            "@type": "MedicalEntity",
            "name": "Hair Transplantation Success Rates",
            "code": {
              "@type": "MedicalCode",
              "code": "HT2023",
              "codingSystem": "Internal Research Classification"
            }
          }
        }
      ]
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Hair Restoration",
      "relevantSpecialty": [
        {
          "@type": "MedicalSpecialty",
          "name": "Dermatology"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Plastic Surgery"
        }
      ]
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Patients seeking hair restoration solutions"
    },
    "mainEntity": {
      "@type": "MedicalEntity",
      "name": "Hair Loss Treatment",
      "relevantCondition": [
        {
          "@type": "MedicalCondition",
          "name": "Androgenetic Alopecia",
          "alternateName": "Male Pattern Baldness"
        },
        {
          "@type": "MedicalCondition",
          "name": "Female Pattern Hair Loss"
        }
      ]
    }
  };

  // Enhanced FAQ Schema with More Questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a hair transplant procedure take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The procedure typically takes 6-8 hours, depending on the number of grafts needed. We perform all transplants in a single session for your convenience."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see the final results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial growth begins around 3-4 months, with final results visible after 12-14 months. The transplanted hair grows naturally and permanently."
        }
      },
      {
        "@type": "Question",
        "name": "Is the procedure painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The procedure is performed under local anesthesia, ensuring minimal discomfort. Most patients report little to no pain during and after the procedure."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Estenove different from other clinics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estenove stands out with its Harvard affiliation, advanced techniques, ethical practices, and comprehensive aftercare program. Our success rate exceeds 97%, with over 15,000 successful procedures performed."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between FUE and DHI techniques?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FUE involves extracting and implanting hair follicles individually, while DHI uses a specialized Choi pen for direct implantation without the need for pre-made channels. DHI typically offers more precise angle control and denser packing of grafts."
        }
      },
      {
        "@type": "Question",
        "name": "How many grafts will I need for my hair transplant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The number of grafts needed varies based on your degree of hair loss and desired coverage. During your consultation, our doctors will assess your donor area and recommend the optimal number of grafts, typically ranging from 2,000 to 4,500 grafts."
        }
      }
    ]
  };

  // Enhanced Review Schema with More Structured Data
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Estenove Hair Clinic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John D.",
          "nationality": "United Kingdom"
        },
        "datePublished": "2023-11-15",
        "reviewBody": "Outstanding results and professional care throughout my hair restoration journey. The team's expertise and attention to detail exceeded my expectations.",
        "publisher": {
          "@type": "Organization",
          "name": "Trustpilot"
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael R.",
          "nationality": "Germany"
        },
        "datePublished": "2023-10-28",
        "reviewBody": "The Harvard affiliation and advanced techniques gave me confidence in my choice. The results are completely natural-looking and exactly what I wanted.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        }
      }
    ]
  };

  // Enhanced Medical Article Schema for Blog Posts
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalCondition",
      "name": "Hair Loss",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Hair Transplantation",
        "description": "Advanced FUE and DHI techniques for natural hair restoration",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Trichology"
        }
      }
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Trichology"
    },
    "lastReviewed": "2023-12-01",
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ".main-content"
    },
    "author": {
      "@type": "Person",
      "name": "Dr. James Wilson",
      "jobTitle": "Chief Medical Officer",
      "affiliation": {
        "@type": "Organization",
        "name": "Estenove Hair Clinic",
        "sameAs": "https://estenove.com"
      },
      "qualification": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Medical Degree",
        "educationalLevel": "MD",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Harvard Medical School"
        }
      }
    }
  };

  // Breadcrumb Schema for Navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://estenove.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Procedures",
        "item": "https://estenove.com/procedures"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hair Transplantation",
        "item": "https://estenove.com/procedures/hair-transplantation"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(proceduresSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}