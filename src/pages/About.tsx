import Layout from '@/components/Layout';
import TrainerCard from '@/components/TrainerCard';
import EditableTestimonialCard from '@/components/EditableTestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-neon-cyan">CPIC</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 font-mono">
              Empowering the next generation of competitive programmers
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What is <span className="text-neon-cyan">CPIC</span>?
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  The Competitive Programming Introductory Course (CPIC) is an intensive training program designed to transform beginners into skilled algorithmic problem solvers.
                </p>
                <p>
                  Founded in 2024 by a team of competitive programming champions, CPIC has helped hundreds of students master advanced algorithms, data structures, and problem-solving techniques used in competitions like IOI, ICPC, and tech company interviews.
                </p>
                <p>
                  Our curriculum is carefully structured to build a solid foundation, with a focus on hands-on practice and real competition scenarios.
                </p>
                <div className="pt-4">
                  <Link to="/register">
                    <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-mono">
                      Join Our Next Cohort
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-white/10 neo-blur">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Programming"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 p-4 rounded-lg neo-blur max-w-xs">
                <p className="text-neon-cyan font-mono text-sm">
                  <span className="text-neon-magenta">for</span> (
                  <span className="text-white">student</span> : 
                  <span className="text-neon-cyan">students</span>) &#123;<br />
                  &nbsp;&nbsp;student.<span className="text-neon-magenta">learn</span>();<br />
                  &nbsp;&nbsp;student.<span className="text-neon-magenta">solve</span>();<br />
                  &nbsp;&nbsp;student.<span className="text-neon-magenta">succeed</span>();<br />
                  &#125;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Meet Our <span className="text-neon-magenta">Trainers</span>
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Learn from competitive programming champions who have excelled in national and international competitions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainerCard 
              name="Ryan Shaw"
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              role="Lead Trainer"
              medals={{ NOI: true }}
              achievements={[
                "NOI Gold Medalist",
                "Top 5 Finish at NOI 2025"
              ]}
              bio="As our lead trainer, Ryan brings exceptional algorithmic expertise and a passion for teaching competitive programming fundamentals."
            />
            <TrainerCard 
              name="Lim Chang Jun"
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              role="Algorithm Specialist"
              medals={{ IOI: true }}
              achievements={[
                "IOI Bronze Medalist"
              ]}
              bio="Chang Jun specializes in advanced algorithmic strategies and optimization techniques for competitive programming contests."
            />
            <TrainerCard 
              name="Ray"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              role="Data Structures Expert"
              medals={{ NOI: true }}
              achievements={[
                "NOI Silver Medalist",
                "Data Structures Specialist"
              ]}
              bio="Ray focuses on teaching efficient data structures and their applications in solving complex algorithmic problems."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Student <span className="text-neon-cyan">Testimonials</span>
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Hear from our previous participants about their experience with CPIC.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EditableTestimonialCard 
              initialName="Sophia Wang"
              initialRole="Computer Science Student, MIT"
              initialTestimonial="CPIC transformed my approach to problem-solving. The trainers break down complex algorithms in a way that's easy to understand, and the practice problems really cement your understanding."
              rating={5}
            />
            <EditableTestimonialCard 
              initialName="James Peterson"
              initialRole="Software Engineer, Google"
              initialTestimonial="I credit CPIC for helping me land my dream job. The interview preparation was spot-on, and I felt confident tackling algorithmic questions during technical interviews."
              rating={5}
            />
            <EditableTestimonialCard 
              initialName="Raj Patel"
              initialRole="High School Student & NOI Participant"
              initialTestimonial="Before CPIC, I struggled with competitive programming contests. The structured curriculum and personalized feedback helped me improve rapidly. I'm now preparing for the International Olympiad!"
              rating={4}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
