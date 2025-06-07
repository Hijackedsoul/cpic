
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import ScheduleDayCard from './ScheduleDayCard';

interface ScheduleActivity {
  time: string;
  venue: string;
  activity: string;
  remarks: string;
}

interface ScheduleDay {
  day: number;
  date: string;
  title: string;
  activities: ScheduleActivity[];
}

const scheduleData: ScheduleDay[] = [
  {
    day: 1,
    date: "Mon, 16 June 2025",
    title: "Introduction to Programming in C++",
    activities: [
      {
        time: "09:00 - 09:30",
        venue: "LT 15",
        activity: "Registration and Admin",
        remarks: "Registration starts by 08:30"
      },
      {
        time: "09:30 - 09:55",
        venue: "LT 15",
        activity: "Opening, introduction to trainers and overview of the course",
        remarks: "Opening remarks by A/P Steven Halim"
      },
      {
        time: "09:55 - 12:00",
        venue: "LT 15",
        activity: "Games / Bonding / Ice-breakers",
        remarks: "Participants will be split into OGs across LT15 and PL1-6. Trainers and crew will be facilitators. Games will be on a CTF-like platform, where participants will complete missions, some will be a light introduction to CP, others are for the participants to bond and get to know each other better"
      },
      {
        time: "12:00 - 13:30",
        venue: "COM1 study lounge (subject to change)",
        activity: "Catered Lunch",
        remarks: "Bento Set (Halal and vegetarian options will be available)"
      },
      {
        time: "13:30 - 15:00",
        venue: "LT 15",
        activity: "Topic 1: C++ Syntax - Input/Output, Data Types, Variables, Math, Control Flow and Loops, Intro to Ad Hoc Problems and problem solving",
        remarks: "Mass lecture for all participants. We do have a few small practices throughout the lecture."
      },
      {
        time: "15:00 - 15:15",
        venue: "-",
        activity: "Break",
        remarks: "Buffer time for the students to move to their respective rooms for the practice session"
      },
      {
        time: "15:15 - 17:00",
        venue: "PL1-6",
        activity: "Practice Session",
        remarks: "Syntax and ad-hoc problem set to consolidate Topic 2. We will allocate 3-5 trainers in each room to cater to the students more personally and focus on them."
      },
      {
        time: "17:00",
        venue: "-",
        activity: "Dismissal",
        remarks: ""
      }
    ]
  },
  {
    day: 2,
    date: "Tue, 17 June 2025",
    title: "Basic Data Structures",
    activities: [
      {
        time: "09:00 - 09:15",
        venue: "PL1-6",
        activity: "Check-in and admin",
        remarks: "Registration starts by 08:30"
      },
      {
        time: "09:15 - 11:15",
        venue: "PL1-6",
        activity: "Practice Contest 1: Syntax and Ad Hoc",
        remarks: "2-hour contest on what was covered on Day 1"
      },
      {
        time: "11:15 - 11:30",
        venue: "-",
        activity: "Break",
        remarks: ""
      },
      {
        time: "11:30 - 12:00",
        venue: "LT 15",
        activity: "Practice Contest 1 solution walk-through",
        remarks: ""
      },
      {
        time: "12:00 - 13:30",
        venue: "-",
        activity: "Lunch",
        remarks: "No lunch catered. Trainers will guide participants to nearby food places (COM1 Canteen, The Deck, and UTown) for their meals"
      },
      {
        time: "13:30 - 15:00",
        venue: "LT 15",
        activity: "Topic 2: Basic Data Structures - Time Complexity and Algorithmic Analysis, Vectors, Deques, Stacks and Queues, Sorting",
        remarks: ""
      },
      {
        time: "15:00 - 15:15",
        venue: "-",
        activity: "Break",
        remarks: "Time for the students to move to their respective rooms for the practice session"
      },
      {
        time: "15:15 - 17:00",
        venue: "PL1-6",
        activity: "Practice session",
        remarks: "Basic Data structure and sorting problem set to consolidate Topic 2. We will allocate 3-5 trainers in each room to cater to the students more personally and focus on them."
      },
      {
        time: "17:00",
        venue: "-",
        activity: "Dismissal",
        remarks: ""
      }
    ]
  },
  {
    day: 3,
    date: "Wed, 18 June 2025",
    title: "Intermediate Data Structures",
    activities: [
      {
        time: "09:00 - 09:15",
        venue: "PL1-6",
        activity: "Check-in and admin",
        remarks: ""
      },
      {
        time: "09:15 - 11:15",
        venue: "PL1-6",
        activity: "Practice Contest 2: Basic Data Structures",
        remarks: "2-hour contest on what was covered on Day 2"
      },
      {
        time: "11:15 - 11:30",
        venue: "-",
        activity: "Break",
        remarks: ""
      },
      {
        time: "11:30 - 12:00",
        venue: "LT 15",
        activity: "Practice Contest 2 solution walk-through",
        remarks: ""
      },
      {
        time: "12:00 - 13:30",
        venue: "-",
        activity: "Lunch",
        remarks: "No lunch catered. Trainers will guide participants to nearby food places (COM1 Canteen and/or the Deck depending on availability) for their meals"
      },
      {
        time: "13:30 - 15:00",
        venue: "LT 15",
        activity: "Topic 3: Intermediate Data Structures - Prefix sums, Intermediate DS, Sorting (Custom sorting), Intro to greedy",
        remarks: ""
      },
      {
        time: "15:00 - 15:15",
        venue: "-",
        activity: "Break",
        remarks: "Time for the students to move to their respective rooms for the practice session"
      },
      {
        time: "15:15 - 17:00",
        venue: "PL1-6",
        activity: "Practice session",
        remarks: "Intermediate Data structure and greedy problem set to consolidate Topic 2. We will allocate 3-5 trainers in each room to cater to the students more personally and focus on them."
      },
      {
        time: "17:00",
        venue: "-",
        activity: "Dismissal",
        remarks: ""
      }
    ]
  },
  {
    day: 4,
    date: "Thurs, 19 June 2025",
    title: "Searching and Classic Techniques",
    activities: [
      {
        time: "09:00 - 09:15",
        venue: "PL1-6",
        activity: "Check-in and admin",
        remarks: ""
      },
      {
        time: "09:15 - 11:15",
        venue: "PL1-6",
        activity: "Practice Contest 3: Intermediate Data Structures",
        remarks: "2-hour contest on what was covered on Day 3"
      },
      {
        time: "11:15 - 11:30",
        venue: "-",
        activity: "Break",
        remarks: ""
      },
      {
        time: "11:30 - 12:00",
        venue: "LT 15",
        activity: "Practice Contest 3 solution walk-through",
        remarks: ""
      },
      {
        time: "12:00 - 13:30",
        venue: "-",
        activity: "Lunch",
        remarks: "No lunch catered. Trainers will guide participants to nearby food places (COM1 Canteen and/or the Deck depending on availability) for their meals"
      },
      {
        time: "13:30 - 15:00",
        venue: "LT 15",
        activity: "Topic 4: Searching and Classic Techniques - Complete search, Binary search, Sliding window/2 Pointers",
        remarks: ""
      },
      {
        time: "15:00 - 15:15",
        venue: "-",
        activity: "Break",
        remarks: "Time for the students to move to their respective rooms for the practice session"
      },
      {
        time: "15:15 - 17:00",
        venue: "PL1-6",
        activity: "Practice session",
        remarks: "Searching and classic technique problems set to consolidate Topic 4."
      },
      {
        time: "17:00",
        venue: "-",
        activity: "Dismissal",
        remarks: ""
      }
    ]
  },
  {
    day: 5,
    date: "Fri, 20 June 2025",
    title: "Contest Strategies + Final Contest",
    activities: [
      {
        time: "09:00 - 09:15",
        venue: "LT 15",
        activity: "Check-in and admin",
        remarks: ""
      },
      {
        time: "09:15 - 10:00",
        venue: "LT 15",
        activity: "Bonding Session / Brain-teasing Puzzles",
        remarks: "Engaging puzzles to warm participants up for the final contest, offering a light and enjoyable start to the day."
      },
      {
        time: "10:00 - 10:30",
        venue: "LT 15",
        activity: "Talk by Exclusive Sponsor",
        remarks: "Talk prepared by our Hudson River Trading to participants"
      },
      {
        time: "10:30 - 11:00",
        venue: "LT 15",
        activity: "Topic 5: Contest Strategy and Final Contest Briefing",
        remarks: ""
      },
      {
        time: "11:00 - 12:30",
        venue: "COM1 study lounge (subject to change)",
        activity: "Catered Lunch (Buffet)",
        remarks: "Buffet lunch to be held on LT 15 foyer"
      },
      {
        time: "12:30 - 16:30",
        venue: "PL1-5",
        activity: "Final Contest",
        remarks: "Our signature grand final contest! Attractive prizes (including medals) to be won!"
      },
      {
        time: "16:30 - 17:00",
        venue: "-",
        activity: "Break",
        remarks: "Time for the students to move to LT15 to rest and discuss the contest"
      },
      {
        time: "17:00 - 18:00",
        venue: "LT15",
        activity: "Prize Presentation and Closing Ceremony",
        remarks: "Final Contest solution presentation, Address by Guests of Honour, Presentation of certificates"
      }
    ]
  }
];

const ScheduleCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {scheduleData.map((day, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
              <ScheduleDayCard day={day} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-black/50 border-neon-cyan/50 hover:bg-neon-cyan/20 hover:border-neon-cyan text-white" />
          <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-black/50 border-neon-cyan/50 hover:bg-neon-cyan/20 hover:border-neon-cyan text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default ScheduleCarousel;
