
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Users, Brain, Award } from 'lucide-react';

const About = () => {
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
      {/* Hero section with motion effects */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
          {/* Grid overlay for cyberpunk effect */}
          <div className="grid grid-cols-6 h-full opacity-20">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-6 w-full h-full opacity-20">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-b border-white/5 w-full"></div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About <span className="text-neon-cyan">CPIC</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Competitive Programming Introductory Course is a student-led initiative aimed at bringing competitive programming to students across Singapore, regardless of their prior experience.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Mission section with interactive elements */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At CPIC, we believe that computational thinking and problem-solving skills are essential for students in today's digital world. Our mission is to democratize access to competitive programming education and create a community of young problem solvers.
                </p>
                <p>
                  Through our intensive 5-day program, we aim to introduce students to the fundamentals of algorithms, data structures, and problem-solving techniques used in competitive programming contests like NOI (National Olympiad in Informatics) and IOI (International Olympiad in Informatics).
                </p>
                <p>
                  Our goal is not just to teach coding, but to foster a mindset of analytical thinking, persistence, and creativity - skills that benefit students far beyond programming competitions.
                </p>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur transform transition-all duration-300 hover:border-neon-cyan/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
            >
              <h3 className="text-2xl font-mono text-neon-cyan mb-4">What We Offer</h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Structured Curriculum</p>
                    <p className="text-gray-400">A carefully designed learning path that builds from basic to intermediate concepts.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Hands-on Practice</p>
                    <p className="text-gray-400">Daily coding challenges and problem sets that reinforce learning.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Mentorship</p>
                    <p className="text-gray-400">Guidance from experienced competitive programmers who have excelled in national and international contests.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Community</p>
                    <p className="text-gray-400">A supportive network of like-minded peers and mentors.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Course Structure section with animated cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Course <span className="text-neon-cyan">Structure</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <motion.div 
              className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur"
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
                borderColor: "rgba(0, 255, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.3 }}
            >
              <DayCard
                day="Day 1"
                title="Foundations"
                items={[
                  "Welcome and team bonding activities",
                  "Introduction to competitive programming landscape",
                  "Setting up your development environment",
                  "C++ fundamentals for competitive programming"
                ]}
              />
            </motion.div>

            <motion.div 
              className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur"
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
                borderColor: "rgba(0, 255, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <DayCard
                day="Day 2"
                title="Data Structures"
                items={[
                  "Morning contest",
                  "Algorithm time complexity analysis",
                  "Standard Template Library (STL)",
                  "Sorting algorithms and techniques"
                ]}
              />
            </motion.div>

            <motion.div 
              className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur"
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
                borderColor: "rgba(0, 255, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <DayCard
                day="Day 3"
                title="Algorithms"
                items={[
                  "Morning contest",
                  "Range queries",
                  "Intermediate data structures",
                  "Greedy algorithm strategies"
                ]}
              />
            </motion.div>

            <motion.div 
              className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur"
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
                borderColor: "rgba(0, 255, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <DayCard
                day="Day 4"
                title="Classic Techniques"
                items={[
                  "Morning contest",
                  "Advanced problem-solving techniques",
                  "Classic techniques",
                  "Optimization strategies"
                ]}
              />
            </motion.div>

            <motion.div 
              className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur"
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
                borderColor: "rgba(0, 255, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <DayCard
                day="Day 5"
                title="Final Day"
                items={[
                  "Special address by guest speakers",
                  "Final contest with prizes",
                  "Awards ceremony and celebration",
                  "Next steps in your CP journey"
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values section (new) */}
      <section className="py-20 bg-[#0C0C0C] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-neon-magenta">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-black/50 border border-white/10 rounded-lg hover:border-neon-magenta/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ 
                boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
              }}
            >
              <div className="mb-4 text-neon-cyan">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                We believe in pushing boundaries and striving for excellence in everything we do. Our curriculum is constantly updated to reflect the latest developments in competitive programming.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-black/50 border border-white/10 rounded-lg hover:border-neon-magenta/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              whileHover={{ 
                boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
              }}
            >
              <div className="mb-4 text-neon-magenta">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-300">
                We foster a supportive and inclusive learning environment where students can collaborate, learn from each other, and build lasting connections within the competitive programming community.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-black/50 border border-white/10 rounded-lg hover:border-neon-magenta/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileHover={{ 
                boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
              }}
            >
              <div className="mb-4 text-neon-cyan">
                <Brain size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Mindset</h3>
              <p className="text-gray-300">
                We encourage students to embrace challenges, persist through obstacles, and view failures as opportunities for growth. This mindset is crucial for success in competitive programming and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact section (new) */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-neon-cyan">Impact</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="text-neon-cyan text-4xl font-bold mb-2">500+</div>
              <div className="text-white font-mono">Students Trained</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-neon-magenta text-4xl font-bold mb-2">80%</div>
              <div className="text-white font-mono">Continued in CP</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-neon-cyan text-4xl font-bold mb-2">50+</div>
              <div className="text-white font-mono">NOI Medals Won</div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 p-8 border border-white/10 rounded-lg bg-black/50 hover:border-neon-cyan/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              boxShadow: "0 0 25px rgba(0, 255, 255, 0.15)",
            }}
          >
            <div className="flex items-start">
              <Award className="text-neon-cyan mr-4 h-12 w-12 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Recognition</h3>
                <p className="text-gray-300 mb-4">
                  CPIC has been recognized as a leading initiative in competitive programming education in Singapore. Our alumni have gone on to represent Singapore in international competitions, secure positions at top tech companies, and even return as trainers for future CPIC cohorts.
                </p>
                <p className="text-gray-300">
                  We're proud to have played a part in nurturing the next generation of computer scientists and software engineers who will drive technological innovation in Singapore and beyond.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Helper component for day cards
const DayCard = ({ day, title, items }: { day: string; title: string; items: string[] }) => {
  return (
    <>
      <h3 className="text-xl font-mono text-neon-cyan mb-4">{day}: {title}</h3>
      <ul className="space-y-3 text-white/70">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronRight className="text-neon-magenta mr-2 h-5 w-5 flex-shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default About;
