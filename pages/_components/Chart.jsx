// Import necessary dependencies
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import CustomTooltip from './CustomTooltip';
import { generateRandomArray } from '../_utils/helpers';

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
        contentSpan.style.display = 'flex';
        contentSpan.style.alignItems = 'center';
        contentSpan.style.justifyContent = 'center';
        contentSpan.innerHTML = bottomText + `<svg
        class="scoreQuestionIcon"
        id="growthTooltipundefined"
        width='15px'
        height="15px"
        view-box="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        style="margin-left: 3px;margin-top:2px"
      >
        <path
        style="fill:#2e5ce5 !important;"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.27241 7.43881V7.72441H6.46581V7.44901C6.46581 7.23141 6.50661 7.03421 6.58821 6.85741C6.67661 6.68061 6.78201 6.53781 6.90441 6.42901C7.03361 6.31341 7.16961 6.18761 7.31241 6.05161C7.46201 5.91561 7.59801 5.78641 7.72041 5.66401C7.84961 5.53481 7.95501 5.36481 8.03661 5.15401C8.12501 4.94321 8.16921 4.70521 8.16921 4.44001C8.16921 3.84161 7.97541 3.35201 7.58781 2.97121C7.20701 2.59041 6.66981 2.40001 5.97621 2.40001C5.26221 2.40001 4.68761 2.61761 4.25241 3.05281C3.81721 3.48121 3.59961 4.07281 3.59961 4.82761H4.79301C4.79301 4.41961 4.89501 4.10341 5.09901 3.87901C5.30981 3.64781 5.60221 3.53221 5.97621 3.53221C6.28901 3.53221 6.53381 3.61721 6.71061 3.78721C6.88741 3.95721 6.97581 4.17481 6.97581 4.44001C6.97581 4.61681 6.93161 4.78341 6.84321 4.93981C6.76161 5.08941 6.65621 5.21521 6.52701 5.31721C6.40461 5.41241 6.26861 5.52801 6.11901 5.66401C5.97621 5.79321 5.84021 5.92921 5.71101 6.07201C5.58861 6.20801 5.48321 6.39501 5.39481 6.63301C5.31321 6.87101 5.27241 7.13961 5.27241 7.43881ZM5.87421 9.78481C6.10541 9.78481 6.29921 9.71001 6.45561 9.56041C6.61201 9.40401 6.69021 9.21361 6.69021 8.98921C6.69021 8.77161 6.61201 8.58461 6.45561 8.42821C6.29921 8.27181 6.10541 8.19361 5.87421 8.19361C5.64301 8.19361 5.44921 8.27181 5.29281 8.42821C5.13641 8.57781 5.05821 8.76481 5.05821 8.98921C5.05821 9.21361 5.13641 9.40401 5.29281 9.56041C5.44921 9.71001 5.64301 9.78481 5.87421 9.78481Z"
        />
      </svg>`;
        // contentSpan.innerHTML = bottomText;
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
       data : generateRandomArray(100, 1000),

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
