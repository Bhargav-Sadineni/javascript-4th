// datatypes are classified based on how they store data in memory and how to access the data
// primitive call by value
// 7 types
/* String,Number,BigInt,Boolean,null,undefined,Symbol*/
const score =100
const scoreValue =100.3

const isLoggedIn=false
const l=null
let x;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const bigNumber = 23456789234n

// what is const x

//js statically typed or dynamically typed

// non primitive or reference type // typeof is object
// Arrays,Objects,Functions

const heros = ["ironman","Captain","Thor"]
let myObj = {
    name:"Bhargav",
    age:22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof scoreValue )
console.log(typeof myfunction)

//---------------------------------------------------------

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "bhargav.com"

let anothername = myYoutubename
anothername="abc.com"

console.log(myYoutubename)
console.log(anothername); // see here it gets copy and both have different value 


let user1 = {
    email:"adinenibhargav0@gmail.com",
    age:18
}
let user2 = user1;
user2.email="abc@gmail.com"
console.log(user1.email);
console.log(user2.email) // here on changing user2 it changes user1 also because it by reference