import React from 'react';
import { Helmet } from 'react-helmet-async';
import Certifications from '../components/trust/Certifications';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function TrustPage() {
  return (
    <>
      <Helmet>
        <title>Trust & Recognition - Estenove Hair Clinic</title>
        <meta
          name="description"
          content="Discover why Estenove Hair Clinic is trusted worldwide. View our certifications, accreditations, and patient testimonials."
        />
      </Helmet>
      <div className="pt-20">
        <Certifications />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
