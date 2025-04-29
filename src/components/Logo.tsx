
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = "", size = "medium" }: LogoProps) => {
  // Map sizes to height classes
  const sizeClasses = {
    small: "h-8",
    medium: "h-10",
    large: "h-16",
  };
  
  const heightClass = sizeClasses[size];
  
  return (
    <Link to="/" className={className}>
      <img 
        src="/lovable-uploads/712cfa86-4683-490d-a5c1-676bd68f6196.png" 
        alt="CPIC Logo" 
        className={`${heightClass} w-auto`} 
      />
    </Link>
  );
};

export default Logo;
