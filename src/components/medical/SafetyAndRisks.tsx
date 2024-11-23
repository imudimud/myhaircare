import React from 'react';
import { Shield, AlertCircle, Heart } from 'lucide-react';

export default function SafetyAndRisks() {
  return (
    <section className="bg-white">
      <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Safety Information & Risk Management</h2>
            <p className="text-blue-100">
              We prioritize patient safety and transparency in all our procedures.
              Understanding both benefits and risks is crucial for informed decision-making.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Prevention */}
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Prevention</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>Comprehensive medical screening</li>
              <li>Strict sterilization protocols</li>
              <li>Advanced safety equipment</li>
              <li>Expert medical team</li>
            </ul>
          </div>

          {/* Potential Risks */}
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold">Potential Risks</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>Temporary swelling</li>
              <li>Minor discomfort</li>
              <li>Temporary numbness</li>
              <li>Post-operative care requirements</li>
            </ul>
          </div>

          {/* Management */}
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Management</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>24/7 medical support</li>
              <li>Detailed aftercare instructions</li>
              <li>Regular follow-up appointments</li>
              <li>Emergency contact availability</li>
            </ul>
          </div>
        </div>

        {/* Safety Commitment */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Safety Commitment</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Medical Standards</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Joint Commission International (JCI) accredited</li>
                <li>✓ ISO certified medical facilities</li>
                <li>✓ Regular safety audits and updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Patient Protection</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Comprehensive insurance coverage</li>
                <li>✓ Transparent risk disclosure</li>
                <li>✓ Patient advocacy program</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
