
import { Link } from 'react-router-dom';
import { MessageSquare, Twitter, Mail, Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm max-w-xs">
              Competitive Programming Introductory Course - Master algorithms, break boundaries, and solve complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-mono text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">About</Link></li>
              <li><Link to="/our-team" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/our-partners" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Our Partners</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Register</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-mono text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <MessageSquare size={20} />
                <span className="sr-only">Discord</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CPIC. All rights reserved.</p>
          <p className="mt-1">
            <span className="text-neon-cyan font-mono text-xs">while(true) &#123; learn(); solve(); grow(); &#125;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
