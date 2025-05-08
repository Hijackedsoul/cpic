
import React from 'react';
import { Medal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TrainerCardProps {
  name: string;
  image: string;
  role: string;
  medals: {
    NOI?: boolean;
    IOI?: boolean;
    ICPC?: boolean;
  };
  bio: string;
}

const TrainerCard = ({ 
  name, 
  image, 
  role, 
  medals,
  bio
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
        {Object.entries(medals).some(([, value]) => value) && (
          <div className="absolute top-2 right-2 flex space-x-1">
            {medals.NOI && (
              <div className="text-neon-green bg-black/70 p-1 rounded-full" title="National Olympiad in Informatics">
                <Medal size={16} className="text-neon-green" />
              </div>
            )}
            {medals.IOI && (
              <div className="text-neon-cyan bg-black/70 p-1 rounded-full" title="International Olympiad in Informatics">
                <Medal size={16} className="text-neon-cyan" />
              </div>
            )}
            {medals.ICPC && (
              <div className="text-neon-magenta bg-black/70 p-1 rounded-full" title="International Collegiate Programming Contest">
                <Medal size={16} className="text-neon-magenta" />
              </div>
            )}
          </div>
        )}
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
        <p className="text-gray-400 text-sm pt-1">{bio}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
