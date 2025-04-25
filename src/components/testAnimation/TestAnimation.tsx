"use client"
import React from 'react'
import { motion } from 'framer-motion';

const TestAnimation = () => {
  return (
    <div>
<motion.button
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
    >
      กดหรือ Hover ที่นี่
    </motion.button>>
  </div>
  )
}

export default TestAnimation