
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'default' | 'large';
}

const Logo = ({ className = "", size = "default" }: LogoProps) => {
  const sizeClasses = {
    default: "h-10",
    large: "h-16"
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/5589c09d-4907-43bb-94dc-5013b23ace65.png" 
        alt="CPIC Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </Link>
  );
};

export default Logo;
