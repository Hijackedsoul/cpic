
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const TestimonialCard = ({ name, role, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="p-6 pt-10 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm relative h-full">
      <div className="absolute -top-0 right-4 flex p-1 bg-black/70 rounded-md">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            size={18}
            className={`${i < rating ? 'text-neon-cyan fill-neon-cyan' : 'text-gray-600'} mx-0.5`}
          />
        ))}
      </div>
      <blockquote className="text-gray-300 text-sm mb-4 line-clamp-6">"{testimonial}"</blockquote>
      <div className="mt-4">
        <p className="font-mono font-bold text-white">{name}</p>
        <p className="text-xs text-neon-magenta">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
