"use client"
import React, { useRef } from 'react';
import { motion, useInView} from 'framer-motion';

interface ParentAnimationProps {
    children: React.ReactNode;
    staggerAmount?: number;
    delayChildren?: number;
    className?: string;
    once?: boolean;
  }
  
  export const ParentAnimation: React.FC<ParentAnimationProps> = ({
    children,
    staggerAmount = 0.2,
    delayChildren = 0.2,
    className,
    once = true,
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
  
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerAmount,
          delayChildren: delayChildren,
        },
      },
    };
  
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {children}
      </motion.div>
    );
  };