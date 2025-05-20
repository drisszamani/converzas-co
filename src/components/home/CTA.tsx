'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export const CTA = () => {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-700/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-600/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your <span className="text-primary-200">Business</span> with Intelligent Automation?
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 md:mb-10">
              Get in touch today to schedule a free consultation and discover how Converzas can help you automate workflows and drive growth with custom AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-primary-900 hover:bg-primary-50 shadow-lg"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span>Book a Demo</span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary-600/30 rounded-2xl backdrop-blur-sm transform rotate-6"></div>
              <div className="absolute inset-0 bg-white/90 rounded-2xl shadow-xl overflow-hidden">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">CTA Image (600×600px)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}; 