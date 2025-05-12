
import React from 'react';
import TrainerCard from '@/components/TrainerCard';
import { TeamMember } from '@/data/teamData';
import { TabsContent } from "@/components/ui/tabs";

interface TeamTabContentProps {
  category: string;
  members: TeamMember[];
}

const TeamTabContent = ({ category, members }: TeamTabContentProps) => {
  return (
    <TabsContent value={category} className="mt-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TrainerCard 
            key={index}
            name={member.name}
            image={member.image}
            role={member.role}
            funFact={member.funFact}
            imagePosition={member.imagePosition}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default TeamTabContent;
