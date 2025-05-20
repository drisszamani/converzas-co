'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

export const ServicesHero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Our AI Automation Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-700 mb-8"
          >
            Discover how our custom AI solutions can streamline your workflows, improve customer experiences, and drive business growth through intelligent automation.
          </motion.p>
        </div>
      </Container>
    </div>
  );
}; 