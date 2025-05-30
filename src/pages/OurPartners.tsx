
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const OurPartners = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">Our <span className="text-neon-cyan">Partners</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">We collaborate with leading corporates and educational institutions to bring you the best competitive programming course!</p>
        </div>

        {/* Financial Sponsor Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-mono text-white mb-8 text-center">Financial <span className="text-neon-cyan">Sponsor</span></h2>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-all duration-300">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <img 
                        src="/lovable-uploads/c23d86d0-e145-49c1-a59a-d4230db5117b.png" 
                        alt="Hudson River Trading Logo" 
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl font-mono">Hudson River Trading</CardTitle>
                      <CardDescription className="text-neon-magenta">Exclusive Financial Sponsor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-400 mb-4"> Hudson River Trading (HRT) plays a key role in enhancing the liquidity of financial markets through advanced algorithmic trading. HRT enriches the CPIC learning experience by providing essential logistical funding and offering valuable insights into the financial technology and trading industry.  </p>
                  <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                    <a href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Educational Partners Section */}
        <div>
          <h2 className="text-3xl font-bold font-mono text-white mb-8 text-center">Educational <span className="text-neon-cyan">Partners</span></h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CenCE Partner Card */}
            <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <div className="bg-white h-16 w-16 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/c84135c4-9411-49f9-b9d5-cbc51a51042c.png" 
                      alt="CenCE Logo" 
                      className="h-full w-full object-cover scale-25" 
                    />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl font-mono">Centre for Nurturing Computing Excellence</CardTitle>
                    <CardDescription className="text-neon-magenta">Educational Partner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-400 mb-4">The Centre for Nurturing Computing Excellence (CenCE) run by NUS School of Computing collaborates with us to provide an conducive environment for our competitive programming course. </p>
                <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                  <a href="https://cence.comp.nus.edu.sg/cence/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Nanyang Junior College Partner Card */}
            <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <img 
                      src="/lovable-uploads/064a919c-4b8b-42c3-96b3-88ee0cec4801.png" 
                      alt="Nanyang Junior College Logo" 
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl font-mono">Nanyang Junior College</CardTitle>
                    <CardDescription className="text-neon-magenta">Educational Partner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-400 mb-4">Nanyang Junior College's Competitive Programming Club (NYCP) partners with us in coordinating the event logistics, and handling essential administrative tasks.</p>
                <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                  <a href="https://www.nanyangjc.moe.edu.sg/nanyang-competitive-programming-club-nycp/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                    Visit Website
                  </a>
                </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurPartners;
