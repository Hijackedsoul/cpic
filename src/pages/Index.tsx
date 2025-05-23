import { ArrowRight, Code, Users, Database, Brain, Gift, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import TypewriterText from '@/components/TypewriterText';
import CountdownTimer from '@/components/CountdownTimer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingCodeSnippets from '@/components/FloatingCodeSnippets';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import InteractiveFeatureCard from '@/components/InteractiveFeatureCard';

const Index = () => {
  // Set the countdown date to June 16, 2025
  const countdownDate = new Date('2025-06-16T00:00:00');
  
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdwYZI5sAmtDMV88J_f2wsc7avFrbkcx9flsqxyg0l_GTjseQ/viewform?usp=header";

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
    <Layout>
      {/* Hero Section with enhanced visuals */}
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
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black px-6 py-6 font-mono text-lg w-full sm:w-auto shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about">
                  <Button variant="outline" className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 px-6 py-6 font-mono text-lg w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <p className="text-white/70 mb-4 font-mono">Next Course Begins In:</p>
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

      {/* Event Details Section with improved visuals */}
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
                details={["June 16-20, 2025", "5 full days of intensive training"]}
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

      {/* Features Section with interactive cards */}
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

      {/* Testimonials Section */}
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

      {/* CTA Section with enhanced visuals */}
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
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 border border-white/10 rounded-lg bg-black/50 hover:border-neon-cyan/50 transition-colors group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors font-mono">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
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

export default Index;
