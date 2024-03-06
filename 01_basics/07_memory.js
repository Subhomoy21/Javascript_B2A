// +++++++++++++++++++memory++++++++++++++++++++++++++++
// Stack(primitive) , Heap(non primitive) 
let myYoutubename = "subhomoy"
let name = myYoutubename
name = "chaiaurcode"
console.log(myYoutubename);
console.log(name)

let userOne = {
    email: "user@google.com",
    upi : "user@ubl"
}
let userTwo = userOne;
userTwo.email = "subhomoy@google.com"

console.log(userOne.email)
console.log(userTwo.email)

// summary - jitne bhi primitive values hai numbers, string etc.
// yeh sab jate hai stack ke anadar aur stack ke andar jab bhi 
// koi chiz lenge apko uska ek copy milta hai
// heap mein anadar kuch bhi value rakhte hai toh hume
// uska reference milta hai 

