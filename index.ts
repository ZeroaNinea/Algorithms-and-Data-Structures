import { toFahrenheit, toCelsius } from './celsius-fahrenheit/index.js';
import { logNums, logPairs } from './log-nums/index.js';

console.log('============================');
console.log('Celsius — Fahrenheit');
console.log(100, 'C = ', toFahrenheit(100), 'F');
console.log(212, 'F = ', toCelsius(212), 'C');
console.log('============================');

console.log('Log Numbers and Pairs');
logNums(10);
logPairs([1, 2, 3, 4, 5]);
console.log('============================');
