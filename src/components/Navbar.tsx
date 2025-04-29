
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo size="large" className="hover:opacity-80 transition-opacity" />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
          <Link to="/register">
            <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-mono">
              Register Now
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-neon-cyan"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            <NavLinksMobile setIsOpen={setIsOpen} />
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black font-mono">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="font-mono text-white hover:text-neon-cyan transition-colors">Home</Link>
    <Link to="/about" className="font-mono text-white hover:text-neon-cyan transition-colors">About</Link>
    <Link to="/archives" className="font-mono text-white hover:text-neon-cyan transition-colors">Archives</Link>
    <Link to="/contact" className="font-mono text-white hover:text-neon-cyan transition-colors">Contact</Link>
  </>
);

const NavLinksMobile = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => (
  <>
    <Link 
      to="/" 
      className="font-mono text-white hover:text-neon-cyan transition-colors py-2"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
    <Link 
      to="/about" 
      className="font-mono text-white hover:text-neon-cyan transition-colors py-2"
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
    <Link 
      to="/archives" 
      className="font-mono text-white hover:text-neon-cyan transition-colors py-2"
      onClick={() => setIsOpen(false)}
    >
      Archives
    </Link>
    <Link 
      to="/contact" 
      className="font-mono text-white hover:text-neon-cyan transition-colors py-2"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
  </>
);

export default Navbar;
