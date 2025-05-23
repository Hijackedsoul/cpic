
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import EventDetailsSection from '@/components/home/EventDetailsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  // Set the countdown date to June 16, 2025
  const countdownDate = new Date('2025-06-16T00:00:00');
  
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdwYZI5sAmtDMV88J_f2wsc7avFrbkcx9flsqxyg0l_GTjseQ/viewform?usp=header";

  return (
    <Layout>
      <HeroSection 
        countdownDate={countdownDate}
        registrationLink={registrationLink}
      />
      <EventDetailsSection registrationLink={registrationLink} />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
