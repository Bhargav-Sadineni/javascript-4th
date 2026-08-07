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