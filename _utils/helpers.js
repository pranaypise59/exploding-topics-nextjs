export function generateRandomArray(min, max) {
    // Ensure min is less than max
    if (min >= max) {
      throw new Error('Min value must be less than max value');
    }
  
    // Initialize the result array with the first element as 0
    const result = [0];
  
    // Generate the remaining 61 random integer numbers
    for (let i = 1; i <= 61; i++) {
      const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
      result.push(randomValue);
    }
  
    return result;
  }


  export const generateRealisticUptrendArray = (length) => {
    const uptrendArray = [];
    let currentValue = 50; // Starting value
  
    for (let i = 0; i < length; i++) {
      // Simulate upward movement with some fluctuations
      const upwardMovement = Math.random() * 10 + 5;
      currentValue += upwardMovement;
  
      // Introduce occasional drops
      if (i % 8 === 0 && i !== 0) {
        // Simulate a drop by subtracting a random value
        const drop = Math.random() * 30 + 10;
        currentValue -= drop;
  
        // Ensure the value doesn't go below 0
        if (currentValue < 0) {
          currentValue = 0;
        }
      }
  
      // Ensure the value doesn't exceed 500
      if (currentValue > 500) {
        currentValue = 500;
      }
  
      uptrendArray.push(currentValue);
    }
  
    return uptrendArray;
  };


  export const generateRealisticDowntrendArray = (length) => {
    const downtrendArray = [];
    let currentValue = 450; // Starting value, higher to simulate a downtrend
  
    for (let i = 0; i < length; i++) {
      // Simulate downward movement with some fluctuations
      const downwardMovement = Math.random() * 10 + 5;
      currentValue -= downwardMovement;
  
      // Introduce occasional deeper drops
      if (i % 10 === 0 && i !== 0) {
        // Simulate a deeper drop by subtracting a random value (larger drop)
        const deeperDrop = Math.random() * 50 + 20;
        currentValue -= deeperDrop;
  
        // Ensure the value doesn't go below 0
        if (currentValue < 0) {
          currentValue = 0;
        }
      }
  
      // Ensure the value doesn't go above 500
      if (currentValue > 500) {
        currentValue = 500;
      }
  
      downtrendArray.push(currentValue);
    }
  
    return downtrendArray;
  };
  

  export function calculateLinearTrendline(data){
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
  
    for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += data[i];
      sumXY += i * data[i];
      sumX2 += i * i;
    }
  
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
  
    const trendline = data.map((_, i) => slope * i + intercept);
    return trendline;
  };

  export function formatNumberInK(number) {
    // Remove commas from the input number
    const sanitizedNumber = parseFloat(number.toString().replace(/,/g, ''));
    const roundedNumber = Math.round(sanitizedNumber * 10) / 10; // Round to one decimal place
  
    if (roundedNumber >= 1000) {
      return (roundedNumber / 1000).toFixed(1) + 'k';
    }
  
    return roundedNumber.toFixed(1).toString();
  }
  

  import { useState, useEffect } from 'react';

export const useDurationFormatter = (input) => {
  const [formattedValue, setFormattedValue] = useState('');

  useEffect(() => {
    const formatDuration = (input) => {
      if (!input) {
        setFormattedValue('');
        return;
      }
      const lowerCaseInput = input.toLowerCase();
      const numericValue = parseInt(lowerCaseInput, 10);
      if (isNaN(numericValue)) {
        setFormattedValue('Invalid Input');
        return;
      }

      if (lowerCaseInput.includes('y')) {
        setFormattedValue(`${numericValue} ${numericValue === 1 ? 'Year' : 'Years'}`);
      } else if (lowerCaseInput.includes('m')) {
        setFormattedValue(`${numericValue} ${numericValue === 1 ? 'Month' : 'Months'}`);
      } else {
        setFormattedValue('Invalid Unit');
      }
    };

    formatDuration(input);
  }, [input]);

  return formattedValue;
};

function getIndexByMonthYear(data, targetMonth, targetYear) {
  return data.findIndex((item) => {
    const date = new Date(item.date);
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    return month === targetMonth && year === targetYear;
  });
}

export function getDataForTimeFrame(trend_data, timeFrame) {
  if (!trend_data || !Array.isArray(trend_data) || trend_data.length === 0) {
    return [];
  }

  const lastElement = trend_data[trend_data.length - 1];
  const lastYear = new Date(lastElement.date).getFullYear();

  let startYear;
  switch (timeFrame) {
    case '3m':
      return trend_data.slice(-4, -1);
    case '6m':
      return trend_data.slice(-7, -1);
    case '1y':
      return trend_data.slice(-13, -1);
    case '2y':
    case '5y':
    case '10y':
    case '15y':
      startYear = lastYear - parseInt(timeFrame);
      break;
    default:
      return [];
  }

  const targetMonth = 3; // March
  const indexOfStartingData = getIndexByMonthYear(trend_data, targetMonth, startYear);

  return indexOfStartingData !== -1 ? trend_data.slice(indexOfStartingData, -1) : [];
}


export function getVolumeFromData(trend_data) {
  return trend_data?.length > 0 && formatNumberInK(trend_data[trend_data?.length - 1].value)
}


function calculatePercentageDifference(initialValue, newValue) {
  const percentageDifference = ((newValue - initialValue) / initialValue) * 100;
  return percentageDifference;
}

export function calculatePercentageGrowth(trend_data, timeframe) {
  const numMonths = {
    '3m': 4,
    '6m': 7,
    '1y': 13,
    '2y': 25,
    '5y': 61,
    '10y': 121,
    '15y': 181,
  }[timeframe];

  if (!numMonths) {
    console.error('Invalid timeframe provided');
    return [];
  }

  const currentvalue = trend_data.slice(-numMonths, -1);
  const totalCurrentValue = currentvalue.reduce((sum, entry) => sum + entry.value, 0);

  const prevValue = trend_data.slice((-numMonths - numMonths), -numMonths);
  const totalPrevValue = prevValue.reduce((sum, entry) => sum + entry.value, 0);

  const percentageDifference = calculatePercentageDifference(totalPrevValue, totalCurrentValue);

  return Math.round(percentageDifference);
}