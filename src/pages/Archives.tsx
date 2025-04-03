
import { useState } from 'react';
import Layout from '@/components/Layout';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Calendar } from 'lucide-react';

const Archives = () => {
  const [expandedYear, setExpandedYear] = useState<string | undefined>("2023");
  
  return (
    <Layout>
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
          <Accordion type="single" collapsible value={expandedYear} 
            onValueChange={setExpandedYear} className="bg-black/50 rounded-lg p-4 border border-gray-800">
            <AccordionItem value="2023" className="border-b-gray-700">
              <AccordionTrigger className="text-xl font-semibold py-4 hover:text-neon-cyan hover:no-underline">
                2023 Events
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-8 mt-2">
                  <div className="bg-black/40 border border-gray-800 rounded-lg p-6 hover:border-neon-cyan/50 transition-colors">
                    <div className="flex items-center mb-4">
                      <Calendar className="mr-2 h-5 w-5 text-neon-cyan" />
                      <h3 className="text-xl font-bold">CPIC Summer Workshop 2023</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Venue</h4>
                        <p>Nanyang Junior College, Computer Labs Block C</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Date & Time</h4>
                        <p>August 15-21, 2023 | 9:00 AM - 4:00 PM</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Highlights</h4>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Intensive 7-day programming boot camp</li>
                          <li>50+ participants from 12 different schools</li>
                          <li>Final contest with cash prizes and certificates</li>
                          <li>Special guest lecture by IOI medalist</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan">Winners</h4>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li><span className="font-medium">Gold:</span> John Tan, Raffles Institution</li>
                          <li><span className="font-medium">Silver:</span> Sarah Lim, Hwa Chong Institution</li>
                          <li><span className="font-medium">Bronze:</span> Michael Zhang, NUS High School</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
    </Layout>
  );
};

export default Archives;
