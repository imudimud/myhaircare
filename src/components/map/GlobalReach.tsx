import React from 'react';
import { motion } from 'framer-motion';

interface CountryData {
  name: string;
  patients: number;
  coordinates: [number, number];
}

const countries: CountryData[] = [
  { name: 'United States', patients: 2500, coordinates: [40, -100] },
  { name: 'United Kingdom', patients: 1800, coordinates: [54, -2] },
  { name: 'Germany', patients: 1500, coordinates: [51, 10] },
  { name: 'France', patients: 1200, coordinates: [46, 2] },
  { name: 'Australia', patients: 900, coordinates: [-25, 133] },
  { name: 'Canada', patients: 800, coordinates: [56, -106] },
  { name: 'UAE', patients: 700, coordinates: [24, 54] },
  // Add more countries as needed
];

export default function GlobalReach() {
  return (
    <div className="relative py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Trust & Recognition
          </h2>
          <p className="text-xl text-gray-600">
            Serving patients from over 50 countries worldwide
          </p>
        </div>

        <div className="relative h-[600px] bg-white rounded-xl shadow-lg p-8">
          {/* World Map SVG */}
          <div className="absolute inset-0 p-8">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
            >
              {/* Add your world map SVG path here */}
              <path
                d="M..."
                className="fill-blue-100 stroke-blue-200"
              />
              
              {/* Location Markers */}
              {countries.map((country, index) => (
                <motion.g
                  key={country.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  transform={`translate(${country.coordinates[1] * 2.8 + 500}, ${country.coordinates[0] * -2.8 + 250})`}
                >
                  <circle
                    r="6"
                    className="fill-blue-600"
                    filter="url(#glow)"
                  />
                  <circle
                    r="12"
                    className="fill-blue-600 opacity-20 animate-ping"
                  />
                  <text
                    x="10"
                    y="5"
                    className="text-xs font-medium fill-gray-700"
                  >
                    {country.name}
                  </text>
                </motion.g>
              ))}

              {/* Glow filter */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {countries.slice(0, 4).map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-900">
                    {country.patients}+
                  </div>
                  <div className="text-sm text-gray-600">
                    Patients from {country.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
