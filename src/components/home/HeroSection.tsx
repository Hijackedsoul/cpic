import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
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
  const instagramUrl = "https://www.instagram.com/cpic_sg/";

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-[#121212] flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <FloatingCodeSnippets />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="grid grid-cols-12 h-full opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 w-full h-full opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-white/5 w-full"></div>
          ))}
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-16 z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="space-y-6 max-w-3xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="text-gradient-cyan">CPIC</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Competitive Programming Introductory Course
          </motion.p>
          
          <div className="h-12">
            <TypewriterText 
              text="Master Competitive Programming. Break Boundaries."
              className="text-xl md:text-2xl text-white font-mono"
              infinite={true}
            />
          </div>

          {/* Registration Closed Notice */}
          <motion.div
            className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mx-auto max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-red-400 font-mono text-sm">
              Registration is now closed
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/schedule">
                <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black px-6 py-6 font-mono text-lg w-full sm:w-auto shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  View Schedule <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 px-6 py-6 font-mono text-lg w-full sm:w-auto">
                  Follow Us <Instagram className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <p className="text-white/70 mb-4 font-mono">Course Starting In:</p>
            <CountdownTimer targetDate={countdownDate} />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
