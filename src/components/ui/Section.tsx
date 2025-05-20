'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { cn } from '@/lib/utils';

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  animate?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  delay?: number;
};

export const Section = ({
  className,
  children,
  id,
  animate = true,
  containerSize = 'lg',
  delay = 0.2,
}: SectionProps) => {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const content = (
    <Container size={containerSize}>
      {children}
    </Container>
  );

  if (!animate) {
    return (
      <section
        id={id}
        className={cn('py-12 md:py-16 lg:py-24', className)}
      >
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionAnimation}
      className={cn('py-12 md:py-16 lg:py-24', className)}
    >
      {content}
    </motion.section>
  );
}; 