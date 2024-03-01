// we study through investigation!
// koi bhi chiz mein grip panna hai investigate karo yaar!
// kab tak tutorial loop mein phasse rahoge!
const accountId = 144553 // change nhi kiya ja sakta
let accountEmail = "dassubhomoy278@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState; // js mein semicolon use karo ya nhi apke uper hai

//accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2872322"
accountCity = "Bangalore"

/*
prefer not to use var because of issue in block and
functional scope
*/
console.log(accountId);
// now it is rubbish work to write all the time console.log insted of it
// we gonna print it in the table format using
// console.table([]) syntax!
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])