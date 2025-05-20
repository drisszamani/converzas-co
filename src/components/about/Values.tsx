'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Zap, Users, TrendingUp, Shield, Heart, Globe } from 'lucide-react';

export const Values = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible with AI to deliver cutting-edge solutions.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Collaboration',
      description: 'We work closely with our clients, treating their challenges as our own to co-create optimal solutions.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in every aspect of our work.',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards and ensure transparency in all our dealings.',
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: 'Empathy',
      description: 'We deeply understand our clients\' needs and design solutions with their users in mind.',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: 'Impact',
      description: 'We measure our success by the positive change our solutions create for businesses and society.',
    },
  ];

  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          These principles guide everything we do, from client interactions to developing cutting-edge AI solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}; 