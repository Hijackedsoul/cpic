
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={className}>
      <img 
        src="/lovable-uploads/712cfa86-4683-490d-a5c1-676bd68f6196.png" 
        alt="CPIC Logo" 
        className="h-10 w-auto" 
      />
    </Link>
  );
};

export default Logo;
