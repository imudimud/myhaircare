import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Users, Clock, Target, Sparkles } from 'lucide-react';

const DHI = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto h-full px-4 flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              DHI Hair Transplant: Precision Meets Perfection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Achieve Maximum Density with the Most Advanced Hair Restoration Technique
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#learn-more" className="btn-primary">
                Learn More About DHI
              </a>
              <a href="/consultation" className="btn-secondary">
                Book Your Free Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is DHI Section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">A Revolution in Hair Transplantation</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Direct Hair Implantation (DHI) represents the pinnacle of hair transplant technology. 
                Using a specialized Choi pen, individual hair follicles are implanted directly into 
                your scalp with unprecedented precision and control.
              </p>
              <p className="text-lg text-gray-700">
                This advanced technique allows for maximum density and natural-looking results, 
                with minimal recovery time and superior graft survival rates.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {[
                  'No incisions or stitches required',
                  'Precise control over implantation angle',
                  'Minimal trauma to surrounding tissue',
                  'Faster recovery time',
                  'Higher graft survival rate'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How DHI Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How DHI Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extraction',
                icon: <Target className="w-12 h-12 text-blue-600" />,
                description: 'Individual follicles are carefully extracted using advanced micro tools'
              },
              {
                title: 'Preparation',
                icon: <Sparkles className="w-12 h-12 text-blue-600" />,
                description: 'Grafts are prepared and loaded into the specialized Choi implanter pen'
              },
              {
                title: 'Implantation',
                icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
                description: 'Follicles are implanted directly at the perfect angle and depth'
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Benefits of DHI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Maximum Precision',
                icon: <Target className="w-8 h-8" />,
                description: 'Perfect alignment and angle for the most natural hairline'
              },
              {
                title: 'Minimal Recovery',
                icon: <Clock className="w-8 h-8" />,
                description: 'Faster healing with no stitches or visible scarring'
              },
              {
                title: 'High Density',
                icon: <CheckCircle2 className="w-8 h-8" />,
                description: 'Achieve maximum density for fuller-looking results'
              },
              {
                title: 'Natural Results',
                icon: <Users className="w-8 h-8" />,
                description: 'Results that look and feel completely natural'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200">
                <div className="flex justify-center mb-4 text-blue-600">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Your Journey to a Fuller Head of Hair</h2>
          <p className="text-xl mb-12 text-gray-200">
            Take the first step towards restoring your natural hair with our advanced DHI technique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              Book a Free Consultation
            </a>
            <a href="#" className="btn-secondary">
              Chat with Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DHI;
