
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface EditableTestimonialCardProps {
  initialName: string;
  initialRole: string;
  initialTestimonial: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const EditableTestimonialCard = ({ 
  initialName, 
  initialRole, 
  initialTestimonial, 
  rating 
}: EditableTestimonialCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [role, setRole] = useState(initialRole);
  const [testimonial, setTestimonial] = useState(initialTestimonial);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-6 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm relative">
      <div className="absolute -top-3 right-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={`${i < rating ? 'text-neon-cyan fill-neon-cyan' : 'text-gray-600'}`}
          />
        ))}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <Textarea 
            value={testimonial} 
            onChange={(e) => setTestimonial(e.target.value)} 
            className="min-h-[100px] bg-black/50 text-white border-white/20"
            placeholder="Testimonial text"
          />
          <Input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="bg-black/50 text-white border-white/20"
            placeholder="Name"
          />
          <Input 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            className="bg-black/50 text-white border-white/20"
            placeholder="Role"
          />
          <Button 
            onClick={handleSave} 
            className="bg-neon-cyan hover:bg-neon-cyan/80 text-black"
          >
            Save
          </Button>
        </div>
      ) : (
        <>
          <blockquote className="text-gray-300 text-sm mb-4">"{testimonial}"</blockquote>
          <div className="mt-4">
            <p className="font-mono font-bold text-white">{name}</p>
            <p className="text-xs text-neon-magenta">{role}</p>
            <Button 
              onClick={() => setIsEditing(true)} 
              variant="outline" 
              size="sm" 
              className="mt-2 text-xs border-white/20 hover:bg-white/10"
            >
              Edit
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditableTestimonialCard;
