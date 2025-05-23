
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Brain, Gift } from 'lucide-react';
import InteractiveFeatureCard from '@/components/InteractiveFeatureCard';

const FeaturesSection = () => {
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
    <section className="py-20 bg-[#0C0C0C]">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-16"
          variants={itemVariants}
        >
          Why Choose <span className="text-neon-cyan">CPIC</span>?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InteractiveFeatureCard 
            icon={<Code className="h-8 w-8 text-neon-cyan" />}
            title="Algorithm Mastery"
            description="Learn efficient algorithms and data structures from the ground up."
          />
          <InteractiveFeatureCard 
            icon={<Users className="h-8 w-8 text-neon-magenta" />}
            title="Learn from Champions"
            description="Our trainers are NOI medallists with years of experience."
          />
          <InteractiveFeatureCard 
            icon={<Brain className="h-8 w-8 text-neon-cyan" />}
            title="Practical Approach"
            description="Focus on hands-on coding and problem-solving strategies."
          />
          <InteractiveFeatureCard 
            icon={<Gift className="h-8 w-8 text-neon-magenta" />}
            title="Completely Free"
            description="No cost to join! Free food, merch, and no experience required."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
