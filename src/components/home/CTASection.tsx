
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
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
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="max-w-3xl mx-auto text-center py-10 px-8 neo-blur rounded-lg border border-white/10 hover:border-neon-magenta/30 transition-all duration-500"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Level Up Your Programming Skills?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join hundreds of students who have transformed their problem-solving abilities through our comprehensive curriculum.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about">
              <Button className="bg-neon-magenta hover:bg-neon-magenta/80 text-white px-8 py-6 font-mono text-lg shadow-[0_0_15px_rgba(255,0,255,0.3)]">
                Start Your Journey Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
