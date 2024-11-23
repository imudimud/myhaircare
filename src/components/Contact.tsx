import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

const languages = [
  'English',
  'French',
  'Turkish',
  'Arabic',
  'Polish',
  'Swedish',
  'Persian',
  'Azeri',
  'Russian'
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your free consultation or ask any questions about our procedures
            </p>

            <div className="space-y-6 mb-8">
              <ContactInfo
                icon={<Phone />}
                title="Phone"
                content="+90 (212) 345-6789"
                link="tel:+902123456789"
              />
              <ContactInfo
                icon={<Mail />}
                title="Email"
                content="info@estenove.com"
                link="mailto:info@estenove.com"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                content="Levent, Istanbul, Turkey"
              />
              <ContactInfo
                icon={<Clock />}
                title="Working Hours"
                content="Mon - Sat: 8:00 - 19:00"
              />
              <ContactInfo
                icon={<Globe />}
                title="Languages"
                content="English, French, Turkish, Arabic, Polish, Swedish, Persian, Azeri, Russian."
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input label="First Name" type="text" />
                <Input label="Last Name" type="text" />
              </div>
              <Input label="Email" type="email" />
              <Input label="Phone" type="tel" />
              
              {/* Language Preference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select a language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date and Time */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <option value="">Select a time</option>
                    {Array.from({ length: 12 }, (_, i) => i + 8).map((hour) => (
                      <option key={hour} value={`${hour}:00`}>
                        {hour}:00
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tell us about your hair restoration goals..."
                />
              </div>
              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, content, link }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}) {
  const ContentWrapper = link ? 'a' : 'div';
  
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 rounded-xl">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-blue-600' })}
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <ContentWrapper
          href={link}
          className={link ? 'text-blue-600 hover:text-blue-700' : 'text-gray-600'}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}