import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "James Wilson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=60",
    text: "The entire experience exceeded my expectations. From the initial consultation to the final follow-up, the team was professional and caring.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=60",
    text: "Best decision I ever made. The results are completely natural-looking, and the recovery was much easier than I expected.",
    rating: 5
  },
  {
    name: "David Miller",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop&q=60",
    text: "The attention to detail and personalized care were outstanding. The results have transformed my confidence completely.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Patient Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied patients about their transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, location, image, text, rating }: {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
      
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-blue-500 fill-current" />
        ))}
      </div>

      <p className="text-gray-600">{text}</p>
    </div>
  );
}