// Import necessary dependencies
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Custom hook for managing the chart's canvas reference
const useChartRef = () => {
  const canvasRef = useRef(null);
  return canvasRef;
};

// Function to render line chart
const renderLineChart = (canvasRef) => {
  // Dummy data for the chart
  const data = {
    datasets: [
      {
        label: 'My Dataset',
       data : [
        0, 500, 1000, 1500, 2000, 3000, 3500, 4000, 4500, 5000, 6000, 6500, 7000, 7500, 8000, // 0 to 14 correspond to '0'
        8000, 8500, 9000, 9500, 8000, 7000, 6500, 6000, 5500, 5000, 4000, 3500, 3000, 2500, 2000, // 15 to 29 correspond to '2020'
        2000, 2500, 3000, 3500, 4000, 5000, 5500, 6000, 6500, 7000, 8000, 8500, 9000, 9500, 8000, // 30 to 44 correspond to '2021'
        8000, 8500, 9000, 9500, 8000, 7000, 6500, 6000, 5500, 5000, 4000, 3500, 3000, 2500, 2000, // 45 to 59 correspond to '2021'
        2000, 2500, 3000, 3500, 4000, 5000, 5500, 6000, 6500, 7000, 8000, 8500, 9000, 9500, 8000, // 60 to 74 correspond to '2022'
        8000, 8500, 9000, 9500, 8000, 7000, 6500, 6000, 5500, 5000, 4000, 3500, 3000, 2500, 2000, // 75 to 89 correspond to '2023'
        2000, 2500, 3000, 3500, 4000, 5000, 5500, 6000, 6500, 7000, 8000, 8500, 9000, 9500, 8000, // 90 to 104 correspond to '2024'
      ],

        borderColor: '#2e5ce5', // Blue color for the line
        fill: false, // To have an unfilled line
        tension: 0.1,
        pointRadius: 1, // Adjust the size of dots
        pointBackgroundColor: 'rgb(0, 0, 255)', // Blue color for the dots
      },
    ],
  };

  // Options for the chart
  const options = {    
    scales: {
      x: {
        type: 'category',
        labels: ['', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', '2020', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', '2023', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC','2024', 'FEB'],
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        // beginAtZero: true, // Start the y-axis from zero
        ticks: {
          maxTicksLimit: 5, // Set the maximum number of ticks to 5
          stepSize: 500, // Set the step size for y-axis values
          callback: function (value, index, values) {
            return value === 0 ? '' : value + 'k'; // Add 'k' to values greater than zero
          },
        },
        grid: {
          borderDash: [5, 5], // Show horizontal grid lines as dashed
        },
      },
    },
    interaction: {
        intersect:false,
      },
      plugins: {
        tooltip: {
          enabled: true,
        },
        legend: {
            display: false
        },
      },
    
  };

  // Get the canvas element
  const ctx = canvasRef.current.getContext('2d');

  // Check if there is an existing chart instance and destroy it
  if (window.myChart) {
    window.myChart.destroy();
  }

  // Create the line chart
  window.myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
};

// Functional component
const YourComponent = () => {
  const canvasRef = useChartRef();

  useEffect(() => {
    renderLineChart(canvasRef);
  }, [canvasRef]); // Include canvasRef in the dependencies array to ensure it's up-to-date

  return (
    <div className="tileChartContainer topicPageTileChartContainer">
      <div className="chartJsContainer">
        <canvas height={150} width={300} id="canvas" ref={canvasRef} />
      </div>
    </div>
  );
};

export default YourComponent;
