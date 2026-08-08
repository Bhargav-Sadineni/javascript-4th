// console.log("B");
// console.log("h");
//  etc

 function sayMyName(){
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("g");
    console.log("a");
    console.log("v");
 }
// sayMyName is the function reference 
//  sayMyName() // execute
//  sayMyName

function add(number1, number2){ // parameters
     console.log(number1+number2)
 }
function add1(number1, number2){ // parameters
    // let result = number1+number2
    // return result
    return number1+number2
}
// add(3,4) // arguments
// add(4,"5")
// add(3,null)
// add("a",3)

const res = add(4,5);
 console.log(res); // undefined

 const res1=add1(4,5);
 console.log(res1)

 function loginUserMessage(username = "ram"){ //now it has default value 
    if(!username){  // similar to username === undefined
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
 }

 loginUserMessage("bhargav") // will not print it
 console.log(loginUserMessage("bhargava")) //bhargava just logged in
 console.log(loginUserMessage()) //undefined just logged in to check it use if elese statement
 // now undefined is not printed as we are using if statement

//  function calculateCartPrice(num1){
//     return num1
//  }
function calculateCartPrice(...num1){ // rest operator or spread operator
    return num1
 }
 console.log(calculateCartPrice(200,300,400)) // use rest operator and spread operator
 function calculateCartPrice1(val1,val2,...num1){ // rest operator or spread operator
    return num1
 }
 console.log(calculateCartPrice1(200,300,400,500)) // use rest operator and spread operator

 const user = {
    username:"bhargav",
    prices:123
 }

 function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`) // here we have to check 
 }
//  handleObject(user)
handleObject({
    username:"ram",
    price:1234
})

const myArr = [200,100,500,300]

function fun(getArr){
    return getArr[0]
}
console.log(fun(myArr))
console.log(fun([1,2,3,4]))