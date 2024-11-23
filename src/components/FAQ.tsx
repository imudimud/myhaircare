import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "How long does the procedure take?",
    answer: "The procedure typically takes 6-8 hours, depending on the number of grafts. We perform all transplants in a single session for your convenience."
  },
  {
    question: "When will I see results?",
    answer: "Initial growth begins around 3-4 months, with final results visible after 12-14 months. The transplanted hair grows naturally and permanently."
  },
  {
    question: "Is the procedure painful?",
    answer: "The procedure is performed under local anesthesia, ensuring you're comfortable throughout. Most patients report minimal discomfort during recovery."
  },
  {
    question: "How long is the recovery period?",
    answer: "Most patients return to work after 3-5 days. The donor area heals within 7-10 days, and any visible signs of the procedure fade within 2 weeks."
  },
  {
    question: "Are the results permanent?",
    answer: "Yes, transplanted hair is permanent as it's taken from DHT-resistant areas. The results last a lifetime with proper care and maintenance."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our procedures and process
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}