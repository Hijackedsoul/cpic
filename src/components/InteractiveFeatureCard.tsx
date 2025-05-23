
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InteractiveFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InteractiveFeatureCard = ({ icon, title, description }: InteractiveFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={cn(
        "p-6 border rounded-lg transition-all duration-300 bg-black/50 relative overflow-hidden",
        isHovered 
          ? "border-neon-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]" 
          : "border-white/10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-500",
          isHovered ? "opacity-10" : ""
        )}
        style={{ 
          background: isHovered 
            ? 'linear-gradient(225deg, rgba(0,255,255,0.15) 0%, rgba(0,0,0,0) 60%)' 
            : 'none'
        }}
      />
      
      <div className="mb-4 relative">
        <motion.div 
          animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
      </div>
      
      <h3 className={cn(
        "text-xl font-bold mb-2 font-mono transition-colors duration-300",
        isHovered ? "text-neon-cyan" : "text-white"
      )}>
        {title}
      </h3>
      
      <motion.p 
        className="text-gray-400 relative z-10"
        animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default InteractiveFeatureCard;
