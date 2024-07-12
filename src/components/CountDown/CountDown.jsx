import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';
import { FaRegHourglass } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import priceMapping from '../../json/priceMapping.json'; 

const CountdownTimer = () => { 
  const defaultDuration = 2; // Duration in minutes, adjust as needed
  const versionKey = '2.0'; // Update this key with each edit

  // Function to calculate and set the target date based on the duration
  const getTargetDate = (duration) => {
    const newTargetDate = new Date(Date.now() + duration * 60000); 
    localStorage.setItem('targetDate', newTargetDate);
    return newTargetDate;
  };

  // Check and update version key in local storage
  const checkAndUpdateVersion = () => {
    const storedVersion = localStorage.getItem('versionKey');
    if (storedVersion !== versionKey) {
      localStorage.clear();
      localStorage.setItem('versionKey', versionKey);
    }
  };

  checkAndUpdateVersion();

  // Get the saved target date or set a new one if it doesn't exist
  const initialTargetDate = () => {
    const savedDate = localStorage.getItem('targetDate');
    if (savedDate) {
      return new Date(savedDate);
    } else {
      return getTargetDate(defaultDuration);
    }
  };

  // Initializing state for the target date using the getTargetDate function
  const [targetDate, setTargetDate] = useState(initialTargetDate);

  // Initializing state for the price
  const [price, setPrice] = useState(Object.values(priceMapping).filter(val => typeof val === 'number')[0]); 
  
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

  // Function to get the next price from the price mapping
  const getNextPrice = (currentPrice) => {
    const prices = Object.values(priceMapping).filter(val => typeof val === 'number');
    const currentIndex = prices.indexOf(currentPrice);
    return currentIndex < prices.length - 1 ? prices[currentIndex + 1] : prices[currentIndex];
  };

  // Function to calculate BNTHR based on the current value
  const calculateBNTHRToGet = async (val) => {
    const target = priceMapping.target;
    const totalSupply = priceMapping.totalSupply;
    return val / (target / totalSupply);
  };

  // Function to calculate USD to pay based on the current value
  const calculateUSDToPay = async (val) => {
    const target = priceMapping.target;
    const totalSupply = priceMapping.totalSupply;
    return val * (target / totalSupply);
  };

  // Effect hook to update the countdown timer and handle price changes
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // When countdown reaches zero, update the price and reset the target date
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        const newPrice = getNextPrice(price);
        setPrice(newPrice);

        localStorage.removeItem('targetDate');
        const newTargetDate = getTargetDate(defaultDuration); 
        setTargetDate(newTargetDate);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, price, defaultDuration]); 

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
      <span className="text-xl text-white">Current price is {price.toFixed(4)}</span>
    </div>
  );
};

export default CountdownTimer;
