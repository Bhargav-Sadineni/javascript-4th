//literal and constructors
//singleton

// object literals

const mySym = Symbol("key1")


const user = {
    name:"bhargav",// keys and values // was "name":"bhargav"
    "full name":"Sadineni Bhargav",
    //mySym:"mykey1", if you want to use as symbol
    [mySym]:"mykey1",
    age: 20, // here keys are also treated as strings automatically
    location: "bhopal",
    email:"bhrgav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(user.email);
//console.log(user[email]); shows error because key is treated as string
console.log(user["email"])

// we can't access full name using . we should use ""
// console.log(user.full name)
console.log(user["full name"])
//console.log(user.mySym);
//console.log(typeof user.mySym) // string
console.log(user[mySym])
console.log(typeof user[mySym])


user.email = "sadineni@gmail.com"
console.log(user);

// Object.freeze(user) // now no changes are allowed
user.age=22;
console.log(user); // here age is not updated

// functions also treated as normal key value pairs
user.greeting = function(){
    console.log("hello how are you");
    
}
user.greeting2 = function(){
    console.log(`hello how are you,i am ${this.name}`); // this to refer same object
    
}
console.log(user.greeting); // [Function (anonymous)]

console.log(user.greeting());  // why undefined is comming every time
console.log(user.greeting2())
