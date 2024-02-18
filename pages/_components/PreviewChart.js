import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const ChartPreview = ({ chartValues, id, isSmall }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const renderLineChart = (canvasRef, chartValues=[]) => {
      const data = {
        datasets: [
          {
            label: 'My Dataset',
            data: chartValues,

            borderColor: '#2e5ce5',
            fill: false,
            tension: 0.1,
            pointRadius: 0,
            // pointBackgroundColor: 'rgb(0, 0, 255)',
          },
        ],
      };

      const months = ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const labels = ['', ...months, isSmall ? '' : '2020', ...months, isSmall ? '' : '2021', ...months, isSmall ? '' : '2023', ...months, isSmall ? '' : '2024', 'FEB'];

      const options = {
        scales: {
          x: {
            type: 'category',
            labels: labels,
            grid: {
              display: false,
            },
            border: {
              display: false,
              drawBorder: false
            },
            ticks: {
              color: '#d3ddf5',
              callback: function (props) {
                const display = [12, 24, 36, 48, 60];
                return display.includes(props) ? labels[props] : null;
              },
            },
          },
          y: {
            grid: {
              color: '#d3ddf5',
            },
            border: {
              display: false,
              drawBorder: false,
              dash: [4, 4],
            },
            ticks: {
              maxTicksLimit: 5,
              stepSize: Math.round(Math.max(...chartValues) / 6),
              color: '#d3ddf5',
              callback: function (value, index, values) {
                return value === 0 ? '' : value + 'k';
              },
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          
        },
        animation: {
          duration: 0
      }
      };

      const ctx = canvasRef.current.getContext('2d');

      // Check if there is an existing chart instance and destroy it
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create the line chart
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
      });
    };

    renderLineChart(canvasRef, chartValues);

    return () => {
      // Cleanup function to destroy the chart instance when component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartValues, id]);

  return (
    <div className="chartPreview">
      <canvas height={ isSmall? 40: 150} width={isSmall ? 200 : 300} ref={canvasRef} id={id} />
    </div>
  );
};
