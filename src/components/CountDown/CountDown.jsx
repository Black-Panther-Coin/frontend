import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';
import { FaRegHourglass } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const CountdownTimer = ({targetDate, price, onGetNewValues}) => { 
  // Function to calculate the remaining time until the target date
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  // Initializing state for the time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effect hook to update the countdown timer and handle price changes
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // When countdown reaches zero, update the price and reset the target date
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
          onGetNewValues()
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, price]); 

  // Animation settings for the countdown timer
  const springs = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    config: { duration: 300 },
    reset: true,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4 bg-purple-900 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 text-2xl text-yellow-500">
        <FiClock className="text-3xl" />
        <span>Price increase in:</span>
        <FaRegHourglass className="text-3xl" />
      </div>
      <div className="flex space-x-4">
        {['days', 'hours', 'minutes', 'seconds'].map((interval, index) => (
          <animated.div
            key={index}
            className="flex flex-col items-center transform transition-transform"
            style={springs}
          >
            <div className="text-4xl font-mono bg-yellow-200 text-purple-900 rounded-lg p-3 shadow-md">
              {timeLeft[interval]}
            </div>
            <div className="text-lg text-yellow-500">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
          </animated.div>
        ))}
      </div>
      <span className="text-xl text-white">Current price is {price}</span>
    </div>
  );
};

export default CountdownTimer;
