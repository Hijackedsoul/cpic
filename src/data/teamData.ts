export interface TeamMember {
  name: string;
  image?: string;
  role: string;
  funFact?: string;
  imagePosition?: string;
}

export interface TeamData {
  organisers: TeamMember[];
  media: TeamMember[];
  trainers: TeamMember[];
}

export const teamData: TeamData = {
  organisers: [
    {
      name: "Arya Ananda Putra",
      image: "/lovable-uploads/a2a89666-c8d8-460b-a3e3-d52a2547b764.png",
      role: "Head Organiser",
      funFact: "Clippers, flippers, I eat snickers. Nuggets in 7",
      imagePosition: "center 40%" // Shifted further up
    },
    {
      name: "Ryan Shaw",
      image: "/lovable-uploads/76f39c30-9725-4e7e-896d-e844033e2d7c.png",
      role: "Head of Training",
      funFact: "my mothertongue is c++"
    },
    //{
      //name: "Raphael Lim Fu En",
      //image: "/lovable-uploads/e6aad531-8fc5-4a72-a9fc-c166d1871e6a.png",
      //role: "Training",
      //funFact: "I missed gold by 1 point"
    //},
    {
      name: "Pannawit Supanwassa",
      image: "/lovable-uploads/5a40b946-98a1-495a-91ca-e0d0338143f6.png",
      role: "Head of Strategy, Planning and Operation",
      funFact: "Love to yap about quantum physics",
      imagePosition: "center top"
    },
    {
      name: "Seah E-Ket",
      image: "/lovable-uploads/b32f8ec9-a71c-4589-ba00-756a2348ebf5.png",
      role: "Strategy, Planning and Operation",
      funFact: "Frisbee enthusiast",
      imagePosition: "center"
    },
    {
      name: "Jayden Tiew",
      image: "/lovable-uploads/45bfd287-2395-417f-8d7c-b52cb0add82e.png",
      role: "Strategy, Planning and Operation",
      funFact: "integers >> real numbers, also competitive programming >> school",
      imagePosition: "center 40%" // Shifted down
    },
    {
      name: "Francis Ang Zhao Xiong",
      image: "/lovable-uploads/9a085198-d377-46f1-a07b-6e909dd44927.png", 
      role: "Head of Outreach",
      funFact: "I figure out most of my solutions when I'm on the toiletbowl :3",
      imagePosition: "center top"
    },
    {
      name: "Edward Yee Mynn Sherng",
      image: "/lovable-uploads/698aed07-51e8-4eff-a40e-f4b4c3678ee6.png", 
      role: "Outreach",
      funFact: "Sleep"
    },
  ],
  media: [
    {
      name: "Nguyen Chi Ken",
      role: "Head of Media & Publicity",
      funFact: "Has a collection of vintage cameras"
    },
    {
      name: "Frank",
      image: "/lovable-uploads/c2e0e01d-5076-4179-81c2-106ae1df61a1.png",
      role: "Media & Publicity",
      funFact: "Food and music makes me happy",
      imagePosition: "center top"
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
      image: "/lovable-uploads/e6aad531-8fc5-4a72-a9fc-c166d1871e6a.png",
      role: "Trainer",
      funFact: "I missed gold by 1 point"
    },
    {
      name: "Yu Zheyuan",
      image: "/lovable-uploads/88c58101-2c5c-4462-b752-be891990c309.png",
      role: "Trainer",
      funFact: "skibidi toilet",
      imagePosition: "center"
    },
    {
      name: "Nguyen Dinh Anh",
      image: "/lovable-uploads/e744596c-1de3-4ec3-9bc3-61bf1eee5b7a.png",
      role: "Trainer",
      funFact: "I love taking long walks to the fridge",
      imagePosition: "center 15%" // Shifted further up
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
      image: "/lovable-uploads/521f5cb0-fc9b-4100-be74-5aa7914f58aa.png",
      role: "Trainer",
      funFact: "Eket cant be this cute.",
      imagePosition: "center top"
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
      image: "/lovable-uploads/3069c6af-4890-4762-b797-21baa33b9733.png",
      role: "Trainer",
      funFact: "My IOI selection rank was higher than my NOI rank this year which makes absolutely no sense",
      imagePosition: "center"
    },
    {
      name: "William Edward Sugiharto",
      image: "/lovable-uploads/ea71a862-7717-42c6-bb32-f65af853b39c.png",
      role: "Trainer",
      funFact: "I have a pet otter:)",
      imagePosition: "center 40%"
    },
    {
      name: "Truong Le Huy",
      image: "/lovable-uploads/1aa2c46e-c227-487e-8106-ec64fa2227d9.png",
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
    {
      name: "Bunnath Tith",
      role: "Trainer",
      funFact: "",
      imagePosition: "center"
    },
    {
      name: "Tung Jia Ray",
      image: "/lovable-uploads/93a4c3be-8a18-4cb1-a0c0-e52035188036.png",
      role: "Trainer",
      funFact: "math",
      imagePosition: "center top"
    },
  ],
};
