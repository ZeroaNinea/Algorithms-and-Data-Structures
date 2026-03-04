import { toFahrenheit, toCelsius } from './celsius-fahrenheit/index.js';
import { logNums, logPairs } from './log-nums/index.js';
import { fibonacci } from './algorithms/fibonacci-sequence.js';
import { factorial } from './algorithms/factorial.js';

console.log('============================');
console.log('Celsius — Fahrenheit');
console.log(100, 'C = ', toFahrenheit(100), 'F');
console.log(212, 'F = ', toCelsius(212), 'C');
console.log('============================');

console.log('Log Numbers and Pairs');
logNums(10);
logPairs([1, 2, 3, 4, 5]);
console.log('============================');

console.log('Fibonacci Sequence');
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log('============================');

console.log('Factorial');
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log('============================');
