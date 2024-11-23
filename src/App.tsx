import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import SchemaMarkup from './components/seo/SchemaMarkup';
import UnifiedSEO from './components/seo/UnifiedSEO';
import { generateLocalBusinessSchema } from './utils/structuredData';
import { preloadTranslations } from './utils/i18n';
import './i18n';
import { ErrorBoundary } from './components/ErrorBoundary';

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
const BeforeAfter = React.lazy(() => import('./pages/patient/BeforeAfter'));
const PatientTestimonials = React.lazy(() => import('./pages/patient/Testimonials'));
const NewHome = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./components/NotFound'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
    </div>
  );
}

// Page transition component
function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Preload translations based on the current route
    const loadTranslations = async () => {
      switch (pathname) {
        case '/':
          await preloadTranslations(['home', 'common']);
          break;
        case '/procedures':
          await preloadTranslations(['procedures', 'common']);
          break;
        case '/about':
          await preloadTranslations(['about', 'common']);
          break;
        // Add other routes as needed
        default:
          await preloadTranslations(['common']);
      }
    };
    
    loadTranslations();
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  const { t } = useTranslation(['home', 'common']);
  
  useEffect(() => {
    preloadTranslations(['home', 'common']);
  }, []);

  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <Procedures />
        <Results />
        <About />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </Layout>
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
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Preload common translations on app load
    preloadTranslations(['common', 'procedures']);
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Layout fullWidth>
                      <NewHome />
                    </Layout>
                  </PageTransition>
                }
              />

              {/* Procedures */}
              <Route
                path="/procedures"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/procedures-hero.jpg">
                      <ProceduresPage />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/procedures/sapphire-fue"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/sapphire-fue-hero.jpg">
                      <SapphireFue />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/procedures/stem-cell"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/stem-cell-hero.jpg">
                      <StemCell />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/procedures/dhi"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/dhi-hero.jpg">
                      <DHI />
                    </Layout>
                  </PageTransition>
                }
              />

              {/* Patient Resources */}
              <Route
                path="/patient"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/patient-hero.jpg">
                      <PatientResourcesPage />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/patient/before-after"
                element={
                  <PageTransition>
                    <Layout>
                      <BeforeAfter />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/patient/testimonials"
                element={
                  <PageTransition>
                    <Layout>
                      <PatientTestimonials />
                    </Layout>
                  </PageTransition>
                }
              />

              {/* About */}
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/about-hero.jpg">
                      <AboutPage />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/about/why"
                element={
                  <PageTransition>
                    <Layout>
                      <WhyEstenovePage />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route
                path="/about/trust"
                element={
                  <PageTransition>
                    <Layout>
                      <TrustAndSafety />
                    </Layout>
                  </PageTransition>
                }
              />

              {/* Medical */}
              <Route
                path="/medical"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/medical-hero.jpg">
                      <MedicalInformationPage />
                    </Layout>
                  </PageTransition>
                }
              />
              <Route path="/medical/guidelines" element={<PageTransition><Layout><SafetyStandards /></Layout></PageTransition>} />
              <Route path="/medical/safety" element={<PageTransition><Layout><CareProtocols /></Layout></PageTransition>} />
              <Route path="/medical/research" element={<PageTransition><Layout><ProcedureDetails /></Layout></PageTransition>} />

              {/* Education */}
              <Route
                path="/education"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/education-hero.jpg">
                      <EducationPage />
                    </Layout>
                  </PageTransition>
                }
              />

              {/* Contact */}
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Layout heroBackground="/images/contact-hero.jpg">
                      <Contact />
                    </Layout>
                  </PageTransition>
                }
              />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <PageTransition>
                    <Layout>
                      <NotFound />
                    </Layout>
                  </PageTransition>
                }
              />
            </Routes>
          </Suspense>
          <BackToTop />
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;