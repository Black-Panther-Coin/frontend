import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Tokenomics() {
  const data = {
    labels: ['DEXs', 'Dev', 'Charity', 'Marketing', 'Treasury', 'CEXs'],
    datasets: [
      {
        data: [50, 10, 10, 10, 10, 10],
        backgroundColor: [
          '#4F46E5', // DEXs
          '#A78BFA', // Dev
          '#C084FC', // Charity
          '#8B5CF6', // Marketing
          '#7C3AED', // Treasury
          '#6D28D9'  // CEXs
        ],
        hoverBackgroundColor: [
          '#4338CA',
          '#A855F7',
          '#D946EF',
          '#6D28D9',
          '#5B21B6',
          '#4C1D95'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-yellow-500 py-8 h-96">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-4 lg:mb-0 lg:w-1/2">
          <h2 className="text-3xl font-bold text-purple-950 mb-2">BPNTHR TOKENOMICS</h2>
        </div>
        <div className="lg:w-1/2 w-full max-w-xs mx-auto lg:max-w-none">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;