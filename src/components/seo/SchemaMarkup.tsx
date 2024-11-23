import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "HealthFirst Hair Restoration",
    "description": "Leading hair transplant clinic in Istanbul offering advanced FUE and FUT procedures.",
    "medicalSpecialty": "Hair Restoration",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Plaza",
      "addressLocality": "Istanbul",
      "addressCountry": "Turkey"
    },
    "telephone": "+90-XXX-XXX-XXXX",
    "url": "https://healthfirst-hair.com",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "FUE Hair Transplant",
        "description": "Follicular Unit Extraction for natural-looking hair restoration"
      },
      {
        "@type": "MedicalProcedure",
        "name": "FUT Hair Transplant",
        "description": "Follicular Unit Transplantation for maximum coverage"
      }
    ],
    "medicalCredential": [
      "Joint Commission International Accreditation",
      "Turkish Ministry of Health Certification"
    ],
    "award": [
      "Best Hair Transplant Clinic 2023",
      "Excellence in Patient Care Award"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
