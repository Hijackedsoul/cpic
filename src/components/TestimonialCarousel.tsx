
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface Testimonial {
  name: string;
  role: string;
  testimonial: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CS Undergraduate, NUS",
    testimonial: "CPIC completely changed my approach to problem-solving. The trainers were incredibly knowledgeable and supportive.",
    rating: 5
  },
  {
    name: "Akash Patel",
    role: "IOI Silver Medalist",
    testimonial: "The course helped me improve my algorithmic thinking and coding skills. I went on to win a silver medal at IOI!",
    rating: 5
  },
  {
    name: "Li Wei",
    role: "High School Student",
    testimonial: "As a beginner, I was worried it would be too advanced, but the trainers made complex concepts easy to understand.",
    rating: 4
  },
  {
    name: "James Rodriguez",
    role: "Software Engineering Intern",
    testimonial: "The competitive programming skills I learned at CPIC helped me ace my technical interviews at top tech companies.",
    rating: 5
  },
  {
    name: "Mei Ling",
    role: "Computing Student",
    testimonial: "Great course structure and engaging instructors. I learned more in 5 days than I did in an entire semester.",
    rating: 5
  },
  {
    name: "Tien Kai",
    role: "CPIC 2024 Participant",
    testimonial: "In the span of a short 4 days, CPIC helped me to gain my footing in competitive programming, and motivated me to explore more into this field. I gained many connections with trainers who were genuinely impressive and did not hesitate to answer my questions even after the course. Now I'm out here grinding for NOI and suffering... but like, in a good way.",
    rating: 5
  },
  {
    name: "Prudent",
    role: "CPIC 2024 Participant",
    testimonial: "I joined CPIC knowing almost nothing about competitive programming—just vibes and curiosity. But thanks to the amazing mentors and structured lessons, I actually understood things (crazy, I know). Fast forward: I've won medals at NOI and a bunch of other CP contests. CPIC really gave me the push I didn't know I needed.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-4">
          <CarouselPrevious className="relative static left-0 right-0 translate-y-0" />
          <CarouselNext className="relative static left-0 right-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
