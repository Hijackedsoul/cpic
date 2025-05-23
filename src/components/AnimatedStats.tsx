
import React, { useState, useEffect } from 'react';
import { Users, Award, Code, Clock } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const stats = [
  {
    icon: <Users className="h-8 w-8 text-neon-magenta" />,
    value: 500,
    label: "Students Taught",
    suffix: "+"
  },
  {
    icon: <Award className="h-8 w-8 text-neon-cyan" />,
    value: 50,
    label: "Competition Winners",
    suffix: "+"
  },
  {
    icon: <Code className="h-8 w-8 text-neon-magenta" />,
    value: 1000,
    label: "Problems Solved",
    suffix: "+"
  },
  {
    icon: <Clock className="h-8 w-8 text-neon-cyan" />,
    value: 40,
    label: "Hours of Content",
    suffix: ""
  }
];

const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: { value: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const stepTime = Math.floor(duration / value);

  useEffect(() => {
    let startValue = 0;
    const timer = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      
      if (startValue >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, stepTime]);

  return (
    <span>{count}{suffix}</span>
  );
};

const StatCard = ({ icon, value, label, suffix = "", duration = 2000 }: StatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className="p-6 border border-white/10 rounded-lg bg-black/70 hover:border-neon-cyan/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 bg-black/40 p-3 rounded-full">{icon}</div>
        <div className="text-3xl font-bold mb-2 text-white font-mono">
          {isVisible ? <AnimatedCounter value={value} suffix={suffix} duration={duration} /> : "0"}
        </div>
        <div className="text-gray-400">{label}</div>
      </div>
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard 
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          duration={2000 + index * 300}
        />
      ))}
    </div>
  );
};

export default AnimatedStats;
