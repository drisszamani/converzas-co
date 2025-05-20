'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'Email',
      info: 'hello@converzas.com',
      link: 'mailto:hello@converzas.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Phone',
      info: '+1 (555) 234-5678',
      link: 'tel:+15552345678',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Location',
      info: '123 Innovation Drive, Tech City, TC 98765',
      link: 'https://maps.google.com',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Business Hours',
      info: 'Monday-Friday: 9AM - 6PM',
      link: null,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start"
          >
            <div className="bg-primary-50 p-3 rounded-lg mr-4">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{detail.title}</h3>
              {detail.link ? (
                <a 
                  href={detail.link} 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {detail.info}
                </a>
              ) : (
                <p className="text-gray-600">{detail.info}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}; 