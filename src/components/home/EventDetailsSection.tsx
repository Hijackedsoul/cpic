
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EventDetailsSectionProps {
  registrationLink: string;
}

const EventDetailsSection = ({ registrationLink }: EventDetailsSectionProps) => {
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
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
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
          Event <span className="text-neon-cyan">Details</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <EventCard 
              icon={<Calendar className="h-8 w-8 text-neon-cyan" />}
              title="Dates"
              details={["June 16-20, 2025", "5 days of fun and engaging experience"]}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <EventCard 
              icon={<Clock className="h-8 w-8 text-neon-magenta" />}
              title="Timings"
              details={["9:00 AM - 5:00 PM daily", "Registration opens at 8:30 AM"]}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <EventCard 
              icon={<MapPin className="h-8 w-8 text-neon-cyan" />}
              title="Venue"
              details={["NUS, School of Computing", "COM 1 Building, Singapore 117417"]}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-10"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={registrationLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-neon-magenta hover:bg-neon-magenta/80 text-white px-6 py-6 font-mono text-lg shadow-[0_0_15px_rgba(255,0,255,0.3)]">
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const EventCard = ({ icon, title, details }: EventCardProps) => {
  return (
    <Card className="border border-white/10 bg-black/50 hover:border-neon-cyan/50 transition-colors group hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
      <CardContent className="p-6">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors font-mono">
          {title}
        </h3>
        <div className="space-y-2">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-300">
              {detail}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventDetailsSection;
