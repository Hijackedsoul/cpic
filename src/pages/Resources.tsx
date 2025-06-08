
import { useEffect } from 'react';
import Layout from '@/components/Layout';

const Resources = () => {
  const driveUrl = "https://drive.google.com/drive/folders/1nDSRpJdMpuwkiOlRhEJbyLfhoXfBjW9E";

  useEffect(() => {
    // Immediate redirect to Google Drive folder
    window.location.href = driveUrl;
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
          <span className="text-neon-cyan">Resources</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Redirecting you to our resources folder...
        </p>
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
