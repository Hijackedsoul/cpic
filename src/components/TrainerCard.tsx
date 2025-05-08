
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TrainerCardProps {
  name: string;
  image: string;
  role: string;
  funFact?: string;
}

const TrainerCard = ({ 
  name, 
  image, 
  role, 
  funFact
}: TrainerCardProps) => {
  // Generate initials for avatar fallback
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <div className="rounded-lg bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-colors duration-300 group">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-neon-cyan/30">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-black text-neon-cyan text-xs">{initials}</AvatarFallback>
          </Avatar>
          <h3 className="font-mono text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{name}</h3>
        </div>
        <p className="text-neon-magenta font-medium text-sm">{role}</p>
        <p className="text-gray-400 text-sm pt-1 italic">Fun Fact: {funFact || "Coming soon..."}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
