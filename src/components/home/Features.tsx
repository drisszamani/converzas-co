'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Bot, BarChart3, Workflow, Zap, Eye, ArrowUpRight } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Bot className="w-10 h-10 text-primary-600" />,
      title: 'AI Chatbots',
      description: 'Custom conversational AI solutions tailored to your business needs and brand voice.',
      link: '/services',
    },
    {
      icon: <Workflow className="w-10 h-10 text-primary-600" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline your business processes with AI.',
      link: '/services',
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary-600" />,
      title: 'Data Analysis',
      description: 'Extract meaningful insights from your data with AI-powered analytics tools.',
      link: '/services',
    },
    {
      icon: <Zap className="w-10 h-10 text-primary-600" />,
      title: 'API Integration',
      description: 'Seamlessly connect your AI solutions with existing systems and applications.',
      link: '/services',
    },
    {
      icon: <Eye className="w-10 h-10 text-primary-600" />,
      title: 'Computer Vision',
      description: 'Leverage image recognition and processing for enhanced automation.',
      link: '/services',
    },
    {
      icon: <Bot className="w-10 h-10 text-primary-600" />,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI implementations to solve your specific business challenges.',
      link: '/services',
    },
  ];

  return (
    <Section id="features" className="bg-white">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Automation Solutions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leverage cutting-edge artificial intelligence to transform your business operations and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white group"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a 
              href={feature.link} 
              className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700"
            >
              Learn more
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}; 