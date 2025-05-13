
import Layout from '@/components/Layout';
import TestimonialCard from '@/components/TestimonialCard';

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-neon-cyan">CPIC</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Competitive Programming Introductory Course is a student-led initiative aimed at bringing competitive programming to students across Singapore, regardless of their prior experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-2xl font-mono text-neon-cyan mb-4">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Structured Curriculum</p>
                    <p className="text-gray-400">A carefully designed learning path that builds from basic to intermediate concepts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Hands-on Practice</p>
                    <p className="text-gray-400">Daily coding challenges and problem sets that reinforce learning.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Mentorship</p>
                    <p className="text-gray-400">Guidance from experienced competitive programmers who have excelled in national and international contests.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">{">"}</span>
                  <div>
                    <p className="font-bold text-white">Community</p>
                    <p className="text-gray-400">A supportive network of like-minded peers and mentors.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Course <span className="text-neon-cyan">Structure</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 1: Foundations</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Welcome and team bonding activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Introduction to competitive programming landscape</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Setting up your development environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>C++ fundamentals for competitive programming</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 2: Data Structures</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Morning contest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Algorithm time complexity analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Standard Template Library (STL)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Sorting algorithms and techniques</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 3: Algorithms</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Morning contest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Range queries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Intermediate data structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Greedy algorithm strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 4: Classic Techniques</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Morning contest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Advanced problem-solving techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Classic techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Optimization strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 5: Final Day</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Special address by guest speakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Final contest with prizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Awards ceremony and celebration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  <span>Next steps in your CP journey</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Student <span className="text-neon-cyan">Testimonials</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Tien Kai"
              role="CPIC 2024 Participant"
              testimonial="In the span of a short 4 days, CPIC helped me to gain my footing in competitive programming, and motivated me to explore more into this field. I gained many connections with trainers who were genuinely impressive and did not hesitate to answer my questions even after the course. Now I'm out here grinding for NOI and suffering... but like, in a good way."
              rating={5}
            />
            <TestimonialCard
              name="Prudent"
              role="CPIC 2024 Participant"
              testimonial="I joined CPIC knowing almost nothing about competitive programming—just vibes and curiosity. But thanks to the amazing mentors and structured lessons, I actually understood things (crazy, I know). Fast forward: I've won medals at NOI and a bunch of other CP contests. CPIC really gave me the push I didn't know I needed."
              rating={5}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
