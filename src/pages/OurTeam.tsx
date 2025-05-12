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
        image: "/lovable-uploads/e6aad531-8fc5-4a72-a9fc-c166d1871e6a.png", // Swapped to Truong's image
        role: "Head Organiser",
        funFact: "part time human, full time compiler of shower thoughts",
        imagePosition: "center top"
      },
      {
        name: "Ryan Shaw",
        image: "/lovable-uploads/76f39c30-9725-4e7e-896d-e844033e2d7c.png",
        role: "Head of Training",
        funFact: "my mothertongue is c++"
      },
      {
        name: "Raphael Lim Fu En",
        image: "/lovable-uploads/1aa2c46e-c227-487e-8106-ec64fa2227d9.png", // Swapped to Arya's image
        role: "Training",
        funFact: "I missed gold by 1 point"
      },
      {
        name: "Francis Ang Zhao Xiong",
        image: "/lovable-uploads/d23eeba1-d1c8-4d90-a5ba-ec7525283470.png",
        role: "Head of Publicity",
        funFact: "I figure out most of my solutions when I'm on the toiletbowl :3",
        imagePosition: "center top"
      },
      {
        name: "Edward Yee Mynn Sherng",
        //image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
        role: "Publicity",
        funFact: "Amateur astronomy enthusiast"
      },
      {
        name: "Pannawit Supanwassa",
        image: "/lovable-uploads/5a40b946-98a1-495a-91ca-e0d0338143f6.png",
        role: "Head of Operation",
        funFact: "A CP-enthusiastic monkey who founded CPIC but like to yap about quantum physics",
        imagePosition: "center top"
      },
      {
        name: "Seah E-Ket",
        //image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
        role: "Operation",
        funFact: "Loves rock climbing"
      },
      {
        name: "Jayden Tiew",
        image: "/lovable-uploads/45bfd287-2395-417f-8d7c-b52cb0add82e.png",
        role: "Operation",
        funFact: "Just another washed up programmer who loves problem solving, food, and of course, cpic!"
      },
    ],
    media: [
      {
        name: "Nguyen Chi Ken",
        //image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=300&fit=crop",
        role: "Head of Media",
        funFact: "Has a collection of vintage cameras"
      }
    ],
    trainers: [
      {
        name: "Ryan Shaw",
        image: "/lovable-uploads/76f39c30-9725-4e7e-896d-e844033e2d7c.png",
        role: "Head Trainer",
        funFact: "my mothertongue is c++"
      },
      {
        name: "Raphael Lim Fu En",
        image: "/lovable-uploads/1aa2c46e-c227-487e-8106-ec64fa2227d9.png", // Swapped to Arya's image
        role: "Trainer",
        funFact: "I missed gold by 1 point"
      },
      {
        name: "Yu Zheyuan",
        role: "Trainer",
        funFact: "skibidi toilet"
      },
      {
        name: "Nguyen Dinh Anh",
        image: "/lovable-uploads/3069c6af-4890-4762-b797-21baa33b9733.png",
        role: "Trainer",
        funFact: "I love taking long walks to the fridge",
        imagePosition: "center top"
      },
      {
        name: "Han Phyo Oo",
        image: "/lovable-uploads/1036e146-67cb-4e35-b2e6-7ead3b15097e.png",
        role: "Trainer",
        funFact: "I like valorant.",
        imagePosition: "center top"
      },
      {
        name: "Michael Hanson Sugiharto",
        image: "/lovable-uploads/27272ab1-60c0-4feb-b997-770efc9a4a48.png",
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
        image: "/lovable-uploads/e813a8fb-4d12-41ab-85bd-27e819480919.png",
        role: "Trainer",
        funFact: "I love to explore different aspects of the world",
        imagePosition: "center top"
      },
      {
        name: "Derrick Lukimin",
        image: "/lovable-uploads/e744596c-1de3-4ec3-9bc3-61bf1eee5b7a.png",
        role: "Trainer",
        funFact: "My IOI selection rank was higher than my NOI rank this year which makes absolutely no sense",
        imagePosition: "center top"
      },
      {
        name: "William Edward Sugiharto",
        image: "/lovable-uploads/ea71a862-7717-42c6-bb32-f65af853b39c.png",
        role: "Trainer",
        funFact: "I have a pet otter:)",
        imagePosition: "center 30%"
      },
      {
        name: "Truong Le Huy",
        image: "/lovable-uploads/a2a89666-c8d8-460b-a3e3-d52a2547b764.png", // Swapped to Raphael's image
        role: "Trainer",
        funFact: "I once solved a Rubik's Cube in 6.65 seconds 👅👅👅",
        imagePosition: "center top"
      },
      {
        name: "Ziv Lim Zhengheng",
        image: "/lovable-uploads/78ace439-20dc-4ad9-b1fa-778036331a9b.png",
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
