import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Layout from './components/layout/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import Loading from './components/ui/Loading';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/home/index'));
const About = React.lazy(() => import('./pages/about'));
const Procedures = React.lazy(() => import('./pages/procedures/index'));
const Patient = React.lazy(() => import('./pages/patient/index'));
const Trust = React.lazy(() => import('./pages/trust'));
const NotFound = React.lazy(() => import('./pages/not-found'));

// Development pages
const Test = React.lazy(() => import('./pages/dev/test'));

export default function App() {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<Layout />}>
                {/* Main pages */}
                <Route index element={<Home />} />
                <Route path="about/*" element={<About />} />
                <Route path="procedures/*" element={<Procedures />} />
                <Route path="patient/*" element={<Patient />} />
                <Route path="trust/*" element={<Trust />} />
                
                {/* Development routes */}
                {process.env.NODE_ENV === 'development' && (
                  <Route path="dev/test" element={<Test />} />
                )}
                
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </I18nextProvider>
    </ErrorBoundary>
  );
}