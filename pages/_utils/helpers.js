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
