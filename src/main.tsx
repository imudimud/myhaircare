import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <SpeedInsights />
    </HelmetProvider>
  </StrictMode>
);
