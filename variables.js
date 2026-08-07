console.log("Bhargav")
// variables and constants
const accountId = 144567 // here we cannot reaasign also
let accountEmail = "sadinenibhargav0@gmail.com" // we can only reassign the values
var accountPassword = "12345" // can redeclare and reassign
accountCity="guntur"
let accountState; // if we declare and did not initialize value it is undefined

// we cannot change const variables
//accountId=2   error assigning value to const variable

// never use var to declare variables it has problems related to block scope and functional scope

// use either let,const
accountEmail="hello"
accountPassword="1212"
accountCity="hyd"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

const user = {name : "bhargav"};
//const prevents reassignment, not mutation.
user.name="sadineni";
//user={} // error 
console.log(user.name);