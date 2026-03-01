const logNums = (n: number): void => {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  console.log(...arr);
};

const logPairs = (nums: number[]): void => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
    }
  }
};

export { logNums, logPairs };
