const name = "Subhomoy"
const repoCount = 13;

console.log(name + repoCount +"value"); // it pretty much old

// modern (use backticks)
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); // string interpolation

const gameName = new String("subhomoy")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //SUBHOMOY
console.log(gameName.charAt(2)); // b
console.log(gameName.indexOf('b')); //2

const newString = gameName.substring(0,4); // subh
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const a =   "    hitesh     "
console.log(a); //     hitesh 
console.log(a.trim());  // hitesh

const url = "https://hitesh.com/hitesh%20choudhary"
const realurl = url.replace('%20' , '_')
console.log(realurl) //https://hitesh.com/hitesh_choudhary

console.log(url.includes('hitesh'));

const gameName1 = "Subhomoy-com-dot" // important hai bhai
console.log(gameName1.split('-')) // [ 'Subhomoy', 'com', 'dot' ]





