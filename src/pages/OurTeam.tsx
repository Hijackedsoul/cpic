
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
        funFact: "Can solve a Rubik's cube in under 30 seconds"
      },
      {
        name: "Ryan Shaw",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Has visited over 30 countries"
      },
      {
        name: "Francis Ang Zhao Xiong",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Plays three musical instruments"
      },
      {
        name: "Edward Yee Mynn Sherng",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Amateur astronomy enthusiast"
      },
      {
        name: "Pannawit Supanwassa",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Makes his own hot sauce"
      },
      {
        name: "Seah E-Ket",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Loves rock climbing"
      },
      {
        name: "Jayden Tiew",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Can recite pi to 100 decimal places"
      },
    ],
    media: [
      {
        name: "Nguyen Chi Ken",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=300&fit=crop",
        role: "Head of Media",
        funFact: "Has a collection of vintage cameras"
      }
    ],
    trainers: [
      {
        name: "Ryan Shaw",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Head Trainer",
        funFact: "Once debugged code for 36 hours straight"
      },
      {
        name: "Yu Zhe Yuan",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
        role: "Trainer",
        funFact: "Knows five programming languages"
      },
      {
        name: "Tung Jia Ray",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
        role: "Trainer",
        funFact: "Started coding at age 8"
      },
      {
        name: "Nguyen Dinh Anh",
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=300&h=300&fit=crop",
        role: "Trainer",
        funFact: "Has a perfect memory for algorithms"
      },
      {
        name: "Ziv Lim Zhengheng",
        image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=300&h=300&fit=crop",
        role: "Trainer",
        funFact: "Can type 120 words per minute"
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
                    funFact={member.funFact}
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
