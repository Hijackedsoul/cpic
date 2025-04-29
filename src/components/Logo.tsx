
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/5589c09d-4907-43bb-94dc-5013b23ace65.png" 
        alt="CPIC Logo" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
