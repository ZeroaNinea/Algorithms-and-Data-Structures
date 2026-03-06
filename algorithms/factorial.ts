export function factorial(n: number): number {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

export function factorialRecursive(n: number): number {
  if (n < 2) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}
