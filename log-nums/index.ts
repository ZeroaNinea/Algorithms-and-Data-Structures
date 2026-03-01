const logNums = (n: number): void => {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  console.log(...arr);
};

export { logNums };
