// console.log(2>1);
// console.log(2>=1);
// console.log(2!=1);
// console.log(1==2);

console.log("2" > 1);
console.log("02" > 1); // js mein yeh ho jata hai but typescript mein yeh nhi hota

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); // true
// the reason is that an equality check == and comparsions
// > <>== <= work differently.
// comparisons convert null to number, treating it as 0
// thats why (3) null >= 0 is true and (1) null>0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strictly check comparisions
// ===
console.log("2" == 2); // ya true
console.log("2" === 2); // false kaise same hai ek string hai ek number

