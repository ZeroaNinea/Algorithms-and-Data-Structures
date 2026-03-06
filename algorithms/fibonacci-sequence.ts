export function fibonacci(n: number) {
  const fib: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1]! + fib[i - 2]!;
  }

  return fib;
}

export function fibonacciRecursive(n: number): number {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
