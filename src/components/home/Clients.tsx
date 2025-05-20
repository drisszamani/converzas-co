'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export const Clients = () => {
  // Client logo placeholders - replace with actual client logos
  const clientLogos = [
    { name: 'Company 1', logo: '/images/client-logo-1.svg' },
    { name: 'Company 2', logo: '/images/client-logo-2.svg' },
    { name: 'Company 3', logo: '/images/client-logo-3.svg' },
    { name: 'Company 4', logo: '/images/client-logo-4.svg' },
    { name: 'Company 5', logo: '/images/client-logo-5.svg' },
    { name: 'Company 6', logo: '/images/client-logo-6.svg' },
  ];

  const testimonials = [
    {
      quote: "Implementing Converzas' AI automation solution has transformed our customer service workflow. Response times are down 75% and customer satisfaction is up 40%.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "TechGrowth Inc.",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "The workflow automation tools have eliminated hours of manual data entry for our team. We're saving over 30 hours per week and seeing far fewer errors.",
      author: "Michael Chen",
      position: "CTO",
      company: "InnovateCorp",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "What impressed me most was how quickly the Converzas team understood our unique challenges and built a custom solution that perfectly fit our needs.",
      author: "Jessica Martinez",
      position: "Marketing Director",
      company: "GlobalBrand",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Client Logos Section */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-3"
            >
              Trusted Partners
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Powering Innovation for Industry Leaders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We partner with businesses of all sizes to deliver cutting-edge AI automation solutions.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative py-10 px-4 rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 opacity-5">
              <div className="w-full h-full bg-primary-900 rounded-full"></div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 opacity-5">
              <div className="w-full h-full bg-primary-900 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center relative z-10">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                >
                  <div className="h-16 w-auto flex items-center justify-center">
                    {/* Replace with actual logo images */}
                    <div className="w-32 h-12 bg-gray-100 rounded-md flex items-center justify-center shadow-sm">
                      <span className="text-gray-500 font-medium text-sm">{client.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-3"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Don't just take our word for it. Here's what our clients have to say about our AI solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-400"></div>
                <div className="absolute -right-5 -top-5 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-20 h-20 text-primary-900" strokeWidth={1} />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="mr-4 rounded-full overflow-hidden border-2 border-primary-100">
                    {/* Replace with actual images */}
                    <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.position}, <span className="text-primary-700">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a 
              href="/case-studies" 
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium transition-colors"
            >
              <span>View all case studies</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}; 