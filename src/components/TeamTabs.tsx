
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Camera, Users, wrench } from 'lucide-react';

interface TeamTabsProps {
  currentTab: string;
  onTabChange: (value: string) => void;
}

const TeamTabs = ({ currentTab, onTabChange }: TeamTabsProps) => {
  return (
    <TabsList className="grid w-full grid-cols-4 sm:grid-cols-4 bg-black/50 border border-white/10 p-1 mb-8">
      <TabsTrigger 
        value="organisers" 
        onClick={() => onTabChange("organisers")} 
        className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black"
      >
        <div className="flex items-center gap-1 sm:gap-2 justify-center">
          <Briefcase size={16} />
          <span className="text-xs sm:text-base">Organisers</span>
        </div>
      </TabsTrigger>
      <TabsTrigger 
        value="trainers" 
        onClick={() => onTabChange("trainers")} 
        className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black"
      >
        <div className="flex items-center gap-1 sm:gap-2 justify-center">
          <Users size={16} />
          <span className="text-xs sm:text-base">Trainers</span>
        </div>
      </TabsTrigger>
      <TabsTrigger 
        value="media" 
        onClick={() => onTabChange("media")} 
        className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black"
      >
        <div className="flex items-center gap-1 sm:gap-2 justify-center">
          <Camera size={16} />
          <span className="text-xs sm:text-base">Media</span>
        </div>
      </TabsTrigger>
      <TabsTrigger 
        value="helpers" 
        onClick={() => onTabChange("helpers")} 
        className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black"
      >
        <div className="flex items-center gap-1 sm:gap-2 justify-center">
          <wrench size={16} />
          <span className="text-xs sm:text-base">Helpers</span>
        </div>
      </TabsTrigger>
    </TabsList>
  );
};

export default TeamTabs;
