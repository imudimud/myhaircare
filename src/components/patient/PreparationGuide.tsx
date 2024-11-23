import React from 'react';
import { Calendar, Clock, Ban, Utensils, Pill, Sun } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const preparationSteps = [
  {
    icon: Calendar,
    title: "Two Weeks Before",
    guidelines: [
      {
        instruction: "Avoid Blood Thinners",
        details: "Stop taking aspirin, vitamin E, and other blood-thinning supplements"
      },
      {
        instruction: "Quit Smoking",
        details: "Stop smoking to ensure optimal healing and blood circulation"
      },
      {
        instruction: "Limit Alcohol",
        details: "Avoid alcoholic beverages to improve healing capacity"
      }
    ]
  },
  {
    icon: Pill,
    title: "One Week Before",
    guidelines: [
      {
        instruction: "Medication Review",
        details: "Discuss current medications with our medical team"
      },
      {
        instruction: "Start Supplements",
        details: "Begin prescribed pre-procedure supplements if recommended"
      },
      {
        instruction: "Avoid Hair Treatments",
        details: "Stop using hair dyes, chemicals, or harsh styling products"
      }
    ]
  },
  {
    icon: Utensils,
    title: "Three Days Before",
    guidelines: [
      {
        instruction: "Healthy Diet",
        details: "Maintain a balanced diet rich in proteins and vitamins"
      },
      {
        instruction: "Hydration",
        details: "Increase water intake to prepare for the procedure"
      },
      {
        instruction: "Rest Well",
        details: "Ensure adequate sleep and rest"
      }
    ]
  },
  {
    icon: Clock,
    title: "Day Before",
    guidelines: [
      {
        instruction: "Hair Washing",
        details: "Wash your hair with prescribed shampoo, avoid styling products"
      },
      {
        instruction: "Comfortable Clothing",
        details: "Prepare button-up shirts for easy changing post-procedure"
      },
      {
        instruction: "Fasting Guidelines",
        details: "Follow provided fasting instructions if applicable"
      }
    ]
  },
  {
    icon: Sun,
    title: "Morning Of",
    guidelines: [
      {
        instruction: "Light Breakfast",
        details: "Have a light meal unless instructed otherwise"
      },
      {
        instruction: "Comfortable Attire",
        details: "Wear comfortable, loose-fitting clothing"
      },
      {
        instruction: "Documentation",
        details: "Bring all required medical documents and forms"
      }
    ]
  }
];

export default function PreparationGuide() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('patient.preparation.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('patient.preparation.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {preparationSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-3">{t(`patient.preparation.steps.${step.title}.title`)}</h3>
              </div>

              <div className="space-y-4">
                {step.guidelines.map((guideline, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {t(`patient.preparation.steps.${step.title}.guidelines.${guideline.instruction}`)}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t(`patient.preparation.steps.${step.title}.guidelines.${guideline.details}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <div className="flex items-start">
            <Ban className="h-8 w-8 text-red-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('patient.preparation.restrictions.title')}
              </h3>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "No alcohol for 7 days before procedure",
                  "Avoid blood thinners for 14 days",
                  "No smoking for at least 2 weeks",
                  "Stop using hair products 3 days before",
                  "No caffeine 24 hours before procedure",
                  "Avoid sun exposure for 3 days before"
                ].map((restriction, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-red-500 rounded-full mr-2" />
                    <span className="text-gray-700">{t(`patient.preparation.restrictions.${restriction}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
