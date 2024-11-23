import React from 'react';
import { Check } from 'lucide-react';

export default function HairTransplantOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Hair Transplant Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FUE Method */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">FUE Method</h3>
            <p className="text-gray-600 mb-4">
              Follicular Unit Extraction is a modern technique that extracts individual hair follicles
              for natural-looking results with minimal scarring.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Minimal scarring</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Natural results</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Quick recovery</span>
              </li>
            </ul>
          </div>

          {/* FUT Method */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">FUT Method</h3>
            <p className="text-gray-600 mb-4">
              Follicular Unit Transplantation involves transplanting hair follicles in their natural groupings
              for optimal coverage and density.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Maximum coverage</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Cost-effective</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>High success rate</span>
              </li>
            </ul>
          </div>

          {/* Combined Techniques */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Combined Techniques</h3>
            <p className="text-gray-600 mb-4">
              Our experts may recommend combining different methods to achieve
              optimal results based on your specific needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Customized approach</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Best of both methods</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Optimal results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
