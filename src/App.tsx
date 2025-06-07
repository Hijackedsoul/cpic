import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Archives from "./pages/Archives";
import NotFound from "./pages/NotFound";
import OurPartners from "./pages/OurPartners";
import OurTeam from "./pages/OurTeam";
import Resources from "./pages/Resources";
import Schedule from "./pages/Schedule";

// ScrollToTop component to handle scrolling to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
