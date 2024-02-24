import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { formatNumberInK, getDataForTimeFrame } from '@/_utils/helpers';

const ChartPreview = ({ id, isSmall, trend_data, selectedTimeFrame }) => {
  const dataToRender = getDataForTimeFrame(trend_data, selectedTimeFrame);
  const valuesArray = dataToRender.map(entry => entry.value);
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const monthsSet = [];
  dataToRender?.forEach(entry => {
    const date = new Date(entry.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-us', { month: 'short' });

    // Exclude January
    if (month !== 'Jan') {
      monthsSet.push(month);
    }else{
      monthsSet.push(year);
    }
  // });
});
const monthsArray = Array.from(monthsSet);

  useEffect(() => {
    const renderLineChart = (canvasRef) => {
      const data = {
        datasets: [
          {
            label: 'My Dataset',
            data: valuesArray,

            borderColor: '#2e5ce5',
            fill: false,
            tension: 0.1,
            pointRadius: 0,
            // pointBackgroundColor: 'rgb(0, 0, 255)',
          },
        ],
      };

      const options = {
        scales: {
          x: {
            type: 'category',
            labels: monthsArray,
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
                if(isSmall){
                  return null;
                }
                const display = monthsArray.map((value, index) => typeof value === 'number' ? index : null).filter(index => index !== null);
                return display.includes(props) ? monthsArray[props] : null; 
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
              stepSize: Math.round(Math.max(...valuesArray) / 6),
              color: '#d3ddf5',
              callback: function (value, index, values) {
                if(isSmall){
                  return null;
                }
                return formatNumberInK(value);
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

    renderLineChart(canvasRef, valuesArray);

    return () => {
      // Cleanup function to destroy the chart instance when component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [canvasRef, selectedTimeFrame, id]);

  return (
    <div className="chartPreview">
      <canvas height={ isSmall? 40: 150} width={isSmall ? 200 : 300} ref={canvasRef} id={id} style={{margin:'auto'}}/>
    </div>
  );
};

export default ChartPreview;