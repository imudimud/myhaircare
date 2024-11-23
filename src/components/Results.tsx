import React, { useState, useCallback, memo, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Users, Activity, Sparkles, Timer, Droplets, Brain, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const RESULTS = [
  {
    id: 1,
    before: "https://www.estenove.com/wp-content/uploads/2024/02/man-fue-4400-grafts-hair-transplant-before-and-after.jpg",
    after: "https://www.estenove.com/wp-content/uploads/2024/02/man-4200-grafts-hair-transplant-before-and-after.jpg",
    description: "Significant improvement after 12 months",
    category: "FUE",
    patientAge: 35,
    grafts: 4400,
    monthsAfter: 12,
    procedureType: "FUE Hair Transplant",
    details: "Patient received 4400 grafts using FUE technique. The procedure focused on rebuilding the frontal hairline and increasing overall density."
  },
  {
    id: 2,
    before: "https://www.estenove.com/wp-content/uploads/2024/02/man-fue-4000-grafts-hair-transplant-before-and-after.jpg",
    after: "https://www.estenove.com/wp-content/uploads/2024/02/man-3700-graft-dhi-hair-transplant-before-after.jpg",
    description: "Natural hairline restoration",
    category: "DHI",
    patientAge: 42,
    grafts: 4000,
    monthsAfter: 10,
    procedureType: "DHI Hair Transplant",
    details: "DHI technique was used to achieve maximum density and natural-looking hairline. The procedure included 4000 grafts with custom angle control."
  },
  {
    id: 3,
    before: "https://www.estenove.com/wp-content/uploads/2024/02/dhi-3500-grafts-before-after.jpg",
    after: "https://www.estenove.com/wp-content/uploads/2024/03/beforeafterhairtransplant3.jpg",
    description: "Crown area density improvement",
    category: "Combined",
    patientAge: 38,
    grafts: 3500,
    monthsAfter: 14,
    procedureType: "Combined FUE + DHI",
    details: "Combined approach using FUE and DHI techniques to address both crown area and hairline. Treatment included PRP therapy for enhanced results."
  }
];

const TIMELINE_INFO = [
  {
    title: "4 Months Post-Transplant",
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    points: [
      "Initial regrowth begins with fine, short hair",
      "Reduced scalp sensitivity",
      "Normal shedding phase (shock loss) may occur",
      "Early stages of transformation visible"
    ]
  },
  {
    title: "7 Months Post-Transplant",
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    points: [
      "50-60% of transplanted hair emerging",
      "Noticeable improvement in density",
      "Different hair textures may appear",
      "Continued progress towards full growth"
    ]
  }
];

const GRAFT_INFO = [
  {
    title: "8000 Grafts",
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    content: "An extensive procedure requiring meticulous planning and execution. Suitable for significant hair loss cases, with longer recovery times but potentially fuller results.",
    points: [
      "Complex, time-consuming procedure",
      "Requires experienced surgical team",
      "May need multiple sessions",
      "Extensive coverage possible"
    ]
  },
  {
    title: "7000 Grafts",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    content: "Typically sufficient for most cases, depending on individual needs and goals. Success depends on various factors including hair characteristics and donor area capacity.",
    points: [
      "Average donor area capacity",
      "Suitable for moderate hair loss",
      "Depends on hair characteristics",
      "Customizable to individual needs"
    ]
  }
];

const CARE_INSTRUCTIONS = {
  title: "Post-Transplant Care Guide",
  icon: <Sparkles className="w-8 h-8 text-blue-600" />,
  phases: [
    {
      title: "Initial Phase (First Few Days)",
      instructions: [
        "Moisturize with isotonic solution for 48 hours",
        "First wash at clinic after 48 hours",
        "Follow clinic's specific instructions"
      ]
    },
    {
      title: "First Month",
      instructions: [
        "Use prescribed medical shampoo only",
        "Follow specific washing technique",
        "Gentle handling of transplanted area"
      ]
    },
    {
      title: "After First Month",
      instructions: [
        "Transition to gentle, natural shampoo",
        "Regular washing based on hair type",
        "Careful scab management by day 10"
      ]
    }
  ]
};

const MINOXIDIL_INFO = {
  title: "Minoxidil Usage Post-Transplant",
  icon: <Droplets className="w-8 h-8 text-blue-600" />,
  points: [
    "Helps preserve existing hair",
    "Recommended for long-term maintenance",
    "Individual needs may vary",
    "Consult specialist for personalized advice"
  ]
};

const preloadImage = (src: string): Promise<void> => 
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });

const ImageComparison = memo(({ beforeImage, afterImage, beforeAlt, afterAlt, loading = 'lazy' }: {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  loading?: 'lazy' | 'eager';
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      preloadImage(beforeImage),
      preloadImage(afterImage)
    ]).then(() => setIsLoaded(true));
  }, [beforeImage, afterImage]);

  if (!isLoaded) {
    return <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />;
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={beforeImage}
        alt={beforeAlt}
        loading={loading}
        className="w-full h-full object-cover"
      />
      <img
        src={afterImage}
        alt={afterAlt}
        loading={loading}
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
});

ImageComparison.displayName = 'ImageComparison';

const ResultModal = memo(({ result, onClose }: { result: typeof RESULTS[0]; onClose: () => void }) => {
  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl max-w-4xl w-full p-6 overflow-auto max-h-[90vh]"
        onClick={handleContentClick}
      >
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 w-full rounded-lg"/>}>
          <div className="sticky top-0 flex justify-between items-center mb-4 bg-white z-10">
            <h3 className="text-2xl font-bold text-gray-900">Patient Results</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold">{result.description}</h4>
            <p className="text-gray-600">{result.details}</p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{result.procedureType}</span>
              <span>{result.grafts} grafts</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Age: {result.patientAge}</span>
              <span>Months after: {result.monthsAfter}</span>
            </div>
          </div>
        </Suspense>
      </motion.div>
    </motion.div>
  );
});

ResultModal.displayName = 'ResultModal';

const GalleryFilter = memo(({ categories, activeCategory, onCategoryChange }: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8" role="tablist">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          role="tab"
          aria-selected={activeCategory === category}
          aria-controls={`gallery-${category}`}
          id={`tab-${category}`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
});

GalleryFilter.displayName = 'GalleryFilter';

const ResultCard = memo(({ result }: { result: typeof RESULTS[0] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
        onClick={handleClick}
      >
        <div className="relative aspect-[4/3]">
          <Suspense fallback={<div className="absolute inset-0 bg-gray-100 animate-pulse" />}>
            <ImageComparison
              beforeImage={result.before}
              afterImage={result.after}
              beforeAlt="Before procedure"
              afterAlt="After procedure"
              loading="lazy"
            />
          </Suspense>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{result.description}</h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{result.procedureType}</span>
            <span>{result.grafts} grafts</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-full max-w-4xl">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/3" />
                <div className="h-64 bg-gray-200 rounded" />
                <div className="h-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        }>
          <ResultModal result={result} onClose={handleClose} />
        </Suspense>
      )}
    </>
  );
});

ResultCard.displayName = 'ResultCard';

const TimelineCard = memo(({ title, icon, points }: {
  title: string;
  icon: React.ReactNode;
  points: string[];
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1.5">•</div>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

TimelineCard.displayName = 'TimelineCard';

const InfoCard = memo(({ title, icon, content, points }: {
  title: string;
  icon: React.ReactNode;
  content: string;
  points: string[];
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-gray-600 mb-6">{content}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1.5">•</div>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

InfoCard.displayName = 'InfoCard';

const CheckIcon = memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
});

CheckIcon.displayName = 'CheckIcon';

export default function Results() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(RESULTS.map(result => result.category))];
  
  const filteredResults = activeCategory === 'All'
    ? RESULTS
    : RESULTS.filter(result => result.category === activeCategory);

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hair Transplant Results
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our gallery of successful hair transplant procedures. Each case demonstrates our commitment to natural-looking, lasting results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Gallery Filter */}
        <div className="py-8">
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>

        {/* Timeline Information */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Recovery Timeline</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {TIMELINE_INFO.map((info, index) => (
              <TimelineCard key={index} {...info} />
            ))}
          </div>
        </div>

        {/* Graft Information */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Understanding Graft Numbers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {GRAFT_INFO.map((info, index) => (
              <InfoCard key={index} {...info} />
            ))}
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">{CARE_INSTRUCTIONS.title}</h3>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex justify-center mb-8">{CARE_INSTRUCTIONS.icon}</div>
            <div className="grid md:grid-cols-3 gap-8">
              {CARE_INSTRUCTIONS.phases.map((phase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-4">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.instructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5">•</div>
                        <span className="text-gray-600">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minoxidil Information */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">{MINOXIDIL_INFO.title}</h3>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">{MINOXIDIL_INFO.icon}</div>
            <ul className="space-y-4">
              {MINOXIDIL_INFO.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            View More Results
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}