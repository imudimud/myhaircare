import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Clock, Calendar, Activity, Heart, AlertCircle } from 'lucide-react';

const recoveryPhases = [
  {
    icon: Clock,
    title: "First 24 Hours",
    description: "Critical initial recovery period requiring careful attention.",
    instructions: [
      "Sleep in a semi-upright position",
      "Apply cold compresses as directed",
      "Take prescribed medications",
      "Avoid touching the transplanted area"
    ],
    restrictions: [
      "No bending or heavy lifting",
      "No alcohol or smoking",
      "Avoid direct water pressure"
    ]
  },
  {
    icon: Calendar,
    title: "Days 2-7",
    description: "Initial healing phase with specific care requirements.",
    instructions: [
      "Begin gentle hair washing (Day 3)",
      "Continue prescribed medications",
      "Attend follow-up appointments",
      "Monitor for any complications"
    ],
    restrictions: [
      "No strenuous exercise",
      "Avoid direct sunlight",
      "No hair products"
    ]
  },
  {
    icon: Activity,
    title: "Weeks 2-4",
    description: "Gradual return to normal activities with continued care.",
    instructions: [
      "Resume light exercise",
      "Regular hair washing routine",
      "Continue protection from sun",
      "Monitor growth progress"
    ],
    restrictions: [
      "No intense workouts",
      "Avoid swimming",
      "Limited sun exposure"
    ]
  },
  {
    icon: Heart,
    title: "Months 2-6",
    description: "Long-term recovery and initial growth phase.",
    instructions: [
      "Resume normal activities",
      "Regular check-ups",
      "Document progress",
      "Follow maintenance routine"
    ],
    restrictions: [
      "Gentle hair styling only",
      "Avoid harsh chemicals",
      "Protect from excessive sun"
    ]
  }
];

const medicationSchedule = [
  {
    name: "Pain Management",
    schedule: "As prescribed, typically 3-5 days",
    notes: "Take with food to prevent stomach upset"
  },
  {
    name: "Antibiotics",
    schedule: "7-10 days course",
    notes: "Complete full course as prescribed"
  },
  {
    name: "Anti-Swelling",
    schedule: "First 3-4 days",
    notes: "Important for comfort and healing"
  },
  {
    name: "Specialized Shampoo",
    schedule: "Starting day 3, as directed",
    notes: "Use lukewarm water, gentle motions"
  }
];

export default function RecoveryGuide() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('patient.recovery.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('patient.recovery.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {recoveryPhases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <phase.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-3">
                  {t(`patient.recovery.phases.${idx}.title`)}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t(`patient.recovery.phases.${idx}.description`)}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t('patient.recovery.instructions')}
                  </h4>
                  <ul className="space-y-2">
                    {phase.instructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t('patient.recovery.restrictions')}
                  </h4>
                  <ul className="space-y-2">
                    {phase.restrictions.map((restriction, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-red-500 mr-2 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="text-gray-600">{restriction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {t('patient.recovery.medications')}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {medicationSchedule.map((med) => (
              <div
                key={med.name}
                className="bg-white rounded-xl p-4"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{med.name}</h4>
                <p className="text-blue-600 text-sm font-medium mb-2">{med.schedule}</p>
                <p className="text-gray-600 text-sm">{med.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
