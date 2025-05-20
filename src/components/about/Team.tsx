'use client';

import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: 'Sarah Mitchell',
      position: 'CEO & Founder',
      bio: 'Previously led AI strategy at a Fortune 500 tech company. Passionate about making AI accessible to businesses of all sizes.',
      image: '/images/team/sarah.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@converzas.com',
      },
    },
    {
      name: 'David Chen',
      position: 'CTO',
      bio: 'AI researcher with over 15 years of experience. Specializes in natural language processing and machine learning systems.',
      image: '/images/team/david.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@converzas.com',
      },
    },
    {
      name: 'Jennifer Lopez',
      position: 'Head of Operations',
      bio: 'Operations expert with a background in scaling tech startups. Ensures our solutions are delivered efficiently and effectively.',
      image: '/images/team/jennifer.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jennifer@converzas.com',
      },
    },
    {
      name: 'Michael Williams',
      position: 'Lead AI Engineer',
      bio: 'Former Google engineer with expertise in building robust AI systems that solve real business problems.',
      image: '/images/team/michael.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@converzas.com',
      },
    },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          A diverse group of experts passionate about AI and solving complex business challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
          >
            <div className="relative h-72 bg-gray-200 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span>Photo</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary-600 mb-3">{member.position}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              
              <div className="flex space-x-4 text-gray-400">
                <a href={member.social.linkedin} className="hover:text-primary-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={member.social.twitter} className="hover:text-primary-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href={`mailto:${member.social.email}`} className="hover:text-primary-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}; 