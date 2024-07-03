import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi'; // Example icon from react-icons
import { FaRegHourglass } from 'react-icons/fa'; // Another icon for enhancement
import { useSpring, animated } from 'react-spring'; // For animations

const CountDown = () => {
  // Calculate target date 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const springs = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    config: { duration: 300 },
    reset: true,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4 bg-purple-950 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2 text-3xl text-yellow-500">
        <FiClock className="text-4xl" />
        <span>Our next price increase will be </span>
        <FaRegHourglass className="text-3xl" />
      </div>
      <div className="flex space-x-4 ">
        {['days', 'hours', 'minutes', 'seconds'].map((interval, index) => (
          <animated.div
            key={index}
            className="flex flex-col items-center transform transition-transform"
            style={springs}
          >
            <div className="text-6xl font-mono bg-[#FFFAE1] text-purple-950 rounded-lg p-4 shadow-lg">
              {timeLeft[interval]}
            </div>
            <div className="text-lg text-yellow-500">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
