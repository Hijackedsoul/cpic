
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Camera, Users } from 'lucide-react';

interface TeamTabsProps {
  currentTab: string;
  onTabChange: (value: string) => void;
}

const TeamTabs = ({ currentTab, onTabChange }: TeamTabsProps) => {
  return (
    <Tabs value={currentTab} onValueChange={onTabChange} className="w-full max-w-4xl mx-auto">
      <TabsList className="grid grid-cols-2 md:grid-cols-3 bg-black/50 border border-white/10 p-1 mb-8">
        <TabsTrigger value="organisers" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
          <div className="flex items-center gap-2">
            <Briefcase size={16} />
            <span className="hidden md:inline">Organisers</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="media" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
          <div className="flex items-center gap-2">
            <Camera size={16} />
            <span className="hidden md:inline">Media</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="trainers" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span className="hidden md:inline">Trainers</span>
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TeamTabs;
