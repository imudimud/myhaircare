import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { SEOHelmet } from '../components/SEOHelmet';
import Hero from '../components/Hero';
import { 
  Star,
  Award,
  Users,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('home.testimonials.1.name'),
      content: t('home.testimonials.1.content'),
      rating: 5,
    },
    {
      name: t('home.testimonials.2.name'),
      content: t('home.testimonials.2.content'),
      rating: 5,
    },
  ];

  return (
    <>
      <SEOHelmet
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />

      {/* Hero Section */}
      <Hero />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t('home.testimonials.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Users className="h-12 w-12 text-navy-400" aria-hidden="true" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/patient/testimonials"
              className="inline-flex items-center text-navy-600 hover:text-navy-700"
            >
              {t('home.testimonials.viewMore')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('home.awards.title')}
            </h2>
            <div className="flex justify-center items-center space-x-8">
              <Award className="h-16 w-16 text-navy-600" aria-hidden="true" />
              <Award className="h-16 w-16 text-navy-600" aria-hidden="true" />
              <Award className="h-16 w-16 text-navy-600" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/consultation"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {t('buttons.bookConsultation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={t('contact.whatsapp.url')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-navy-900 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
