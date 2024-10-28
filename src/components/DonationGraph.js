import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const donations = [
  { name: 'Alice', amount: 150 },
  { name: 'Bob', amount: 200 },
  { name: 'Charlie', amount: 50 },
  { name: 'David', amount: 300 },
  { name: 'Usama', amount: 150 },
  { name: 'Usama', amount: 10 },
  { name: 'Alice', amount: 150 },
  { name: 'Bob', amount: 200 },
  { name: 'Charlie', amount: 50 },
  { name: 'David', amount: 300 },
  { name: 'Usama', amount: 150 },
  { name: 'Usama', amount: 10 },
]; 

const DonationGraph = () => {
  // Fallback if donations are empty or undefined
  const hasDonations = donations.length > 0;

  const data = {
    labels: hasDonations ? donations.map(donation => donation.name) : ['No Data'],
    datasets: [
      {
        label: 'Donation Amount',
        data: hasDonations ? donations.map(donation => donation.amount) : [0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Donation Pool Graph',
        font: {
          size: 18,  // You can also adjust the size if needed
          weight: 'bold', // Makes the title text bold
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
     
      <Bar data={data} options={options} />
      {!hasDonations && <p className="text-center text-gray-500 mt-4">No donations available.</p>}
    </div>
  );
};

export default DonationGraph;



