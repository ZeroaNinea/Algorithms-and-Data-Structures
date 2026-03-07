console.log('============================');
console.log('Array');

const arr = [1, 2, 3, 'Vishwas'];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}

arr.map((item) => console.log(item));

{
  console.log('.filter');
  const arr = [1, 2, 3, 4, 5];
  const arr2 = arr.filter((item) => item % 2 === 0);
  console.log(arr2);
}

{
  console.log('.reduce');
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((acc, item) => acc + item, 0);
  console.log(sum);
}

{
  console.log('.concat');
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = arr1.concat(arr2);
  console.log(arr3);
}

{
  console.log('.slice');
  const arr = [1, 2, 3, 4, 5];
  const arr2 = arr.slice(1, 4);
  console.log(arr2);
}

{
  console.log('.splice');
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 2);
  console.log(arr);
}
