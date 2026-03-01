const logNums = (n: number): void => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  console.log(...arr);
};

export { logNums };
