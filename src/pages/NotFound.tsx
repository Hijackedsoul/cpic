
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-md">
        <Code className="h-16 w-16 text-neon-cyan mx-auto mb-6" />
        <h1 className="text-6xl font-bold font-mono text-neon-magenta mb-4">404</h1>
        <div className="bg-black/50 border border-white/10 p-4 rounded-md mb-6 font-mono text-sm">
          <div className="text-white/70">
            <span className="text-neon-cyan">Error</span>: &#123;
          </div>
          <div className="pl-4">
            <span className="text-neon-magenta">message</span>: 
            <span className="text-white"> "Page not found"</span>,
          </div>
          <div className="pl-4">
            <span className="text-neon-magenta">path</span>: 
            <span className="text-white"> "{location.pathname}"</span>
          </div>
          <div className="text-white/70">&#125;</div>
        </div>
        <p className="text-xl text-white/80 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-mono">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
