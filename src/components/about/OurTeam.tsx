import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Users, Star, Globe2 } from 'lucide-react';

// Team member data
const leadExperts = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Chief Medical Officer & Lead Hair Transplant Surgeon',
    certifications: ['ISHRS Member', 'JCI Certified', 'Turkish Medical Board'],
    bio: 'With over 15 years of experience in hair restoration, Dr. Johnson has performed more than 5,000 successful procedures. Her innovative approach combines artistry with surgical precision.',
    image: '/images/team/dr-sarah.jpg',
  },
  {
    name: 'Dr. Mehmet Yilmaz',
    title: 'Senior Hair Transplant Surgeon',
    certifications: ['ISHRS Member', 'European Board of Hair Restoration Surgery'],
    bio: 'Specializing in FUE and DHI techniques, Dr. Yilmaz brings 12 years of expertise in natural hairline design and challenging restoration cases.',
    image: '/images/team/dr-mehmet.jpg',
  },
];

const medicalTeam = [
  { role: 'Anesthesiologists', count: 3 },
  { role: 'Specialized Nurses', count: 8 },
  { role: 'Patient Care Coordinators', count: 5 },
  { role: 'Medical Technicians', count: 6 },
];

const achievements = [
  { metric: '20+', label: 'Years Experience' },
  { metric: '15,000+', label: 'Procedures' },
  { metric: '50+', label: 'Countries Served' },
  { metric: '98%', label: 'Success Rate' },
];

const testimonials = [
  {
    quote: "The entire team was incredibly professional and caring. Dr. Johnson's expertise was evident from the first consultation.",
    author: "Michael R.",
    location: "United Kingdom",
    rating: 5
  },
  {
    quote: "What impressed me most was how the team worked together seamlessly. Every step was explained clearly and professionally.",
    author: "Andreas S.",
    location: "Germany",
    rating: 5
  },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Meet the Experts Behind Your Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            World-Class Professionals Dedicated to Excellence in Hair Restoration
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <button className="text-white hover:text-blue-200 transition-colors">
              Learn About Our Team
            </button>
            <ChevronDown className="mt-4 animate-bounce" size={24} />
          </motion.div>
        </div>
      </section>

      {/* Lead Experts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Lead Experts</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {leadExperts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{expert.title}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.certifications.map(cert => (
                      <span key={cert} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{expert.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team Overview */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Medical Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {medicalTeam.map((team, index) => (
              <motion.div
                key={team.role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">{team.count}</h3>
                <p className="text-gray-600">{team.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{achievement.metric}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <img src="/images/certifications/ishrs.png" alt="ISHRS" className="h-16" />
            <img src="/images/certifications/jci.png" alt="JCI" className="h-16" />
            <img src="/images/certifications/ministry.png" alt="Turkish Ministry of Health" className="h-16" />
          </div>
        </div>
      </section>

      {/* Patient-Centered Care */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Patient-Centered Care</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">Every patient receives a customized treatment plan tailored to their unique needs and goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
                  <p className="text-gray-600">Our team speaks multiple languages to ensure clear communication with international patients.</p>
                </div>
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/images/team/patient-care.jpg"
              alt="Patient Care"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Patients Say</h2>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Trust Este Nove's Experts for Your Hair Restoration Journey
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Meet the Team in Person
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
