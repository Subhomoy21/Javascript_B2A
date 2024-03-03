let score = 33
console.log(typeof(score));

let score1 = "33"
let valueInNumber = Number(score1)
console.log(typeof valueInNumber);

let score2 = "33ab"
let valueInNumber2 = Number(score2)
console.log(valueInNumber2); // not a number

let inv = true;
let vInNumber = Number(inv)
console.log(typeof(vInNumber));
console.log(vInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true , 0=> false
// "" => false
//"subhomoy" => true

let someNumber = 33
let stringnumber = String(someNumber)
console.log(stringnumber)
console.log(typeof stringnumber)