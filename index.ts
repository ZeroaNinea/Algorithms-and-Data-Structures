import { toFahrenheit, toCelsius } from './celsius-fahrenheit/index.js';
import { logNums, logPairs } from './log-nums/index.js';
import {
  fibonacci,
  fibonacciRecursive,
} from './algorithms/fibonacci-sequence.js';
import { factorial, factorialRecursive } from './algorithms/factorial.js';
import { isPrime } from './algorithms/is-prime.js';
import { isPowerOfTwo } from './algorithms/is-power-of-two.js';
import { linearSearch } from './algorithms/search.js';

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
console.log('Fibonacci Recursive');
console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(6));
console.log('============================');

console.log('Factorial');
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log('Factorial Recursive');
console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(5));
console.log('============================');

console.log('Is Prime');
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log('============================');

console.log('Is Power of Two');
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log('============================');

console.log('Linear Search');
console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([1, 2, 3, 4, 5], 0));
console.log('============================');
