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
