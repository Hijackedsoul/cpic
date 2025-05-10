
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Building, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OurPartners = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">Our <span className="text-neon-cyan">Partners</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We collaborate with leading institutions to bring you the best competitive programming education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* NUS Partner Card */}
          <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-all duration-300">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  <Building2 className="h-8 w-8 text-neon-cyan" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl font-mono">National University of Singapore</CardTitle>
                  <CardDescription className="text-neon-magenta">Academic Institution</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-400 mb-4">
                The National University of Singapore (NUS) provides academic support and resources for our competitive programming courses, helping us develop world-class curriculum.
              </p>
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* CenCE Partner Card */}
          <Card className="bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-all duration-300">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  <Building className="h-8 w-8 text-neon-cyan" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl font-mono">Centre for Nurturing Computing Excellence</CardTitle>
                  <CardDescription className="text-neon-magenta">Technical Partner</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-400 mb-4">
                The Centre for Nurturing Computing Excellence (CenCE) collaborates with us to provide advanced training materials and technical expertise for our competitive programming curriculum.
              </p>
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                <a href="https://www.comp.nus.edu.sg/~cence/" target="_blank" rel="noopener noreferrer" className="flex w-full">
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
                  <School className="h-8 w-8 text-neon-cyan" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl font-mono">Nanyang Junior College</CardTitle>
                  <CardDescription className="text-neon-magenta">Educational Partner</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-400 mb-4">
                Nanyang Junior College partners with us to foster competitive programming skills among pre-university students and provides venue support for selected programming workshops and events.
              </p>
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                <a href="https://nanyangjc.moe.edu.sg/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default OurPartners;
