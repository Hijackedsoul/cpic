
import Layout from '@/components/Layout';
import ScheduleCarousel from '@/components/ScheduleCarousel';

const Schedule = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-white mb-4">
              Event <span className="text-neon-cyan">Schedule</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Navigate through our 5-day intensive competitive programming course schedule
            </p>
          </div>
          <ScheduleCarousel />
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
