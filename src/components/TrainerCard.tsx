
import React, { useState } from 'react';
import { Medal, Save, Edit2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface TrainerCardProps {
  name: string;
  image: string;
  role: string;
  medals: {
    NOI?: boolean;
    IOI?: boolean;
    ICPC?: boolean;
  };
  achievements?: string[];
  bio: string;
  onUpdate?: (updatedMember: {
    name: string;
    role: string;
    achievements?: string[];
    bio: string;
  }) => void;
}

const TrainerCard = ({ 
  name, 
  image, 
  role, 
  medals, 
  achievements = [], 
  bio,
  onUpdate
}: TrainerCardProps) => {
  // Generate initials for avatar fallback
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedRole, setEditedRole] = useState(role);
  const [editedBio, setEditedBio] = useState(bio);
  const [editedAchievements, setEditedAchievements] = useState([...achievements]);

  const handleSave = () => {
    if (onUpdate) {
      onUpdate({
        name: editedName,
        role: editedRole,
        achievements: editedAchievements,
        bio: editedBio
      });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original values
    setEditedName(name);
    setEditedRole(role);
    setEditedBio(bio);
    setEditedAchievements([...achievements]);
    setIsEditing(false);
  };

  const updateAchievement = (index: number, value: string) => {
    const newAchievements = [...editedAchievements];
    newAchievements[index] = value;
    setEditedAchievements(newAchievements);
  };

  const addAchievement = () => {
    setEditedAchievements([...editedAchievements, '']);
  };

  const removeAchievement = (index: number) => {
    const newAchievements = [...editedAchievements];
    newAchievements.splice(index, 1);
    setEditedAchievements(newAchievements);
  };
  
  return (
    <div className="rounded-lg bg-black/50 border border-white/10 overflow-hidden hover:border-neon-cyan transition-colors duration-300 group">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={editedName} 
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
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Name</label>
              <Input 
                value={editedName} 
                onChange={(e) => setEditedName(e.target.value)} 
                className="bg-black/70 text-white border-white/20"
              />
            </div>
            
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Role</label>
              <Input 
                value={editedRole} 
                onChange={(e) => setEditedRole(e.target.value)} 
                className="bg-black/70 text-white border-white/20"
              />
            </div>
            
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Achievements</label>
              {editedAchievements.map((achievement, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input 
                    value={achievement} 
                    onChange={(e) => updateAchievement(index, e.target.value)} 
                    className="bg-black/70 text-white border-white/20 flex-1"
                  />
                  <Button 
                    onClick={() => removeAchievement(index)} 
                    variant="outline" 
                    size="sm" 
                    className="border-white/20 hover:bg-white/10 px-2"
                  >
                    -
                  </Button>
                </div>
              ))}
              <Button 
                onClick={addAchievement} 
                variant="outline" 
                size="sm" 
                className="border-white/20 hover:bg-white/10 w-full mt-1"
              >
                + Add achievement
              </Button>
            </div>
            
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Bio</label>
              <Textarea 
                value={editedBio} 
                onChange={(e) => setEditedBio(e.target.value)} 
                className="bg-black/70 text-white border-white/20 min-h-[80px]"
              />
            </div>
            
            <div className="flex gap-2 pt-1">
              <Button 
                onClick={handleSave} 
                className="bg-neon-cyan hover:bg-neon-cyan/80 text-black flex-1"
              >
                <Save size={16} /> Save
              </Button>
              <Button 
                onClick={handleCancel} 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-neon-cyan/30">
                <AvatarImage src={image} alt={editedName} />
                <AvatarFallback className="bg-black text-neon-cyan text-xs">{initials}</AvatarFallback>
              </Avatar>
              <h3 className="font-mono text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{editedName}</h3>
            </div>
            <p className="text-neon-magenta font-medium text-sm">{editedRole}</p>
            
            {editedAchievements.length > 0 && (
              <ul className="text-xs text-neon-green space-y-1 pt-1">
                {editedAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <span className="text-neon-cyan">›</span> {achievement}
                  </li>
                ))}
              </ul>
            )}
            
            <p className="text-gray-400 text-sm pt-1">{editedBio}</p>
            
            <Button 
              onClick={() => setIsEditing(true)} 
              variant="outline" 
              size="sm" 
              className="mt-2 text-xs border-white/20 hover:bg-white/10"
            >
              <Edit2 size={14} className="mr-1" /> Edit
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TrainerCard;
