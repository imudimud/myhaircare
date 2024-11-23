import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Users, Star, ChevronDown, Microscope, Heart, Clock, Shield, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { generateLocalBusinessSchema } from '../../utils/structuredData';
import GlobalReach from '../../components/map/GlobalReach';

const stats = [
  { label: 'Years Experience', value: '20+' },
  { label: 'Success Rate', value: '97%' },
  { label: 'Patients Treated', value: '15,000+' },
  { label: 'Countries Served', value: '50+' },
];

const features = [
  {
    icon: <Shield className="w-8 h-8 text-navy-900" />,
    title: 'Harvard Collaboration',
    description: 'Direct partnership with Harvard Medical School ensures cutting-edge techniques and research-backed procedures.',
  },
  {
    icon: <Microscope className="w-8 h-8 text-navy-900" />,
    title: 'Advanced Technology',
    description: 'State-of-the-art FUE and DHI techniques combined with stem cell research for optimal results.',
  },
  {
    icon: <Award className="w-8 h-8 text-navy-900" />,
    title: 'Certified Excellence',
    description: 'Internationally accredited clinic with multiple certifications and quality assurance standards.',
  },
  {
    icon: <Heart className="w-8 h-8 text-navy-900" />,
    title: 'Ethical Practice',
    description: 'Commitment to transparency, honest consultations, and patient-first approach in all procedures.',
  },
  {
    icon: <Clock className="w-8 h-8 text-navy-900" />,
    title: 'Lifetime Support',
    description: 'Comprehensive aftercare program with lifetime guarantee and ongoing support for optimal results.',
  },
  {
    icon: <Users className="w-8 h-8 text-navy-900" />,
    title: 'Expert Team',
    description: 'Highly skilled surgeons and medical staff with extensive experience in hair restoration.',
  },
];

const achievements = [
  {
    title: 'Harvard Affiliation',
    description: 'Collaboration with Harvard-affiliated medical experts',
    icon: '/images/harvard-logo.png',
  },
  {
    title: 'JCI Accreditation',
    description: 'Meeting the highest international healthcare standards',
    icon: '/images/jci-logo.png',
  },
  {
    title: 'ISO 9001 Certified',
    description: 'Quality management system certification',
    icon: '/images/iso-logo.png',
  },
  {
    title: 'ISHRS Member',
    description: 'International Society of Hair Restoration Surgery',
    icon: '/images/ishrs-logo.png',
  },
];

const techniques = [
  {
    title: 'Sapphire FUE',
    description: 'Advanced precision with sapphire blades for minimal scarring',
    image: '/images/sapphire-fue.jpg',
  },
  {
    title: 'DHI Technique',
    description: 'Direct implantation for maximum density and natural results',
    image: '/images/dhi-technique.jpg',
  },
  {
    title: 'Stem Cell Therapy',
    description: 'Cutting-edge regenerative treatment for enhanced results',
    image: '/images/stem-cell.jpg',
  },
];

const journeySteps = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'Begin with a detailed analysis of your hair loss and personalized treatment plan.',
    image: '/images/consultation.jpg',
  },
  {
    step: '02',
    title: 'Treatment Planning',
    description: 'Customize your procedure based on your unique needs and desired outcomes.',
    image: '/images/planning.jpg',
  },
  {
    step: '03',
    title: 'Expert Care',
    description: 'Experience world-class treatment with our skilled medical team.',
    image: '/images/treatment.jpg',
  },
  {
    step: '04',
    title: 'Lifetime Support',
    description: 'Enjoy ongoing care and support throughout your hair restoration journey.',
    image: '/images/support.jpg',
  },
];

const pressFeatures = [
  { name: 'BBC', logo: '/images/press/bbc.png', link: '#' },
  { name: 'Forbes', logo: '/images/press/forbes.png', link: '#' },
  { name: 'Bloomberg', logo: '/images/press/bloomberg.png', link: '#' },
];

export default function WhyEstenovePage() {
  const scrollToContent = () => {
    const expertiseSection = document.getElementById('expertise');
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Why Choose Estenove"
        description="Discover why Estenove is a global leader in hair transplantation, featuring Harvard collaboration, advanced technology, and a 97% success rate across 50+ countries."
        path="/why-estenove"
        keywords={['hair transplant', 'Harvard collaboration', 'advanced technology', 'global reach']}
        structuredData={generateLocalBusinessSchema()}
        ogImage="/images/why-estenove-og.jpg"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/clinic-hero.jpg"
              alt="Este Nove Clinic"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Why Choose Este Nove for Your Hair Restoration Journey?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              World-Class Expertise, Proven Results, and Global Trust
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={scrollToContent}
              className="inline-flex items-center px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
            >
              Discover Our Difference
              <ChevronDown className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Global Excellence in Hair Restoration
              </h2>
              <p className="text-xl text-gray-600">
                Backed by world-renowned institutions and certifications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <img
                    src={achievement.icon}
                    alt={achievement.title}
                    className="h-16 w-auto mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600">
                Our unique approach to hair restoration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Hair Restoration Journey
              </h2>
              <p className="text-xl text-gray-600">
                A step-by-step guide to achieving your desired results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-16 w-auto mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Techniques Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Hair Restoration Techniques
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge procedures for optimal results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techniques.map((technique, index) => (
                <motion.div
                  key={technique.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={technique.image}
                    alt={technique.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {technique.title}
                    </h3>
                    <p className="text-gray-600">{technique.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured In Global Media
              </h2>
              <p className="text-xl text-gray-600">
                Recognized by leading international publications
              </p>
            </div>
            <div className="flex justify-center items-center space-x-12">
              {pressFeatures.map((press, index) => (
                <motion.a
                  key={press.name}
                  href={press.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grayscale hover:grayscale-0 transition-all"
                >
                  <img
                    src={press.logo}
                    alt={`${press.name} logo`}
                    className="h-12 w-auto"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <GlobalReach />

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Patient Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real experiences from our satisfied patients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'John D.',
                  location: 'United States',
                  image: '/images/testimonials/john.jpg',
                  quote: 'The level of care and expertise at Este Nove is unmatched. My results exceeded all expectations.',
                  rating: 5,
                  procedure: 'Sapphire FUE',
                },
                {
                  name: 'Michael R.',
                  location: 'United Kingdom',
                  image: '/images/testimonials/michael.jpg',
                  quote: 'From consultation to aftercare, every step was handled with utmost professionalism. Highly recommended!',
                  rating: 5,
                  procedure: 'DHI Technique',
                },
                {
                  name: 'Thomas B.',
                  location: 'Germany',
                  image: '/images/testimonials/thomas.jpg',
                  quote: 'The attention to detail and personalized care made all the difference in my transformation journey.',
                  rating: 5,
                  procedure: 'Combined FUE + DHI',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm opacity-90">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm text-gray-500">
                      Procedure: {testimonial.procedure}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Your Journey with Este Nove Today
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Take the first step towards restoring your confidence
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="/consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 border-2 border-white bg-white text-blue-900 rounded-full text-lg font-medium hover:bg-transparent hover:text-white transition-colors"
              >
                Book Free Consultation
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
