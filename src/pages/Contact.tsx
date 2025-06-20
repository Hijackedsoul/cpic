import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { AtSign, MessageCircle, Instagram } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Contact = () => {
  return <Layout>
      {/* Hero section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-neon-cyan">Touch</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about CPIC? We're here to help! Reach out to our team for more information about our courses, registration, or anything else.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-neon-cyan/10 p-3 rounded-lg mr-4">
                    <AtSign className="h-6 w-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-mono font-bold">Email</h3>
                    <p className="text-gray-400">cpic.singapore@gmail.com</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-mono font-bold mb-3">Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/cpic_sg/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-black/40 border border-white/10 p-3 rounded-lg hover:border-neon-cyan transition-all"
                      aria-label="Follow CPIC on Instagram"
                    >
                      <Instagram className="h-5 w-5 text-neon-cyan" />
                    </a>
                    <a 
                      href="https://discord.gg/zkaTT54dUm" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-black/40 border border-white/10 p-3 rounded-lg hover:border-neon-cyan transition-all"
                      aria-label="Join CPIC Discord"
                    >
                      <MessageCircle className="h-5 w-5 text-neon-cyan" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked <span className="text-neon-cyan">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 bg-black/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 font-mono font-bold text-white hover:text-neon-cyan">
                  Will I have to commit to all 5 days?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  Once you have registered, you will be required to come on at least the final day (on the 20th) and participate in the final contest and obtain a non-zero score to receive an e-certificate of participation. With that being said, all participants are highly encouraged to come on all 5 days to maximise their learning as well as to not fall behind in the content being taught.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-white/10 bg-black/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 font-mono font-bold text-white hover:text-neon-cyan">
                  Will I have to pay to participate?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  No, this course is completely free-of-charge. However, we will not be covering transport fees.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-white/10 bg-black/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 font-mono font-bold text-white hover:text-neon-cyan">
                  Will meals be provided?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  Yes, meals will be provided on Day 1 and Day 5. For Days 2-4, please bring money to buy food from the NUS canteen.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-white/10 bg-black/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 font-mono font-bold text-white hover:text-neon-cyan">
                  I don't have any background in programming. Can I still participate?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  Yes! You can participate regardless of programming experience. This course is catered towards beginners, and there are no prerequisites required.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-white/10 bg-black/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 font-mono font-bold text-white hover:text-neon-cyan">
                  Will this course be beneficial to students who are already experienced in competitive programming (CP)?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  Since this course is intended for beginners and students wanting to get into CP, the course content will mostly be basic in difficulty. Hence, already seasoned students wanting to learn advanced techniques and algorithms will not gain much from attending this course. A general benchmark is that students who obtained a bronze medal or above in the National Olympiad in Informatics (NOI) will not find much benefit in attending this course.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border border-white/10 bg-black/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 font-mono font-bold text-white hover:text-neon-cyan">
                  Who are the trainers?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  The trainers are current secondary school and JC students who are experienced and passionate in competitive programming and wish to use their knowledge to empower more students among the student population. These trainers are the top NOI medalists in Singapore.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Contact;
