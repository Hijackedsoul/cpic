
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { teamData } from '@/data/teamData';
import TeamTabContent from '@/components/TeamTabContent';
import TeamTabs from '@/components/TeamTabs';

const OurTeam = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState("organisers");

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">Our <span className="text-neon-cyan">Team</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated individuals who make CPIC possible and help students excel in competitive programming.
          </p>
        </div>

        <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full max-w-4xl mx-auto">
          <TeamTabs currentTab={currentTab} onTabChange={handleTabChange} />
          
          <TeamTabContent category="organisers" members={teamData.organisers} />
          <TeamTabContent category="trainers" members={teamData.trainers} />
          <TeamTabContent category="media" members={teamData.media} />
          <TeamTabContent category="helpers" members={teamData.helpers} />
        </Tabs>
      </div>
    </Layout>
  );
};

export default OurTeam;
