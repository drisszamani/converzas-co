'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <Section className="bg-primary-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Transform Your Business with AI?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-primary-100 mb-8 md:mb-10"
        >
          Get in touch today to schedule a free consultation and discover how Converzas can help you automate workflows and drive growth with custom AI solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-primary-900 hover:bg-primary-50"
          >
            <span>Get Started Now</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}; 