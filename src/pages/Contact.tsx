
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { MessageSquare, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <span className="text-neon-cyan">Us</span>
            </h1>
            <p className="text-xl text-white/70 font-mono">
              Have questions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-mono w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h2>
              
              <div className="space-y-8">
                <div className="p-6 rounded-lg neo-blur border border-white/10">
                  <h3 className="text-xl font-mono font-bold text-neon-cyan mb-4">Our Socials</h3>
                  <div className="space-y-4">
                    <SocialLink 
                      icon={<MessageSquare className="h-5 w-5" />}
                      platform="Discord"
                      handle="Join our server"
                      url="#"
                    />
                    <SocialLink 
                      icon={<Instagram className="h-5 w-5" />}
                      platform="Instagram"
                      handle="@cpic_sg"
                      url="https://instagram.com/cpic_sg"
                    />
                    <SocialLink 
                      icon={<Mail className="h-5 w-5" />}
                      platform="Email"
                      handle="cpic.singapore@gmail.com"
                      url="mailto:cpic.singapore@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="p-6 rounded-lg neo-blur border border-white/10">
                  <h3 className="text-xl font-mono font-bold text-neon-cyan mb-4">FAQ</h3>
                  <div className="space-y-4">
                    <FAQItem 
                      question="Will I have to commit to all 5 days?"
                      answer="Once you have registered, you will be required to come on at least the final day (on the 20th) and participate in the final contest and obtain a non-zero score to receive an e-certificate of participation. With that being said, all participants are highly encouraged to come on all 5 days to maximise their learning as well as to not fall behind in the content being taught."
                    />
                    <FAQItem 
                      question="Will I have to pay to participate?"
                      answer="No, this course is completely free-of-charge. However, we will not be covering transport fees."
                    />
                    <FAQItem 
                      question="Will meals be provided?"
                      answer="Yes, we will be catering lunches from an external party."
                    />
                    <FAQItem 
                      question="I don't have any background in programming. Can I still participate?"
                      answer="Yes! You can participate regardless of programming experience. This course is catered towards beginners, and there are no prerequisites required."
                    />
                    <FAQItem 
                      question="Will this course be beneficial to students who are already experienced in competitive programming (CP)?"
                      answer="Since this course is intended for beginners and students wanting to get into CP, the course content will mostly be basic in difficulty. Hence, already seasoned students wanting to learn advanced techniques and algorithms will not gain much from attending this course. A general benchmark is that students who obtained a bronze medal or above in the National Olympiad in Informatics (NOI) will not find much benefit in attending this course."
                    />
                    <FAQItem 
                      question="How will classes be conducted, and what support will students receive?"
                      answer="Students will be divided into classes of around 30, with one to two student trainers per class. A central lecture will be live-streamed to all classes, and your trainers will be present in person to guide you through both the lectures and practice tasks."
                    />
                    <FAQItem 
                      question="Who are the trainers?"
                      answer="The trainers are current secondary school and JC students who are experienced and passionate in competitive programming and wish to use their knowledge to empower more students among the student population. These trainers are the top NOI medalists in Singapore."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  url: string;
}

const SocialLink = ({ icon, platform, handle, url }: SocialLinkProps) => (
  <a 
    href={url} 
    className="flex items-center space-x-3 text-white/70 hover:text-neon-cyan transition-colors group"
  >
    <div className="p-2 rounded-full bg-black/50 border border-white/10 group-hover:border-neon-cyan transition-colors">
      {icon}
    </div>
    <div>
      <p className="font-medium">{platform}</p>
      <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{handle}</p>
    </div>
  </a>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="pb-4 border-b border-white/10">
    <h4 className="font-mono font-bold text-white mb-2">{question}</h4>
    <p className="text-white/70 text-sm">{answer}</p>
  </div>
);

export default Contact;
