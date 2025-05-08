
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TrainerCard from '@/components/TrainerCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users2, Users, Camera, Briefcase } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const OurTeam = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState("organisers");

  // Team data with actual members
  const [teamData, setTeamData] = useState({
    organisers: [
      {
        name: "Arya Ananda Putra",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop",
        role: "Lead Organiser",
        medals: { NOI: true, IOI: true },
        bio: "Leads the CPIC program and coordinates all organizational efforts."
      },
      {
        name: "Ryan Shaw",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Organiser",
        medals: { ICPC: true },
        bio: "Contributes to program organization while also serving as Head Trainer."
      },
      {
        name: "Francis Ang Zhao Xiong",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=300&fit=crop",
        role: "Organiser",
        medals: { NOI: true },
        bio: "Manages logistics and coordinates with participating schools."
      },
      {
        name: "Edward Yee Mynn Sherng",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Organiser",
        medals: {},
        bio: "Oversees participant registration and competition logistics."
      },
      {
        name: "Pannawit Supanwassa",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop",
        role: "Organiser",
        medals: { IOI: true },
        bio: "Coordinates international participation and cultural exchange programs."
      },
      {
        name: "Seah E-Ket",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
        role: "Organiser",
        medals: {},
        bio: "Handles sponsorship relationships and partner communications."
      },
      {
        name: "Jayden Tiew",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        role: "Organiser",
        medals: { NOI: true },
        bio: "Manages outreach initiatives and participant support services."
      },
    ],
    media: [
      {
        name: "Nguyen Chi Ken",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=300&fit=crop",
        role: "Head of Media",
        medals: {},
        bio: "Ken oversees all media content creation and social media strategies for CPIC."
      }
    ],
    trainers: [
      {
        name: "Ryan Shaw",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Head Trainer",
        medals: { NOI: true, IOI: true, ICPC: true },
        bio: "Ryan leads the advanced algorithm training sessions and supervises curriculum development."
      },
      {
        name: "Yu Zhe Yuan",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
        role: "Senior Trainer",
        medals: { NOI: true, IOI: true },
        bio: "Specializes in graph algorithms and dynamic programming training modules."
      },
      {
        name: "Tung Jia Ray",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
        role: "Senior Trainer",
        medals: { NOI: true },
        bio: "Focuses on competitive problem-solving techniques and contest strategies."
      },
      {
        name: "David Lim",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=300&fit=crop",
        role: "Algorithms Trainer",
        medals: { NOI: true },
        bio: "David focuses on teaching fundamental algorithms and problem-solving techniques."
      },
      {
        name: "Lily Zhang",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Data Structures Trainer",
        medals: { ICPC: true },
        bio: "Lily specializes in advanced data structures and their applications in competitive programming."
      },
    ],
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">Our <span className="text-neon-cyan">Team</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated individuals who make CPIC possible and help students excel in competitive programming.
          </p>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full max-w-4xl mx-auto">
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

          {Object.keys(teamData).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData[category].map((member, index) => (
                  <TrainerCard 
                    key={index}
                    name={member.name}
                    image={member.image}
                    role={member.role}
                    medals={member.medals}
                    bio={member.bio}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default OurTeam;
