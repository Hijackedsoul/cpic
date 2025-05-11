
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TrainerCard from '@/components/TrainerCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users2, Users, Camera, Briefcase } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const OurTeam = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState("organisers");

  // Team data with actual members and updated fun facts
  const [teamData, setTeamData] = useState({
    organisers: [
      {
        name: "Arya Ananda Putra",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop",
        role: "Lead Organiser",
        funFact: "Can solve a Rubik's cube in under 30 seconds",
        imagePosition: "center top"
      },
      {
        name: "Ryan Shaw",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Has visited over 30 countries"
      },
      {
        name: "Francis Ang Zhao Xiong",
        image: "/lovable-uploads/d23eeba1-d1c8-4d90-a5ba-ec7525283470.png",
        role: "Organiser",
        funFact: "I figure out most of my solutions when I'm on the toiletbowl :3",
        imagePosition: "center top"
      },
      {
        name: "Edward Yee Mynn Sherng",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Organiser",
        funFact: "Amateur astronomy enthusiast"
      },
      {
        name: "Pannawit Supanwassa",
        image: "/lovable-uploads/5a40b946-98a1-495a-91ca-e0d0338143f6.png",
        role: "Organiser",
        funFact: "A CP-enthusiastic monkey who founded CPIC but like to yap about quantum physics",
        imagePosition: "center top"
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
        name: "Yu Zheyuan",
        role: "Trainer",
        funFact: "skibidi toilet"
      },
      {
        name: "Nguyen Dinh Anh",
        image: "/lovable-uploads/e744596c-1de3-4ec3-9bc3-61bf1eee5b7a.png", // Gao Zhaoyi's image
        role: "Trainer",
        funFact: "I finger my guitar 👍",
        imagePosition: "center top"
      },
      {
        name: "Han Phyo Oo",
        image: "/lovable-uploads/1036e146-67cb-4e35-b2e6-7ead3b15097e.png", // Francis' image
        role: "Trainer",
        funFact: "I like valorant.",
        imagePosition: "center top"
      },
      {
        name: "Michael Hanson Sugiharto",
        image: "/lovable-uploads/27272ab1-60c0-4feb-b997-770efc9a4a48.png", // Derrick's image
        role: "Trainer",
        funFact: "I love spicy food.",
        imagePosition: "center top"
      },
      {
        name: "Gao Zhaoyi",
        role: "Trainer",
        funFact: "Eket cant be this cute."
      },
      {
        name: "Andreas Surya Tanjung",
        image: "/lovable-uploads/e813a8fb-4d12-41ab-85bd-27e819480919.png", // Han Phyo Oo's image
        role: "Trainer",
        funFact: "I love to explore different aspects of the world",
        imagePosition: "center top"
      },
      {
        name: "Derrick Lukimin",
        image: "/lovable-uploads/3069c6af-4890-4762-b797-21baa33b9733.png", // Nguyen Dinh Anh's image
        role: "Trainer",
        funFact: "My IOI selection rank was higher than my NOI rank this year which makes absolutely no sense",
        imagePosition: "center top"
      },
      {
        name: "William Edward Sugiharto",
        image: "/lovable-uploads/ea71a862-7717-42c6-bb32-f65af853b39c.png", // Michael Hanson's image
        role: "Trainer",
        funFact: "I have a pet otter:)",
        imagePosition: "center 30%"
      },
      {
        name: "Ryker Xu",
        image: "/lovable-uploads/bf018ac0-01b7-4bec-9b01-100cc6919929.png", // Yu Zheyuan's image
        role: "Trainer",
        funFact: "quack",
        imagePosition: "center 40%"
      },
      {
        name: "Ziv Lim Zhengheng",
        image: "/lovable-uploads/78ace439-20dc-4ad9-b1fa-778036331a9b.png", // Tung Jia Ray's image
        role: "Trainer",
        funFact: "When I asked my mom this question to get some ideas, she used this opportunity to bash me",
        imagePosition: "center 30%"
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
                    imagePosition={member.imagePosition}
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
