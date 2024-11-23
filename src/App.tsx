import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import SchemaMarkup from './components/seo/SchemaMarkup';
import UnifiedSEO from './components/seo/UnifiedSEO';
import { generateLocalBusinessSchema } from './utils/structuredData';
import './i18n';

// Components that are part of the initial bundle
import Header from './components/Header';
import Layout from './components/layout/Layout';
import BackToTop from './components/BackToTop';

// Lazy-loaded components
const Hero = React.lazy(() => import('./components/Hero'));
const Procedures = React.lazy(() => import('./components/Procedures'));
const Results = React.lazy(() => import('./components/Results'));
const About = React.lazy(() => import('./components/About'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Contact = React.lazy(() => import('./components/Contact'));
const WhyEstenove = React.lazy(() => import('./pages/why-estenove'));
const OurTeam = React.lazy(() => import('./components/about/OurTeam'));
const TrustAndSafety = React.lazy(() => import('./components/trust/TrustAndSafety'));
const Certifications = React.lazy(() => import('./components/trust/Certifications'));
const SapphireFue = React.lazy(() => import('./pages/procedures/SapphireFue'));
const StemCell = React.lazy(() => import('./pages/procedures/StemCell'));
const DHI = React.lazy(() => import('./pages/procedures/DHI'));
const EducationPage = React.lazy(() => import('./pages/education'));
const ConsultationPage = React.lazy(() => import('./pages/consultation'));
const ProceduresPage = React.lazy(() => import('./pages/procedures'));
const MedicalInformationPage = React.lazy(() => import('./pages/medical'));
const PatientResourcesPage = React.lazy(() => import('./pages/patient'));
const GalleryPage = React.lazy(() => import('./pages/gallery'));
const WhyEstenovePage = React.lazy(() => import('./pages/why-estenove'));
const SafetyStandards = React.lazy(() => import('./components/medical/SafetyStandards'));
const CareProtocols = React.lazy(() => import('./components/medical/CareProtocols'));
const ProcedureDetails = React.lazy(() => import('./components/medical/ProcedureDetails'));
const Blog = React.lazy(() => import('./components/blog/Blog'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

// Loading spinner component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white">
    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
  </div>
);

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <UnifiedSEO
        title={t('home.title')}
        description={t('home.description')}
        path="/"
        keywords={['hair transplant', 'hair restoration', 'FUE', 'DHI', 'hair clinic', 'Istanbul']}
        structuredData={generateLocalBusinessSchema()}
      />
      <Hero />
      <Procedures />
      <Results />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

function AboutPage() {
  return (
    <PageTransition>
      <div className="space-y-16">
        <About />
        <Certifications />
        <Contact />
      </div>
    </PageTransition>
  );
}

function TrustPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Certifications />
        <Testimonials />
        <Contact />
      </div>
    </PageTransition>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-white">
          <Helmet>
            <title>Estenove Hair Clinic - Advanced Hair Restoration in Istanbul</title>
            <meta
              name="description"
              content="Experience world-class hair restoration at Estenove Hair Clinic in Istanbul. Advanced FUE techniques, experienced surgeons, and natural results."
            />
          </Helmet>
          <SEO 
            title={t('seo.pages.home.title')}
            description={t('seo.pages.home.description')}
            keywords={t('seo.pages.home.keywords', { returnObjects: true }) as string[]}
            path="/home"
          />
          <SchemaMarkup />
          <Header />
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/team" element={
                  <PageTransition>
                    <OurTeam />
                  </PageTransition>
                } />
                <Route path="/procedures" element={
                  <PageTransition>
                    <ProceduresPage />
                  </PageTransition>
                } />
                <Route path="/procedures/sapphire-fue" element={
                  <PageTransition>
                    <SapphireFue />
                  </PageTransition>
                } />
                <Route path="/procedures/stem-cell" element={
                  <PageTransition>
                    <StemCell />
                  </PageTransition>
                } />
                <Route path="/procedures/dhi" element={
                  <PageTransition>
                    <DHI />
                  </PageTransition>
                } />
                <Route path="/education" element={
                  <PageTransition>
                    <EducationPage />
                  </PageTransition>
                } />
                <Route path="/consultation" element={
                  <PageTransition>
                    <ConsultationPage />
                  </PageTransition>
                } />
                <Route path="/medical" element={
                  <PageTransition>
                    <MedicalInformationPage />
                  </PageTransition>
                } />
                <Route path="/gallery" element={
                  <PageTransition>
                    <GalleryPage />
                  </PageTransition>
                } />
                <Route path="/patient" element={
                  <PageTransition>
                    <PatientResourcesPage />
                  </PageTransition>
                } />
                <Route path="/why-estenove" element={
                  <PageTransition>
                    <WhyEstenovePage />
                  </PageTransition>
                } />
                <Route path="/safety" element={
                  <PageTransition>
                    <SafetyStandards />
                  </PageTransition>
                } />
                <Route path="/care" element={
                  <PageTransition>
                    <CareProtocols />
                  </PageTransition>
                } />
                <Route path="/procedure-details" element={
                  <PageTransition>
                    <ProcedureDetails />
                  </PageTransition>
                } />
                <Route path="/blog" element={
                  <PageTransition>
                    <Blog />
                  </PageTransition>
                } />
                <Route path="/results" element={
                  <PageTransition>
                    <Results />
                  </PageTransition>
                } />
                <Route path="/contact" element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                } />
                <Route path="/trust" element={
                  <PageTransition>
                    <TrustAndSafety />
                  </PageTransition>
                } />
              </Routes>
            </Suspense>
          </Layout>
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;