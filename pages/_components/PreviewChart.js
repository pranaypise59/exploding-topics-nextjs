'use client'
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const useChartRef = () => {
  const canvasRef = useRef(null);
  return canvasRef;
};

export const ChartPreview = ({ chartValues, chartRef, label }) => {
  useEffect(() => {
    const renderLineChart = (canvasRef, chartValues) => {
        // Dummy data for the chart
        const data = {
          datasets: [
            {
              label: 'My Dataset',
             data : chartValues,
      
              borderColor: '#2e5ce5', // Blue color for the line
              fill: false, // To have an unfilled line
              tension: 0.1,
              pointRadius: 1, // Adjust the size of dots
              pointBackgroundColor: 'rgb(0, 0, 255)', // Blue color for the dots
            },
          ],
        };
      const months = ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        // Options for the chart
        const labels = ['', ...months ,'2020', ...months, '2021', ...months, '2023', ...months,'2024', 'FEB']
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
                },
              ticks:{
                  // maxTicksLimit: 7,
                  callback: function (props) {
                      const display = [12, 24, 36, 48, 60]
                      return display.includes(props) ? labels[props] : null; // Add 'k' to values greater than zero
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
                  dash: [4,4],
                },
              // beginAtZero: true, // Start the y-axis from zero
              ticks: {
                maxTicksLimit: 5, // Set the maximum number of ticks to 5
                stepSize: Math.round(Math.max(...chartValues) / 6), // Set the step size for y-axis values as per the max value received for that chart
                color:'#d3ddf5',
                callback: function (value, index, values) {
                  return value === 0 ? '' : value + 'k'; // Add 'k' to values greater than zero
                },
      
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
              tooltip: {
                  enabled: false,
                //   position: 'nearest',
                //   external: externalTooltipHandler,
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

    renderLineChart(chartRef, chartValues);

    return () => {
      // Cleanup function to destroy the chart instance when component unmounts
      if (window.myChart) {
        window.myChart.destroy();
      }
    };
  }, [chartRef, chartValues, label]);

  return (
    <div className="chartPreview">
      <canvas height={150} width={300} ref={chartRef} id={label}/>
    </div>
  );
};
