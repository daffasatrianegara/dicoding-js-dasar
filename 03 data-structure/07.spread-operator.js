const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(newObj);
console.log(copiedObj);
console.log(newArray);
console.log(copy);