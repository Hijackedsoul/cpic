
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  infinite?: boolean;
  className?: string;
}

const TypewriterText = ({ 
  text, 
  delay = 100, 
  infinite = false, 
  className = "" 
}: TypewriterTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex <= text.length && !isDeleting && !isPaused) {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
        
        if (currentIndex === text.length && infinite) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, 1000);
        }
      }, delay);
    } else if (isDeleting && !isPaused) {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentIndex));
        setCurrentIndex(prevIndex => prevIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
          }, 500);
        }
      }, delay / 2);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, isDeleting, isPaused, text]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}<span className="border-r-2 border-neon-cyan animate-blink">&nbsp;</span>
    </span>
  );
};

export default TypewriterText;
