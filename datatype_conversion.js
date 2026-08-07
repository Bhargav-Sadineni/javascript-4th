let score ="33"
let score1="33ab"
let score2=null;

//const {score} = req.body // we donot know which datatype it is

console.log(typeof score);
console.log(typeof(score1));
console.log(typeof score2);

let valueInNumber = Number(score) // gaurantee the score is a number
console.log(typeof valueInNumber); // what if sscore is "33ab"

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); // shows as number
console.log(valueInNumber1); // NaN not a number

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // 0

let score3=undefined
console.log(typeof score3); // undefined
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // NaN

let score4=true
console.log(typeof score4); // boolean
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // 1

let score5=false
console.log(typeof score5); // boolean
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); // 0

// "33" => 33
// "33ab" => NaN
// true => 1; false=0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "bhargav" => true

let some = 33
let Ssome = String(some);
console.log(Ssome) // 33
console.log(typeof Ssome) // string