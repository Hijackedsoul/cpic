
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TrainerCard from '@/components/TrainerCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Team, Users, UsersRound, Briefcase } from 'lucide-react';

const OurTeam = () => {
  const [currentTab, setCurrentTab] = useState("organisers");

  // Placeholder data for each team category
  const teamData = {
    organisers: [
      {
        name: "Alex Chen",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop",
        role: "Program Director",
        medals: { NOI: true, IOI: true },
        achievements: ["NOI Gold Medalist 2020", "IOI Silver Medalist 2021"],
        bio: "Alex leads the CPIC program, bringing over 8 years of competitive programming experience."
      },
      {
        name: "Sarah Wong",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Operations Lead",
        medals: { ICPC: true },
        achievements: ["ICPC Regional Finalist", "Google Code Jam Finalist"],
        bio: "Sarah manages the day-to-day operations and logistics for all CPIC events and classes."
      },
    ],
    media: [
      {
        name: "Marcus Lee",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=300&fit=crop",
        role: "Media Director",
        medals: {},
        bio: "Marcus oversees all media content creation and social media strategies for CPIC."
      },
      {
        name: "Priya Sharma",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Visual Designer",
        medals: {},
        bio: "Priya creates visually engaging content for all CPIC materials and platforms."
      },
    ],
    mainTrainers: [
      {
        name: "Dr. Jason Tan",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop",
        role: "Head Trainer",
        medals: { NOI: true, IOI: true, ICPC: true },
        achievements: ["IOI Gold Medalist", "ICPC World Finalist", "Ph.D. in Computer Science"],
        bio: "Dr. Tan leads the advanced algorithm training sessions and supervises curriculum development."
      },
      {
        name: "Maya Patel",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Senior Trainer",
        medals: { NOI: true, IOI: true },
        achievements: ["IOI Silver Medalist", "Google Code Jam Finalist"],
        bio: "Maya specializes in graph algorithms and dynamic programming training modules."
      },
    ],
    trainers: [
      {
        name: "David Lim",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=300&fit=crop",
        role: "Algorithms Trainer",
        medals: { NOI: true },
        achievements: ["NOI Bronze Medalist", "ICPC Regional Participant"],
        bio: "David focuses on teaching fundamental algorithms and problem-solving techniques."
      },
      {
        name: "Lily Zhang",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Data Structures Trainer",
        medals: { ICPC: true },
        achievements: ["ICPC Regional Finalist", "Codeforces Master"],
        bio: "Lily specializes in advanced data structures and their applications in competitive programming."
      },
    ],
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

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-black/50 border border-white/10 p-1 mb-8">
            <TabsTrigger value="organisers" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
              <div className="flex items-center gap-2">
                <Team size={16} />
                <span className="hidden md:inline">Organisers</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span className="hidden md:inline">Media</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="mainTrainers" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
              <div className="flex items-center gap-2">
                <UsersRound size={16} />
                <span className="hidden md:inline">Main Trainers</span>
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
                    achievements={member.achievements}
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
