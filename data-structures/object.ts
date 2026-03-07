console.log('============================');
console.log('Object');

const obj: {
  name: string;
  age: number;
  'key-three': boolean;
  hobby?: string;
  sayMyName: () => void;
} = {
  name: 'Bruce',
  age: 25,
  'key-three': true,
  sayMyName: () => console.log(obj.name),
};
obj.hobby = 'football';

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj['key-three']);
console.log(obj.hobby);
delete obj.hobby;
console.log(obj);
obj.sayMyName();

Object.keys(obj).forEach((key) => console.log(key));
Object.values(obj).forEach((value) => console.log(value));
Object.entries(obj).forEach((entry) => console.log(entry));
