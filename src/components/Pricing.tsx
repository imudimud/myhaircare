import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PACKAGES = [
  {
    name: "Essential",
    price: "2,500",
    features: [
      "Sapphire FUE procedure",
      "2000 grafts",
      "Local anesthesia",
      "2 nights hotel stay",
      "Airport transfers",
      "Post-op care kit"
    ]
  },
  {
    name: "Premium",
    price: "3,500",
    features: [
      "DHI or Sapphire FUE",
      "3000 grafts",
      "Local anesthesia",
      "3 nights luxury hotel",
      "VIP airport transfers",
      "Post-op care kit",
      "PRP treatment included",
      "1 year follow-up care"
    ],
    popular: true
  },
  {
    name: "VIP",
    price: "4,500",
    features: [
      "DHI or Sapphire FUE",
      "Unlimited grafts",
      "Local anesthesia",
      "5 nights luxury hotel",
      "Private transfers",
      "Deluxe care kit",
      "PRP treatment included",
      "2 years follow-up care",
      "Personal coordinator"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">All-Inclusive Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees, including procedure, accommodation, and transfers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, index) => (
            <PriceCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCard({ name, price, features, popular }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`
      relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow
      ${popular ? 'ring-2 ring-blue-600' : ''}
    `}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="text-4xl font-bold mb-2">€{price}</div>
        <p className="text-gray-600">All-inclusive package</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`
        w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
        ${popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }
      `}>
        Get Started
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}