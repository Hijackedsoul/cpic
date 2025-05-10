
import React from 'react';
import CountdownTimer from './CountdownTimer';

const CustomCountdownTimer: React.FC = () => {
  // Set countdown date to June 16, 2025
  const countdownDate = new Date('2025-06-16T00:00:00');
  
  return <CountdownTimer targetDate={countdownDate} />;
};

export default CustomCountdownTimer;
