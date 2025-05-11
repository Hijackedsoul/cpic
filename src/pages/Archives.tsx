
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Archives = () => {
  const [expandedYear, setExpandedYear] = useState<string | undefined>("2023");
  
  return <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-cyan">Event</span> Archives
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our past programming competitions and workshops
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible value={expandedYear} onValueChange={setExpandedYear} className="bg-black/50 rounded-lg p-4 border border-gray-800">
            <AccordionItem value="2023" className="border-b-gray-700">
              <AccordionTrigger className="text-xl font-semibold py-4 hover:text-neon-cyan hover:no-underline">2024 Events</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8 mt-2">
                  <div className="bg-black/40 border border-gray-800 rounded-lg p-6 hover:border-neon-cyan/50 transition-colors">
                    <div className="flex items-center mb-4">
                      <Calendar className="mr-2 h-5 w-5 text-neon-cyan" />
                      <h3 className="text-xl font-bold">CPIC 2024</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Venue</h4>
                        <p>Nanyang Junior College</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Date & Time</h4>
                        <p>June 18-21, 2024 | 9:00 AM - 5:00 PM</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Highlights</h4>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Intensive 4-day programming boot camp</li>
                          <li>120+ participants from 20+ different secondary schools and JCs</li>
                          <li>Final contest with prizes and certificates</li>
                          <li>Special lecture by NOI 2024 Champion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo Archive Section */}
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800 mt-8">
                  <div className="flex items-center mb-4">
                    <Camera className="mr-2 h-5 w-5 text-neon-cyan" />
                    <h3 className="text-xl font-bold">Photo Archive</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Browse through our collection of photos from past CPIC events. Relive the moments, challenges, and triumphs from our competitive programming courses.
                  </p>
                  
                  <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black">
                    <a 
                      href="https://nanyangjc.smugmug.com/2024/Competitive-Programming-Introductory-Course" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex w-full"
                    >
                      View Photo Gallery
                    </a>
                  </Button>
                </div>
              </AccordionContent>
              
            </AccordionItem>
          </Accordion>
          
          
          <div className="mt-12 text-center">
            <p className="text-gray-400">More events will be added to our archives as we continue to grow.</p>
            <p className="text-gray-400">Stay tuned for our upcoming events!</p>
          </div>
        </div>
      </div>
    </Layout>;
};

export default Archives;
