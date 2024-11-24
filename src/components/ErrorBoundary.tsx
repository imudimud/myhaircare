import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { SEOHelmet } from './SEOHelmet';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Wrapper component to use hooks with class component
function ErrorBoundaryContent({ error, onReset }: { error: Error | null; onReset: () => void }) {
  const { t } = useTranslation();

  return (
    <>
      <SEOHelmet
        title={t('error.seo.title')}
        description={t('error.seo.description')}
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {t('error.title')}
          </h1>
          <p className="text-gray-600 mb-4">
            {t('error.description')}
          </p>
          <div className="space-y-4">
            <button
              onClick={onReset}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {t('error.refresh')}
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              {t('error.backToHome')}
            </button>
          </div>
          {process.env.NODE_ENV === 'development' && error && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {t('error.debugInfo')}
              </h2>
              <pre className="p-4 bg-gray-100 rounded overflow-auto text-sm text-red-600">
                {error.toString()}
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log to your error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return <ErrorBoundaryContent error={this.state.error} onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}
