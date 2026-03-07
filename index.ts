import { toFahrenheit, toCelsius } from './celsius-fahrenheit/index.js';
import { logNums, logPairs } from './log-nums/index.js';
import {
  fibonacci,
  fibonacciRecursive,
} from './algorithms/fibonacci-sequence.js';
import { factorial, factorialRecursive } from './algorithms/factorial.js';
import { isPrime } from './algorithms/is-prime.js';
import { isPowerOfTwo } from './algorithms/is-power-of-two.js';
import {
  linearSearch,
  binarySearch,
  binarySearchRecursive,
} from './algorithms/search.js';
import {
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
} from './algorithms/sorting.js';
import { cartesianProduct } from './algorithms/cartesian-product.js';
import { climbingStaircase } from './algorithms/climbing-staircase.js';

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

{
  console.log('Linear Search');
  const arr = [1, 2, 3, 4, 5];
  console.log(linearSearch(arr, 3));
  console.log(linearSearch(arr, 6));
  console.log(linearSearch(arr, 0));
  console.log('Binary Search');
  console.log(binarySearch(arr, 3));
  console.log(binarySearch(arr, 6));
  console.log(binarySearch(arr, 0));
  console.log('Binary Search Recursive');
  console.log(binarySearchRecursive(arr, 3));
  console.log(binarySearchRecursive(arr, 6));
  console.log(binarySearchRecursive(arr, 0));
  console.log('============================');
}

{
  const arr = [4, 5, 2, 1, 3];
  console.log('Bubble Sort');
  console.log(arr);
  bubbleSort(arr);
  console.log(arr);
  console.log('============================');
}

{
  const arr = [4, 5, 2, 1, 3];
  console.log('Insertion Sort');
  console.log(arr);
  insertionSort(arr);
  console.log(arr);
  console.log('============================');
}

{
  const arr = [4, 5, 2, 1, 3];
  console.log('Quick Sort');
  console.log(arr);
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  console.log('============================');
}

{
  const arr = [4, 5, 2, 1, 3];
  console.log('Merge Sort');
  console.log(arr);
  mergeSort(arr);
  console.log(arr);
  console.log('============================');
}

{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  console.log('Cartesian Product');
  console.log(cartesianProduct(arr1, arr2));
  console.log('============================');
}

console.log('Climbing Staircase');
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(5));
console.log('============================');
