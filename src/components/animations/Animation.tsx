"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

// Unified animation component that can handle different directions
interface AnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'right' | 'left' | 'down' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  once?: boolean;
  className?: string;
}

export const Animation: React.FC<AnimationProps> = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.75,
  delay = 0,
  ease = 'easeInOut',
  once = true,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Define initial animation values based on direction
  const getInitialValue = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'none':
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialValue()}
      animate={isInView ? { x: 0, y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ ease, duration, delay }}
    >
      {children}
    </motion.div>
  );
};

// // Improved parent and child animation components
// interface ParentAnimationProps {
//   children: React.ReactNode;
//   staggerAmount?: number;
//   delayChildren?: number;
//   className?: string;
//   once?: boolean;
// }

// export const ParentAnimation: React.FC<ParentAnimationProps> = ({
//   children,
//   staggerAmount = 0.2,
//   delayChildren = 0.2,
//   className,
//   once = true,
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once });

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: staggerAmount,
//         delayChildren: delayChildren,
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       variants={container}
//       initial="hidden"
//       animate={isInView ? "show" : "hidden"}
//     >
//       {children}
//     </motion.div>
//   );
// };

// interface ChildAnimationProps {
//   children: React.ReactNode;
//   direction?: 'up' | 'right' | 'left' | 'down' | 'none';
//   distance?: number;
//   custom?: any;
//   className?: string;
// }

// export const ChildAnimation: React.FC<ChildAnimationProps> = ({
//   children,
//   direction = 'up',
//   distance = 50,
//   custom,
//   className,
// }) => {
//   // Define variants based on direction
//   const getVariants = () => {
//     const hidden: Variant = { opacity: 0 };
//     const show: Variant = { 
//       opacity: 1, 
//       transition: { type: "spring", bounce: 0 } 
//     };

//     switch (direction) {
//       case 'up':
//         hidden.y = distance;
//         show.y = 0;
//         break;
//       case 'down':
//         hidden.y = -distance;
//         show.y = 0;
//         break;
//       case 'left':
//         hidden.x = -distance;
//         show.x = 0;
//         break;
//       case 'right':
//         hidden.x = distance;
//         show.x = 0;
//         break;
//     }

//     return { hidden, show };
//   };

//   const variants = getVariants();

//   return (
//     <motion.div 
//       className={className}
//       variants={variants}
//       custom={custom}
//     >
//       {children}
//     </motion.div>
//   );
// };