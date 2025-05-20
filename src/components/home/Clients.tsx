'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import Image from 'next/image';
import { StarIcon } from 'lucide-react';

export const Clients = () => {
  const clientLogos = [
    { name: 'Company 1', logo: '/images/client-logo-1.svg' },
    { name: 'Company 2', logo: '/images/client-logo-2.svg' },
    { name: 'Company 3', logo: '/images/client-logo-3.svg' },
    { name: 'Company 4', logo: '/images/client-logo-4.svg' },
    { name: 'Company 5', logo: '/images/client-logo-5.svg' },
  ];

  const testimonials = [
    {
      quote: "Implementing Converzas' AI automation solution has transformed our customer service. Response times are down 75% and customer satisfaction is up 40%.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "TechGrowth Inc.",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote: "The workflow automation tools have eliminated hours of manual data entry for our team. We're saving over 30 hours per week and seeing far fewer errors.",
      author: "Michael Chen",
      position: "CTO",
      company: "InnovateCorp",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote: "What impressed me most was how quickly the Converzas team understood our unique challenges and built a custom solution that perfectly fit our needs.",
      author: "Jessica Martinez",
      position: "Marketing Director",
      company: "GlobalBrand",
      image: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <div>
      {/* Client Logos Section */}
      <Section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with businesses of all sizes to deliver cutting-edge AI automation solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="h-12 w-auto">
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{client.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}; 