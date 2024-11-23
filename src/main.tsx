import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <App />
        <SpeedInsights />
      </HelmetProvider>
    </I18nextProvider>
  </StrictMode>
);
