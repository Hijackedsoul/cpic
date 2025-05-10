
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const registrationUrl = "https://docs.google.com/forms/d/12GyEr00JHR-5YKopf0HUPA3_WwbPj5znc6zhEfzSzZ0/edit";

  useEffect(() => {
    // Redirect to the Google Form
    window.location.href = registrationUrl;
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting to Registration Form...</h1>
        <p className="text-gray-400 mb-6">You are being redirected to the CPIC registration form.</p>
        <p className="text-gray-400">
          If you are not automatically redirected, please{" "}
          <a 
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-cyan hover:underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
