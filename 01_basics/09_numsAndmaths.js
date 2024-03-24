// +++++++++++++++++++++++++++++NUMBERS++++++++++++++++++++++++++++++
const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // 3 characters
console.log(balance.toFixed(2)); //100.00

const othNum = 123.8965
console.log(othNum.toPrecision(3)); //124 
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// Dsa concepts
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//node 01_basics/09_numsAndmaths.js
// +++++++++++++++++++++++++++MATHS+++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.33)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5 (ceil -> top value)
console.log(Math.floor(4.6)); // 4(floor -> down value)
console.log(Math.min(4,3,6,9)); // 3
console.log(Math.max(4,6,8,9)); //9

console.log(Math.random()); // hamesha 0 se 1 ke bicch ke values
console.log(Math.random)
