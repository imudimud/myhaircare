import React from 'react';
import { Calendar, CheckCircle2, AlertCircle, Stethoscope, Heart, Activity } from 'lucide-react';

const preOperativeSteps = [
  {
    title: "Initial Consultation",
    description: "Comprehensive medical evaluation and personalized treatment planning.",
    points: [
      "Medical history review",
      "Scalp examination",
      "Treatment options discussion",
      "Expectations setting"
    ]
  },
  {
    title: "Pre-Procedure Tests",
    description: "Essential medical tests to ensure your safety during the procedure.",
    points: [
      "Blood tests",
      "ECG if required",
      "Scalp analysis",
      "Photo documentation"
    ]
  },
  {
    title: "Preparation Guidelines",
    description: "Instructions to follow before your procedure.",
    points: [
      "Medication adjustments",
      "Lifestyle modifications",
      "Dietary guidelines",
      "Hair care instructions"
    ]
  }
];

const postOperativeSteps = [
  {
    title: "Immediate Aftercare",
    description: "Critical care instructions for the first few days after the procedure.",
    points: [
      "Sleeping position guidance",
      "Wound care instructions",
      "Pain management",
      "Activity restrictions"
    ]
  },
  {
    title: "Recovery Period",
    description: "What to expect during the healing process.",
    points: [
      "Timeline of recovery",
      "Normal healing signs",
      "When to resume activities",
      "Hair washing protocol"
    ]
  },
  {
    title: "Long-term Care",
    description: "Maintaining your results for the long term.",
    points: [
      "Follow-up schedule",
      "Hair care routine",
      "Lifestyle recommendations",
      "Growth timeline"
    ]
  }
];

function CareSection({ title, steps }: { title: string; steps: any[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h4>
            <p className="text-gray-600 mb-4">{step.description}</p>
            <ul className="space-y-2">
              {step.points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CareProtocols() {
  return (
    <section className="bg-white">
      <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Pre & Post-Operative Care Protocols</h2>
            <p className="text-blue-100">
              Our comprehensive care protocols ensure optimal results and a smooth recovery
              process for all our patients.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <CareSection title="Pre-Operative Care" steps={preOperativeSteps} />
        <CareSection title="Post-Operative Care" steps={postOperativeSteps} />

        <div className="bg-blue-50 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            24/7 Patient Support
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Our medical team is available around the clock to address any concerns
            during your recovery period.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                text: "Medical Consultation"
              },
              {
                icon: Heart,
                text: "Personalized Care"
              },
              {
                icon: Activity,
                text: "Recovery Monitoring"
              },
              {
                icon: AlertCircle,
                text: "Emergency Support"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-xl"
              >
                <item.icon className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
