console.log('============================');
console.log('Arrays');

const arr = [1, 2, 3, 'Vishwas'];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}
