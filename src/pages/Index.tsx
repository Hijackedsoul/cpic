
import { ArrowRight, Code, Users, Database, Brain, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import TypewriterText from '@/components/TypewriterText';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  // Set the countdown date to June 16, 2025
  const countdownDate = new Date('2025-06-16T00:00:00');
  
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdwYZI5sAmtDMV88J_f2wsc7avFrbkcx9flsqxyg0l_GTjseQ/viewform?usp=header";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-[#121212] flex items-center justify-center relative overflow-hidden">
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

        <div className="container mx-auto px-4 py-16 z-10 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-gradient-cyan">CPIC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-mono">
              Competitive Programming Introductory Course
            </p>
            
            <div className="h-12">
              <TypewriterText 
                text="Master Competitive Programming. Break Boundaries."
                className="text-xl md:text-2xl text-white font-mono"
                infinite={true}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black px-6 py-6 font-mono text-lg w-full sm:w-auto">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/about">
                <Button variant="outline" className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 px-6 py-6 font-mono text-lg w-full sm:w-auto">
                  Learn More
                </Button>
              </a>
            </div>
            
            <div className="pt-12">
              <p className="text-white/70 mb-4 font-mono">Next Course Begins In:</p>
              <CountdownTimer targetDate={countdownDate} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Why Choose <span className="text-neon-cyan">CPIC</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Code className="h-8 w-8 text-neon-cyan" />}
              title="Algorithm Mastery"
              description="Learn efficient algorithms and data structures from the ground up."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-neon-magenta" />}
              title="Learn from Champions"
              description="Our trainers are NOI/IOI winners with years of experience."
            />
            <FeatureCard 
              icon={<Brain className="h-8 w-8 text-neon-cyan" />}
              title="Practical Approach"
              description="Focus on hands-on coding and problem-solving strategies."
            />
            <FeatureCard 
              icon={<Gift className="h-8 w-8 text-neon-magenta" />}
              title="Completely Free"
              description="No cost to join! Free food, merch, and no experience required."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center py-10 px-8 neo-blur rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Level Up Your Programming Skills?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join hundreds of students who have transformed their problem-solving abilities through our comprehensive curriculum.
            </p>
            <a href={registrationLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-neon-magenta hover:bg-neon-magenta/80 text-white px-8 py-6 font-mono text-lg">
                Start Your Journey Today
              </Button>
            </a>
          </div>
        </div>
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

export default Index;
