'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import Image from 'next/image';

export const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute top-0 -z-10 h-full w-full bg-gradient-to-b from-blue-50/70"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary-700 bg-primary-50 rounded-full">
              Next-Generation AI Automation
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Transform Your Business with <span className="text-primary-600">AI Automation</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
            className="max-w-2xl mx-auto text-xl text-gray-600 mb-8 md:mb-12"
          >
            We build custom AI solutions that automate your workflows, increase productivity, and drive growth. Let AI handle the repetitive tasks while you focus on innovation.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" size="lg">
              Get Started
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Solutions
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-16 md:mt-24 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="AI Automation Dashboard"
              width={1200}
              height={675}
              priority
              className="w-full h-auto"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 p-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Productivity +127%</span>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 p-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Cost Reduction -45%</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}; 