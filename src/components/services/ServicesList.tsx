'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Bot, Workflow, BarChart3, Layers, Zap, Settings } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const ServicesList = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-primary-600" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Custom conversational AI that understands your customers and provides tailored responses.',
      benefits: [
        'Reduce customer service costs by up to 30%',
        '24/7 availability for customer inquiries',
        'Personalized experiences based on user history',
        'Seamless handoff to human agents when needed',
      ],
      image: '/images/services/chatbots.jpg',
    },
    {
      icon: <Workflow className="w-12 h-12 text-primary-600" />,
      title: 'Workflow Automation',
      description: 'Intelligent systems that automate repetitive tasks and streamline your business operations.',
      benefits: [
        'Reduce manual data entry by up to 90%',
        'Error-free document processing and management',
        'Automated report generation and distribution',
        'Custom triggers and actions based on your business rules',
      ],
      image: '/images/services/workflow.jpg',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary-600" />,
      title: 'Data Analysis & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization.',
      benefits: [
        'Identify hidden patterns in your business data',
        'Predictive analytics for informed decision making',
        'Automated reporting and dashboard creation',
        'Customized insights delivered to stakeholders',
      ],
      image: '/images/services/data-analysis.jpg',
    },
    {
      icon: <Layers className="w-12 h-12 text-primary-600" />,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI implementations tailored to solve your specific business challenges.',
      benefits: [
        'Solutions designed for your unique business needs',
        'Integration with existing systems and workflows',
        'Scalable architecture that grows with your business',
        'Continuous improvement based on performance data',
      ],
      image: '/images/services/custom-ai.jpg',
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: 'API Integration & Development',
      description: 'Connect your AI solutions with existing systems and third-party services.',
      benefits: [
        'Seamless data flow between different platforms',
        'Custom API development for unique requirements',
        'Secure and efficient data exchange protocols',
        'Comprehensive documentation and support',
      ],
      image: '/images/services/api-integration.jpg',
    },
    {
      icon: <Settings className="w-12 h-12 text-primary-600" />,
      title: 'AI Strategy Consulting',
      description: 'Expert guidance on implementing AI to achieve your business objectives.',
      benefits: [
        'Comprehensive AI readiness assessment',
        'Strategic roadmap for AI implementation',
        'ROI analysis and business case development',
        'Training and knowledge transfer for your team',
      ],
      image: '/images/services/consulting.jpg',
    },
  ];

  return (
    <Section className="bg-white">
      <div className="space-y-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 ${
              index % 2 === 0 ? 'lg:grid-cols-[1fr_1.25fr]' : 'lg:grid-cols-[1.25fr_1fr] lg:flex-row-reverse'
            } gap-12 lg:gap-16 items-center`}
          >
            <div className={index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}>
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-xl text-gray-700 mb-6">{service.description}</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Benefits:</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button href="/contact">Learn More</Button>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="bg-gray-200 w-full aspect-video flex items-center justify-center text-gray-400">
                <span className="text-lg">Service Image</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}; 