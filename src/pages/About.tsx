
import Layout from '@/components/Layout';

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 1-2: Fundamentals</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Introduction to competitive programming
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Setting up your coding environment
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Time and space complexity analysis
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Basic data structures: Arrays, strings
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Introduction to algorithms
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 3-4: Intermediate</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Advanced data structures
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Searching and sorting algorithms
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Graph theory basics
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Dynamic programming introduction
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Daily coding contests
                </li>
              </ul>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur">
              <h3 className="text-xl font-mono text-neon-cyan mb-4">Day 5: Advanced & Finale</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Advanced problem-solving techniques
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Optimization strategies
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Mock competitive programming contest
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Awards and recognition
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta font-mono mr-2">→</span>
                  Future learning pathways
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Topics <span className="text-neon-cyan">Covered</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TopicCard
              title="Algorithmic Thinking"
              items={[
                "Problem decomposition",
                "Pattern recognition",
                "Algorithm design techniques",
                "Optimization strategies"
              ]}
            />
            
            <TopicCard
              title="Data Structures"
              items={[
                "Arrays and strings",
                "Stacks and queues",
                "Trees and graphs",
                "Hash tables and heaps"
              ]}
            />
            
            <TopicCard
              title="Advanced Algorithms"
              items={[
                "Sorting and searching",
                "Graph algorithms",
                "Dynamic programming",
                "Greedy algorithms"
              ]}
            />
            
            <TopicCard
              title="Problem-Solving"
              items={[
                "Contest strategies",
                "Time management",
                "Debugging techniques",
                "Optimization techniques"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Student <span className="text-neon-cyan">Testimonials</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 p-6 rounded-lg border border-white/10">
              <p className="italic text-gray-300 mb-4">
                "CPIC opened my eyes to the world of competitive programming. The instructors were knowledgeable and patient. I went from struggling with basic algorithms to confidently solving IOI problems."
              </p>
              <p className="font-bold text-white">- Ryan T., Hwa Chong Institution</p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border border-white/10">
              <p className="italic text-gray-300 mb-4">
                "The most valuable aspect of CPIC was how it taught me to approach problems systematically. These skills have helped me not just in programming competitions, but also in my regular schoolwork."
              </p>
              <p className="font-bold text-white">- Meilin C., Raffles Girls' School</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface TopicCardProps {
  title: string;
  items: string[];
}

const TopicCard = ({ title, items }: TopicCardProps) => {
  return (
    <div className="bg-black/40 border border-white/10 rounded-lg p-6 neo-blur h-full">
      <h3 className="text-xl font-mono font-bold text-neon-cyan mb-4">{title}</h3>
      <ul className="space-y-2 text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-neon-magenta font-mono mr-2">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
