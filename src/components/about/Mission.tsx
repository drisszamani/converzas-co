'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import Image from 'next/image';

export const Mission = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
          
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              At Converzas, we envision a future where businesses of all sizes can harness the power of artificial intelligence to automate workflows, enhance customer experiences, and make data-driven decisions with confidence.
            </p>
            
            <p>
              We believe that AI should be accessible, practical, and tailored to your unique business challenges. Our mission is to demystify AI and make it work for you, not the other way around.
            </p>
            
            <p>
              By combining cutting-edge technology with deep industry expertise, we create solutions that deliver measurable results and give our clients a competitive edge in an increasingly digital world.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px]"
        >
          <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-lg">Vision Image</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}; 