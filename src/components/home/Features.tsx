'use client';

import { motion } from 'framer-motion';
import { Cpu, BarChart, Users, Clock, Shield, Globe } from 'lucide-react';

const features = [
  {
    name: 'Intelligent Automation',
    description: 'Automate complex workflows with AI that adapts and learns from your business processes.',
    icon: Cpu,
  },
  {
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    icon: BarChart,
  },
  {
    name: 'Customer Experience',
    description: 'Deliver personalized experiences at scale with AI-powered customer interaction systems.',
    icon: Users,
  },
  {
    name: 'Operational Efficiency',
    description: 'Reduce manual tasks and streamline operations for greater productivity and cost savings.',
    icon: Clock,
  },
  {
    name: 'Secure Implementation',
    description: 'Enterprise-grade security protocols protect your data throughout the automation process.',
    icon: Shield,
  },
  {
    name: 'Scalable Solutions',
    description: 'Our solutions grow with your business, from startup to enterprise.',
    icon: Globe,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive AI Automation Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Powerful tools to transform your business operations and drive growth
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg mb-5 flex items-center justify-center text-primary-600">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 