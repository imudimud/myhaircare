import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Award, HeartPulse, Users, Star, ChevronDown, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import Certifications from './Certifications';

const safetyStandards = [
  {
    title: 'Medical Safety',
    description: 'State-of-the-art sterilization protocols and safety equipment that exceed international standards.',
    icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality management system certified by ISO 9001:2015 standards.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock medical support team available for emergency assistance.',
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Expert Team',
    description: 'Internationally certified surgeons and medical staff with extensive experience.',
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
];

const testimonials = [
  {
    quote: "The level of care and attention to safety protocols was impressive. I felt completely secure throughout the entire process.",
    author: "James M.",
    location: "United States",
    rating: 5
  },
  {
    quote: "Their transparent approach and detailed safety briefing gave me complete confidence in choosing Este Nove.",
    author: "Thomas K.",
    location: "Germany",
    rating: 5
  },
];

const riskManagement = [
  {
    title: "Pre-Operation Assessment",
    items: [
      "Comprehensive medical history review",
      "Blood tests and health screenings",
      "Personalized risk assessment",
      "Detailed procedure planning"
    ]
  },
  {
    title: "During Procedure",
    items: [
      "Advanced monitoring systems",
      "Sterile environment protocols",
      "Emergency response team on standby",
      "State-of-the-art medical equipment"
    ]
  },
  {
    title: "Post-Operation Care",
    items: [
      "24/7 emergency support",
      "Regular follow-up appointments",
      "Detailed recovery guidelines",
      "Long-term care planning"
    ]
  }
];

export default function TrustAndSafety() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/clinic-hero.jpg"
            alt="Este Nove Clinic"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Your Safety and Trust Are Our Priority
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Committed to Providing a Safe, Ethical, and World-Class Experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <button className="text-white hover:text-blue-200 transition-colors">
              Learn More About Our Standards
            </button>
            <ChevronDown className="mt-4 animate-bounce" size={24} />
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications & Accreditations</h2>
          <Certifications />
        </div>
      </section>

      {/* Safety Standards Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Exceeding Global Medical Safety Standards</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our commitment to patient safety goes beyond industry standards, ensuring peace of mind throughout your journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold mb-2">{standard.title}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-6">Complete Transparency in Everything We Do</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">No Hidden Fees</h3>
                    <p className="text-gray-600">Clear, upfront pricing with all costs explained in detail before any procedure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Patient-First Philosophy</h3>
                    <p className="text-gray-600">Your well-being and satisfaction are our top priorities throughout your journey.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Open Communication</h3>
                    <p className="text-gray-600">Direct access to your medical team before, during, and after your procedure.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/images/trust/transparency.jpg"
              alt="Transparent Practice"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Risk Management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {riskManagement.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Patients Say About Safety</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/clinic-hero.jpg"
            alt="Este Nove Clinic"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Experience World-Class Care with Complete Peace of Mind
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
