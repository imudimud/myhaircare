import React from 'react';
import { Award, Users, Building2, GraduationCap, CheckCircle } from 'lucide-react';

const ACHIEVEMENTS = [
  "ISHRS Certified Medical Team",
  "Turkish Ministry of Health Approved",
  "ISO 9001:2015 Certified Facility",
  "International Patient Safety Standards"
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">About Estenove</h2>
            <p className="text-blue-100">
              With two decades of experience in hair restoration, we combine cutting-edge technology
              with artistic expertise to deliver natural results at accessible prices.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium mb-6">
              <Award className="w-5 h-5" />
              Globally Recognized Excellence
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Two Decades of Transforming Lives Through Excellence
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              As pioneers in hair restoration, we combine cutting-edge technology with
              artistic expertise to deliver natural results at accessible prices.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Stat icon={<Award />} label="Success Rate" value="98%" />
              <Stat icon={<Users />} label="Global Patients" value="40+ Countries" />
              <Stat icon={<Building2 />} label="Facility Rating" value="JCI Accredited" />
              <Stat icon={<GraduationCap />} label="Surgeon Experience" value="20+ Years" />
            </div>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=60"
              alt="Modern medical facility"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&auto=format&fit=crop&q=60"
                  alt="Dr. Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">Dr. Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Lead Hair Restoration Surgeon</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our commitment to excellence and patient satisfaction drives everything we do."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-100 rounded-xl">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-blue-600' })}
      </div>
      <div>
        <div className="font-bold">{value}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  );
}