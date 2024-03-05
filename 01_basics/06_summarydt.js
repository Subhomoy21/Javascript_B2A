// 1. Primitive (call by value)
// 7 types : String, Number , boolean, null(empty)
//           undefined , Symbol , BigInteger

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // iski value undefined hogi

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); // false

const bigNumber = 34565555643343645444n // big int

// 2.Reference (Non primitive)
// Arrays , Objects ,Functions

const heros = ["shaktiman","doga","naagraj"]; // array
let myObj = { // object
    name : "Subhomoy",
    age : 21
}
 const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros)

//https://262.ecma-international.org/5.1/#sec-11.4.3