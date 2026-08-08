const userEmail = "B@gmail.com"//"" //[] as true?

if(userEmail){ // if string empty then false else true
    console.log("got user email")
}else{
    console.log("don't have user email")
}

// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}

// for array use length
const obj = {}
if(Object.keys(obj).length==0){
    console.log("obj empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5 ?? 10
// val1=null??10
// val1=undefined??15
val1 = undefined ?? 2 ?? 3
console.log(val1)

// Ternirary Operator
// condition ? true : false 
const balance =600
balance >500 ? console.log("balance greater than 500") : console.log("balance less than 500")