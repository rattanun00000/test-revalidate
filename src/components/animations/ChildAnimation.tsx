"use client"
import React from 'react';
import { motion, Variant } from 'framer-motion';

interface ChildAnimationProps {
    children: React.ReactNode;
    direction?: 'up' | 'right' | 'left' | 'down' | 'none';
    distance?: number;
    custom?: string;
    className?: string;
  }
  
  export const ChildAnimation: React.FC<ChildAnimationProps> = ({
    children,
    direction = 'up',
    distance = 50,
    custom,
    className,
  }) => {
    // Define variants based on direction
    const getVariants = () => {
      const hidden: Variant = { opacity: 0 };
      const show: Variant = { 
        opacity: 1, 
        transition: { type: "spring", bounce: 0 } 
      };
  
      switch (direction) {
        case 'up':
          hidden.y = distance;
          show.y = 0;
          break;
        case 'down':
          hidden.y = -distance;
          show.y = 0;
          break;
        case 'left':
          hidden.x = -distance;
          show.x = 0;
          break;
        case 'right':
          hidden.x = distance;
          show.x = 0;
          break;
      }
  
      return { hidden, show };
    };
  
    const variants = getVariants();
  
    return (
      <motion.div 
        className={className}
        variants={variants}
        custom={custom}
      >
        {children}
      </motion.div>
    );
  };