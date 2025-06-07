
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

const Resources = () => {
  const [countdown, setCountdown] = useState(3);
  const driveUrl = "https://drive.google.com/drive/folders/1d5V-YF3DHq9VejAElIycts5PAUxnykLP";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = driveUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [driveUrl]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
          <span className="text-neon-cyan">Resources</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Redirecting you to our resources folder in {countdown} seconds...
        </p>
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-neon-cyan">
            <span className="text-2xl font-bold text-neon-cyan">{countdown}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          If you're not redirected automatically, 
          <a href={driveUrl} className="text-neon-cyan hover:underline ml-1">
            click here
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Resources;
