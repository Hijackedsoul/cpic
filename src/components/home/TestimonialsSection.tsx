
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          variants={itemVariants}
        >
          What Our <span className="text-neon-magenta">Students Say</span>
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          <TestimonialCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
