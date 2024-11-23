import React, { useState } from 'react';
import { Calendar, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

type ConsultationFormData = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  language: string;
};

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    language: 'English',
  });

  const languages = [
    'English',
    'French',
    'Turkish',
    'Arabic',
    'Polish',
    'Swedish',
    'Persian',
    'Azeri',
    'Russian',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm"
    >
      <section id="consultation" className="bg-white">
        <div className="bg-blue-600 py-20 mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Book Your Free Consultation</h2>
              <p className="text-blue-100">
                Take the first step towards your hair restoration journey. Our expert team
                is here to guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Preferred Language
                </label>
                <select
                  name="language"
                  id="language"
                  required
                  value={formData.language}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <div className="relative mt-1">
                  <input
                    type="date"
                    name="preferredDate"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                  Preferred Time
                </label>
                <div className="relative mt-1">
                  <input
                    type="time"
                    name="preferredTime"
                    id="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    min="08:00"
                    max="19:00"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tell us about your concerns or ask any questions..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
