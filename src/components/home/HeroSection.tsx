
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import CountdownTimer from '@/components/CountdownTimer';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingCodeSnippets from '@/components/FloatingCodeSnippets';

interface HeroSectionProps {
  registrationLink: string;
  countdownDate: Date;
}

const HeroSection = ({ registrationLink, countdownDate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-[#121212] flex items-center justify-center relative overflow-hidden">
      <div className="hidden md:block">
        <ParticleBackground />
        <FloatingCodeSnippets />
      </div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="hidden sm:grid grid-cols-12 h-full opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full"></div>
          ))}
        </div>
        <div className="hidden sm:grid grid-rows-12 w-full h-full opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-white/5 w-full"></div>
          ))}
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-6 py-8 sm:py-16 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="space-y-4 sm:space-y-6 max-w-3xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="text-gradient-cyan">CPIC</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl md:text-2xl text-white/80 font-mono px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Competitive Programming Introductory Course
          </motion.p>
          
          <div className="h-10 sm:h-12 px-2">
            <TypewriterText 
              text="Master Competitive Programming. Break Boundaries."
              className="text-sm sm:text-xl md:text-2xl text-white font-mono"
              infinite={true}
            />
          </div>
          
          <motion.div 
            className="flex flex-col gap-3 sm:gap-4 justify-center pt-4 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black px-6 py-4 sm:py-6 font-mono text-base sm:text-lg w-full shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="block">
                <Button variant="outline" className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 px-6 py-4 sm:py-6 font-mono text-base sm:text-lg w-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="pt-8 sm:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <p className="text-white/70 mb-4 font-mono text-sm sm:text-base">Next Course Begins In:</p>
            <CountdownTimer targetDate={countdownDate} />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-neon-cyan"
        >
          <ArrowRight size={24} className="transform rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
