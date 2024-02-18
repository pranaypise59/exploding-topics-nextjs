// Import necessary dependencies
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import CustomTooltip from './CustomTooltip';

// Custom hook for managing the chart's canvas reference
const useChartRef = () => {
  const canvasRef = useRef(null);
  return canvasRef;
};

const getCustomTooldtip = () => {
    return <CustomTooltip text='Global Google search volume for this selected datapoint.'/>
};

const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');
    
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.backgroundColor = '#d6e9fb'
      tooltipEl.style.borderRadius = '3px';
      tooltipEl.style.color = 'white';
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, 0)';
      tooltipEl.style.transition = 'all .1s ease';
  
      const table = document.createElement('table');
      table.style.margin = '0px';
  
      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }
  
    return tooltipEl;
  };

const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);
  
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }
  
    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map(b => b.lines);
  
      const tableHead = document.createElement('thead');
  
      titleLines.forEach(title => {
        const tr = document.createElement('tr');
        tr.style.borderWidth = 0;
        tr.style.color = 'black';
        tr.style.textAlign = 'center';
        tr.style.fontWeight = 'normal';
        
        
        const th = document.createElement('th');
        th.style.fontWeight = 'normal';
        th.style.fontSize = '12px';
        th.style.borderWidth = 0;
        const text = document.createTextNode(isNaN(title) ? title : 'JAN');
        th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
      });
  
      const tableBody = document.createElement('tbody');
      bodyLines.forEach((body, i) => {
  
        const tr = document.createElement('tr');
        tr.style.color = '#2e5ce5';
        tr.style.fontWeight = 'bold';
        tr.style.textAlign = 'center';
        tr.style.fontSize = '18px';
        tr.style.borderWidth = 0;
  
        const td = document.createElement('td');
        td.style.borderWidth = 0;
  
        const numericPart = body[0].match(/[\d,]+/);
        const bottomText = `${numericPart}K/mo`
        const contentSpan = document.createElement('span');
        // contentSpan.innerHTML = bottomText + getCustomTooldtip();
        contentSpan.innerHTML = bottomText;
        td.appendChild(contentSpan);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });
  
      const tableRoot = tooltipEl.querySelector('table');
  
      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }
  
      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }
  
    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
  
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY - 65 + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = `${tooltip.options.padding + tooltip.options.padding - 5 + 'px'} ${tooltip.options.padding + tooltip.options.padding + 20 +  'px'}`;
  };
  
// Function to render line chart
const renderLineChart = (canvasRef) => {
  // Dummy data for the chart
  const data = {
    datasets: [
      {
        label: 'My Dataset',
       data : [0,25,41,93,69,87,62,24,85,59,32,55,65,77,59,42,38,20,96,54,100,100,76,66,34,76,85,87,90,83,20,67,30,19,70,28,55,41,55,46,14,35,83,92,19,18,70,80,88,39,86,91,48,89,57,16,85,27,55,41,19,46],

        borderColor: '#2e5ce5', // Blue color for the line
        fill: false, // To have an unfilled line
        tension: 0.1,
        pointRadius: 1, // Adjust the size of dots
        pointBackgroundColor: 'rgb(0, 0, 255)', // Blue color for the dots
      },
    ],
  };

  // Options for the chart
  const labels = ['', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC','2020', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', '2021', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', '2022', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', '2023', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC','2024', 'FEB']
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
                console.log(props,'hello props')
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
          stepSize: 20, // Set the step size for y-axis values
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
            position: 'nearest',
            external: externalTooltipHandler,
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
