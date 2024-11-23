import React from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  patientAge: string;
  procedureType: string;
  graftsCount: string;
  timeframe: string;
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  beforeImage,
  afterImage,
  patientAge,
  procedureType,
  graftsCount,
  timeframe
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src={beforeImage}
            alt="Before procedure"
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={afterImage}
            alt="After procedure"
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            After
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Age</span>
            <p className="font-semibold">{patientAge}</p>
          </div>
          <div>
            <span className="text-gray-500">Procedure</span>
            <p className="font-semibold">{procedureType}</p>
          </div>
          <div>
            <span className="text-gray-500">Grafts</span>
            <p className="font-semibold">{graftsCount}</p>
          </div>
          <div>
            <span className="text-gray-500">Timeframe</span>
            <p className="font-semibold">{timeframe}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function BeforeAfter() {
  const results = [
    {
      beforeImage: "https://example.com/before1.jpg",
      afterImage: "https://example.com/after1.jpg",
      patientAge: "35 years",
      procedureType: "FUE",
      graftsCount: "3000",
      timeframe: "12 months"
    },
    {
      beforeImage: "https://example.com/before2.jpg",
      afterImage: "https://example.com/after2.jpg",
      patientAge: "42 years",
      procedureType: "Combined",
      graftsCount: "4200",
      timeframe: "12 months"
    },
    {
      beforeImage: "https://example.com/before3.jpg",
      afterImage: "https://example.com/after3.jpg",
      patientAge: "28 years",
      procedureType: "FUE",
      graftsCount: "2800",
      timeframe: "12 months"
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-blue-600 py-20 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Before & After Gallery</h2>
            <p className="text-blue-100">
              Explore our collection of real patient transformations and success stories.
              These results showcase the quality and natural appearance of our work.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <BeforeAfterImage key={index} {...result} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Results may vary. All before and after images are from real patients
            who have given consent for their photos to be published.
          </p>
        </div>
      </div>
    </section>
  );
}
