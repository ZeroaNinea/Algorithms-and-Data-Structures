// constant
// S O(1)
// T O(1)
const toFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

// constant
// S O(1)
// T O(1)
const toCelsius = (fahrenheit: number): number => {
  return ((fahrenheit - 32) * 5) / 9;
};

export { toFahrenheit, toCelsius };
